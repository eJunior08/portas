import React from 'react';

/* Styles */
import {
  ButtonsContainer,
  ButtonType,
  ChooseContainer,
  Container,
  Description,
  HeaderContent,
  PageHeader,
  Subtitle,
  Title,
  TopBar,
} from './styles';

const ChooseType: React.FC = () => {
  return (
    <Container>
      <PageHeader>
        <TopBar>Voltar</TopBar>

        <HeaderContent>
          <Title>Crie sua conta agora</Title>
          <Description>Selecione qual tipo de usuário você é.</Description>
        </HeaderContent>
      </PageHeader>

      <ChooseContainer>
        <Subtitle>01. Você é...</Subtitle>

        <ButtonsContainer>
          <ButtonType>Usuário comum</ButtonType>
          <ButtonType>Técnico de uma empresa</ButtonType>
          <ButtonType>Empresa técnica</ButtonType>
        </ButtonsContainer>
      </ChooseContainer>
    </Container>
  );
};

export default ChooseType;
