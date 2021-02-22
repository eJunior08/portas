import React from "react";

/* Styles */
import {
  ButtonStyled,
  Container,
  Content,
  Divider,
  Info,
  InfoContainer,
  SubContent,
  Subtitle,
  Title,
} from "./styles";

const Status: React.FC = () => {
  return (
    <Container>
      <Title>Status do Equipamento</Title>

      <Divider />

      <Content>
        <SubContent>
          <Subtitle>Interface</Subtitle>
          <Info>OK</Info>
        </SubContent>

        <SubContent>
          <Subtitle>Operando</Subtitle>
          <Info>Não</Info>
        </SubContent>

        <SubContent>
          <Subtitle>Últimos erros</Subtitle>
          <Info>45 | 45</Info>
        </SubContent>

        <Divider />

        <SubContent>
          <Subtitle>Situação do cliente:</Subtitle>
          <Info></Info>
        </SubContent>
      </Content>
    </Container>
  );
};

export default Status;
