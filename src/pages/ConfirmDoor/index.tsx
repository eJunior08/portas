import React from "react";
import { useHistory } from "react-router-dom";
import Identification from "../../components/Cards/CardDoor/Identification";

/* Styles */
import {
  ButtonStyled,
  Container,
  Content,
  Divider,
  InfoPage,
  Subtitle,
  Title,
  TopBar,
} from "./styles";

const ConfirmDoor: React.FC = () => {
  const history = useHistory();

  function handleGoBack() {
    history.goBack();
  }

  function handleAddDoor() {
    history.push("dashboard");
  }

  function handleCancel() {
    history.goBack();
  }

  return (
    <Container>
      <TopBar onClick={handleGoBack}>Voltar</TopBar>

      <div>
        <InfoPage>
          <Title>Cadastre sua porta</Title>
        </InfoPage>

        <Divider />

        <Content>
          <Identification />
          <ButtonStyled onClick={handleAddDoor}>Adicionar Porta</ButtonStyled>
          <ButtonStyled danger onClick={handleCancel}>
            Cancelar
          </ButtonStyled>
          {/* <Status /> */}
          {/* <ButtonStyled onClick={handleAddDoor}>Adicionar Porta</ButtonStyled>
          <ButtonStyled danger onClick={handleCancel}>
            Cancelar
          </ButtonStyled> */}
        </Content>
      </div>
    </Container>
  );
};

export default ConfirmDoor;
