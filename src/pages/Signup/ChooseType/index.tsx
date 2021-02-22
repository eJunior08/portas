import React from "react";
import { useHistory } from "react-router-dom";

/* Styles */
import {
  ButtonsContainer,
  ButtonType,
  ChooseContainer,
  Container,
  Description,
  HeaderContent,
  PageHeader,
  ReturnIconStyled,
  Subtitle,
  Title,
  TopBar,
} from "./styles";

const ChooseType: React.FC = () => {
  const history = useHistory();

  function handleBack() {
    console.log("back");
    history.goBack();
  }

  function handleLink(link: string) {
    history.push(link);
  }

  return (
    <Container>
      <PageHeader>
        <TopBar>
          <ReturnIconStyled onClick={handleBack} />
        </TopBar>

        <HeaderContent>
          <Title>Crie sua conta agora</Title>
          <Description>Selecione qual tipo de usuário você é.</Description>
        </HeaderContent>
      </PageHeader>

      <ChooseContainer>
        <Subtitle>01. Você é...</Subtitle>

        <ButtonsContainer>
          <ButtonType onClick={() => handleLink("sign-up-common-user")}>
            Usuário comum
          </ButtonType>
          <ButtonType onClick={() => handleLink("sign-up-about-tech")}>
            Técnico de uma empresa
          </ButtonType>
          <ButtonType onClick={() => handleLink("sign-up-organization")}>
            Empresa técnica
          </ButtonType>
        </ButtonsContainer>
      </ChooseContainer>
    </Container>
  );
};

export default ChooseType;
