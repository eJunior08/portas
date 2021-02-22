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
import CloseCall from "../../components/CloseCall";

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

const UPDATE_CALLED = gql`
  mutation UpdateSingleCalled($data: Called!) {
    updateSingleCalled(data: $data) {
      closed
    }
  }
`;

const ManageAssignCalleds: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clientId, setClientId] = useState("");

  const isTechnician = (JSON.parse(
    localStorage.getItem("roles") as string
  ) as number[]).includes(Roles.TECHNICIAN);

  const { loading, error, data } = useQuery(LIST_TECHNICIAN_OPEN_CALLEDS, {
    pollInterval: 500,
  });

  const [closeCall] = useMutation(UPDATE_CALLED);

  console.log("data", data);

  const info = data?.GetUnassignedOpenCalleds;
  const history = useHistory();

  function handleGoBack() {
    history.goBack();
  }

  async function handleOnClose(obj?: { signature: string }) {
    try {
      if (obj) {
        const data = {
          ...obj,
          closed: true,
          client: {
            id: clientId,
            name: "",
          },
          changedParts: [],
          changedSettings: [],
          remote_actions: "",
          local_actions: "",
        };
        console.log("called", data);
        const response = await closeCall({ variables: { data } });
        console.log("response", response);
        handleGoBack();
      }
    } catch (erro) {
      console.log("Erro Manage Assign Calleds", erro);
    } finally {
      setIsOpen(false);
    }
  }

  async function handleClickCard(clientAssistanceId: string) {
    setClientId(clientAssistanceId);
    setIsOpen(true);
  }

  const modalMemoized = useMemo(
    () => (
      <Modal isOpen={isOpen} onClose={() => handleOnClose()}>
        <CloseCall onClose={handleOnClose} />
      </Modal>
    ),
    [isOpen, handleOnClose]
  );

  return (
    <>
      <Container>
        <TopBar onClick={handleGoBack}>Voltar</TopBar>

        <InfoPage>
          <Title>Visualize seus chamados</Title>
        </InfoPage>

        <Divider />

        <Content>
          {loading ? (
            <span>Carregando...</span>
          ) : info.length > 0 ? (
            <>
              {info
                .filter((i: any) => i.techinician)
                .map((d: any) => (
                  <CardCalled
                    key={d.id}
                    name={d.name}
                    description={d.description}
                    closed={d.closed}
                    onClick={() => handleClickCard(d.client.id)}
                  />
                ))}
            </>
          ) : (
            <>
              <img src={noData} alt="Nenhum chamado encontrado" />
              <Subtitle>Nenhum chamado encontrado</Subtitle>
            </>
          )}
        </Content>
      </Container>

      {modalMemoized}
    </>
  );
};

export default ManageAssignCalleds;
