import React from "react";

/* Styles */
import {
  ButtonStyled,
  Container,
  Content,
  Divider,
  SubContent,
  Subtitle,
  Title,
} from "./styles";

const CardHistory: React.FC = () => {
  return (
    <Container>
      <Title>Histórico de Eventos</Title>

      <Divider />

      <Content>
        <SubContent>
          <Subtitle>20/01/2020 16:18 - Erro 45: Motor Travado</Subtitle>
        </SubContent>

        <SubContent>
          <Subtitle>20/01/2020 16:18 - Erro 45: Motor Travado</Subtitle>
        </SubContent>
      </Content>
    </Container>
  );
};

export default CardHistory;
