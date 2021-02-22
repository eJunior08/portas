import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useMemo, useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Button,
  Container,
  Content,
  Divider,
  InfoPage,
  Subtitle,
  Title,
  TopBar,
} from "./styles";

import noData from "../../assets/images/NoData.svg";
import { Roles } from "../../config/roles.config";
import Modal from "../../components/Modal";
import AddCall from "../../components/AddCall";
import CardCalled from "../../components/Cards/CardCalled";

const LIST_CLIENT_OPEN_CALLEDS = gql`
  query {
    GetClientOpenCalleds {
      name
      remote_actions
      local_actions
      signature
      description
      closed
      door {
        name
      }
      techinician {
        name
      }
      casuality {
        name
      }
      changedParts {
        name
      }
      changedSettings {
        name
      }
    }
  }
`;

const LIST_TECHNICIAN_OPEN_CALLEDS = gql`
  query {
    GetUnassignedOpenCalleds {
      id
      name
      remote_actions
      local_actions
      signature
      description
      closed
      door {
        id
        name
      }
      techinician {
        id
        name
      }
      client {
        id
        name
      }
      casuality {
        id
        name
        isResovled
      }
      changedParts {
        id
        name
      }
      changedSettings {
        id
        name
        before
        after
      }
    }
  }
`;

const LIST_ORGANIZATION_OPEN_CALLEDS = gql`
  query {
    GetAllOpenCalleds {
      id
      name
      description
      closed
    }
  }
`;

const GET_CLIENT_ACTIVE_CLIENTASSISTANCE = gql`
  query {
    GetClientActiveClientAssistance {
      id
    }
  }
`;

const CREATE_CALLED_USING_CLIENT = gql`
  mutation CreateCalledUsingClient($called: Called!) {
    CreateCalledUsingClient(called: $called) {
      sucess
      message
    }
  }
`;

const ASSIGN_TECHNICIAN_TO_CALLED = gql`
  mutation AssingTechinician($calledId: String!, $techinicianId: String) {
    AssingTechinician(calledId: $calledId, techinicianId: $techinicianId) {
      sucess
      message
    }
  }
`;

const ManageCalls: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isClient = (JSON.parse(
    localStorage.getItem("roles") as string
  ) as number[]).includes(Roles.CLIENTUSER);

  const isTechnician = (JSON.parse(
    localStorage.getItem("roles") as string
  ) as number[]).includes(Roles.TECHNICIAN);

  const isOrganization = (JSON.parse(
    localStorage.getItem("roles") as string
  ) as number[]).includes(Roles.ORGANIZATION);

  const { loading, error, data } = useQuery(
    isClient
      ? LIST_CLIENT_OPEN_CALLEDS
      : isTechnician
      ? LIST_TECHNICIAN_OPEN_CALLEDS
      : LIST_ORGANIZATION_OPEN_CALLEDS,
    {
      pollInterval: 500,
    }
  );

  const {
    loading: loadingClientAssistance,
    error: errorClientAssistance,
    data: dataClientAssistance,
  } = useQuery(GET_CLIENT_ACTIVE_CLIENTASSISTANCE);

  const [addCalled] = useMutation(CREATE_CALLED_USING_CLIENT);
  const [assignCalled] = useMutation(ASSIGN_TECHNICIAN_TO_CALLED);

  console.log("data", data);

  const info = isClient
    ? data?.GetClientOpenCalleds
    : isTechnician
    ? data?.GetUnassignedOpenCalleds
    : data?.GetAllOpenCalleds;

  const history = useHistory();

  function handleGoBack() {
    history.goBack();
  }

  function handleOnClose(obj?: { description: string; name: string }) {
    if (obj) {
      const called = {
        ...obj,
        closed: false,
        client: {
          id: dataClientAssistance.GetClientActiveClientAssistance.id,
          name: "",
        },
        changedParts: [],
        changedSettings: [],
        remote_actions: "",
        local_actions: "",
        signature: "",
      };

      addCalled({ variables: { called } });
      handleGoBack();
    }
    setIsOpen(false);
  }

  async function handleClickCard(calledId?: string) {
    if (isTechnician) {
      const response = await assignCalled({
        variables: {
          calledId,
        },
      });

      console.log("response", response);
    }
  }

  const modalMemoized = useMemo(
    () => (
      <Modal isOpen={isOpen} onClose={() => handleOnClose()}>
        <AddCall onClose={handleOnClose} />
      </Modal>
    ),
    [isOpen, handleOnClose]
  );

  return (
    <>
      <Container>
        <TopBar onClick={handleGoBack}>Voltar</TopBar>

        <div>
          <InfoPage>
            <Title>Visualize seus chamados</Title>
          </InfoPage>

          <Divider />

          <Content>
            {loading ? (
              <span>Carregando...</span>
            ) : info.length > 0 ? (
              <>
                {isClient && (
                  <Button type="button" onClick={() => setIsOpen(true)}>
                    Criar chamado
                  </Button>
                )}

                {info
                  .filter((i: any) => !i.techinician)
                  .map((d: any) => (
                    <CardCalled
                      key={d.id}
                      name={d.name}
                      description={d.description}
                      closed={d.closed}
                      onClick={() => handleClickCard(d.id)}
                    />
                  ))}
              </>
            ) : (
              <>
                {isClient && (
                  <Button type="button" onClick={() => setIsOpen(true)}>
                    Criar chamado
                  </Button>
                )}

                <>
                  <img
                    width={200}
                    src={noData}
                    alt="Nenhum chamado encontrado"
                  />
                  <Subtitle>Nenhum chamado encontrado</Subtitle>
                </>
              </>
            )}
          </Content>
        </div>
      </Container>

      {modalMemoized}
    </>
  );
};

export default ManageCalls;
