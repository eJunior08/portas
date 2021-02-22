import React from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

import {
  Container,
  Content,
  Divider,
  InfoPage,
  Subtitle,
  Title,
  TopBar,
} from "./styles";

import noData from "../../assets/images/NoData.svg";
import CardAssistance from "../../components/Cards/CardAssistance";
import { Organization } from "../../interfaces/Organization";

const LIST_AVALIABLE_ASSISTANCES = gql`
  query {
    ListAvaliableAssistances {
      id
      name
      endereco
      numero
      complemento
      bairro
      cidade
      cep
      nome_fantasia
      cnpj
      responsible_name
      responsible_email
      responsible_phone
      phone
    }
  }
`;

const LINK_CLIENT_TO_ASSISTANCE = gql`
  mutation linkClientToAssistance($assistanceId: String!) {
    LinkClientToAssistance(assistanceId: $assistanceId) {
      sucess
      message
    }
  }
`;

const GET_CLIENT_ACTIVE_CLIENTASSISTANCE = gql`
  query {
    GetClientActiveClientAssistance {
      id
      assistance {
        nome_fantasia
      }
    }
  }
`;

const QUERY_OPTIONS = {
  pollInterval: 500,
};

const AssistancesPage: React.FC = () => {
  const { loading, error, data } = useQuery(
    LIST_AVALIABLE_ASSISTANCES,
    QUERY_OPTIONS
  );

  const {
    loading: loadingLink,
    error: errorLink,
    data: dataLink,
    refetch: refetchLink,
  } = useQuery(GET_CLIENT_ACTIVE_CLIENTASSISTANCE, QUERY_OPTIONS);

  const [linkClient] = useMutation(LINK_CLIENT_TO_ASSISTANCE);

  const history = useHistory();

  const clientHasAssistance = !!getAssistanceClientLink();
  const assistances = clientHasAssistance
    ? findAssistance(getAssistanceClientLink() as string)
    : data?.ListAvaliableAssistances;

  console.log("clientHasAssistance", clientHasAssistance);

  function findAssistance(name: string) {
    data?.ListAvaliableAssistances.filter(
      (item: any) => item.responsible_name === name
    );
  }

  function existAssistance() {
    return Array.isArray(assistances) && assistances.length > 0;
  }

  function getAssistanceClientLink(): string | null {
    console.log(
      "dataLink.GetClientActiveClientAssistance",
      dataLink?.GetClientActiveClientAssistance
    );
    return dataLink?.GetClientActiveClientAssistance?.name;
  }

  function handleGoBack() {
    history.goBack();
  }

  async function handleLinkClientToAssistance(id: string) {
    try {
      console.log("id", id);
      const response = await linkClient({
        variables: {
          assistanceId: id,
        },
      });

      console.log("response", response);

      refetchLink();

      history.goBack();
    } catch (err) {
      console.log("err", err);
    }
  }

  return (
    <Container>
      <TopBar onClick={handleGoBack}>Voltar</TopBar>

      <div>
        <InfoPage>
          <Title>Encontre seu suporte</Title>
        </InfoPage>

        <Divider />

        <Content>
          {loading ? (
            <span>Carregando...</span>
          ) : existAssistance() ? (
            assistances.map((assistance: Organization) => (
              <CardAssistance
                key={assistance.cnpj}
                endereco={assistance.endereco}
                nome_fantasia={assistance.nome_fantasia}
                phone={assistance.phone}
                onClick={() => handleLinkClientToAssistance(assistance.id)}
              />
            ))
          ) : (
            <>
              <img width={200} src={noData} alt="Nenhuma empresa encontrada" />
              <Subtitle>Nenhuma empresa encontrada</Subtitle>
            </>
          )}
        </Content>
      </div>
    </Container>
  );
};

export default AssistancesPage;
