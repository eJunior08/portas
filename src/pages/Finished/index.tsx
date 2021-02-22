import React from "react";
import { useHistory } from "react-router-dom";

import cellphone_confirmed from "../../assets/images/cellphone_confirmed.svg";

/* Styles */
import {
  Container,
  Content,
  TitleContainer,
  Title,
  Text,
  Button,
} from "./styles";

const Finished: React.FC = () => {
  const history = useHistory();

  function goToLogin() {
    history.push("");
  }

  return (
    <Container>
      <Content>
        <TitleContainer>
          <Title>Cadastro Realizado</Title>
          <img src={cellphone_confirmed} alt="Confirmed" />
        </TitleContainer>
        <Text>Agora você pode aproveitar todos os recursos</Text>
      </Content>

      <Button onClick={goToLogin}>Login</Button>
    </Container>
  );
};

export default Finished;
