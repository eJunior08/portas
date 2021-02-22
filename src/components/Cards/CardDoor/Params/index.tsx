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

const Params: React.FC = () => {
  return (
    <Container>
      <Title>Lista de Parâmetros</Title>

      <Divider />

      <Content>
        <SubContent>
          <Subtitle>(F01) Modo de operação</Subtitle>
          <Info>Automático</Info>
        </SubContent>

        <SubContent>
          <Subtitle>(F02) Tempo de trava</Subtitle>
          <Info>3 segundo(s)</Info>
        </SubContent>

        <SubContent>
          <Subtitle>(F03) Tempo de luz</Subtitle>
          <Info>5 segundo(s)</Info>
        </SubContent>

        <SubContent>
          <Subtitle>(F04) Velocidade de abertura</Subtitle>
          <Info>85%</Info>
        </SubContent>

        <SubContent>
          <Subtitle>(F05) Velocidade de fechamento</Subtitle>
          <Info>85%</Info>
        </SubContent>
      </Content>
    </Container>
  );
};

export default Params;
