import React from "react";
import { useHistory } from "react-router-dom";

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

const CardParams: React.FC = () => {
  const history = useHistory();

  function handleSeeParams() {
    history.push("params");
  }

  return (
    <Container>
      <Title>Parâmetros</Title>

      <Divider />

      <Content>
        <ButtonStyled onClick={handleSeeParams}>Ver parâmetros</ButtonStyled>
      </Content>
    </Container>
  );
};

export default CardParams;
