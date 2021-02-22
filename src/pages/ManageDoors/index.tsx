import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useHistory } from "react-router-dom";

/* Components */
// import PageTitle from "../../components/PageTitle";
import SmallCard from "../../components/Cards/SmallCard";
// import SmallHeader from "../../components/Headers/SmallHeader";

/* Styles */
import {
  ButtonStyled,
  Container,
  Content,
  Divider,
  DoorsContainer,
  InfoPage,
  Subtitle,
  Title,
  TopBar,
} from "./styles";

import noData from "../../assets/images/NoData.svg";

const GET_DOORS = gql`
  query {
    getDoor {
      id
      name
      endereco
      numero
      complemento
      bairro
      cidade
      cep
      firmware_version
      model_serial_number
      isOnline
      central_serial_number
    }
  }
`;

const ManageDoors: React.FC = () => {
  const { loading, error, data } = useQuery(GET_DOORS, {
    pollInterval: 500,
  });

  console.log("data", data);

  const history = useHistory();

  function handleGoBack() {
    history.goBack();
  }

  return (
    <>
      {/* <SmallHeader title="" /> */}
      <Container>
        {/* <Header /> */}
        {/* <PageTitle title="Gerencie suas portas">
          <ButtonStyled title="Criar porta">
          <PlusStyled />
          </ButtonStyled>
        </PageTitle> */}

        <TopBar onClick={handleGoBack}>Voltar</TopBar>

        <div>
          <InfoPage>
            <Title>Gerencie suas portas</Title>
            <ButtonStyled
              title="Criar porta"
              onClick={() => history.push("camera-door")}
            >
              {/* <PlusStyled /> */}+
            </ButtonStyled>
          </InfoPage>

          <Divider />

          <Content>
            {loading ? (
              <span>Carregando...</span>
            ) : data?.getDoor.length > 0 ? (
              data.getDoor.map((door: any) => (
                <SmallCard key={door.id} title={door.name} />
              ))
            ) : (
              <>
                <img src={noData} alt="Nenhuma porta encontrada" />
                <Subtitle>Nenhuma porta encontrada</Subtitle>
              </>
            )}
          </Content>
        </div>
        {/* <DoorsContainer>
          <SmallCard title="Porta Central" />
          <SmallCard title="Porta dos Fundos" />
          <SmallCard title="Porta da Frente 01" />
          <SmallCard title="Porta da Frente 02" />
          <SmallCard title="Porta da Frente 03" />
        </DoorsContainer> */}
      </Container>
    </>
  );
};

export default ManageDoors;
