import React from "react";
import { useHistory } from "react-router-dom";
import Identification from "../../components/Cards/CardDoor/Identification";
import Status from "../../components/Cards/CardDoor/Status";
import CardHistory from "../../components/Cards/CardHistory";
import CardParams from "../../components/Cards/CardParams";

/* Styles */
import {
  ButtonStyled,
  Container,
  Content,
  Divider,
  InfoPage,
  Title,
  TopBar,
} from "./styles";

const Attendance: React.FC = () => {
  const history = useHistory();

  function handleGoBack() {
    history.goBack();
  }

  function handleEndAttendance() {
    history.push("conclusion");
  }

  return (
    <Container>
      <TopBar onClick={handleGoBack}>Voltar</TopBar>

      <InfoPage>
        <Title>Cadastre sua porta</Title>
      </InfoPage>

      <Divider />

      <Content>
        <Identification />
        <Status />
        <CardParams />
        <CardHistory />

        <ButtonStyled onClick={handleEndAttendance}>
          Encerrar atendimento
        </ButtonStyled>
        {/* <ButtonStyled>Adicionar Porta</ButtonStyled>
        <ButtonStyled danger>Cancelar</ButtonStyled> */}
      </Content>
    </Container>
  );
};

export default Attendance;
