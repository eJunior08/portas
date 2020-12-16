import React from 'react';

import cellphone_confirmed from '../../assets/images/cellphone_confirmed.svg';

/* Styles */
import {
  Container,
  Content,
  TitleContainer,
  Title,
  Text,
  Button,
} from './styles';

const Finished: React.FC = () => {
  return (
    <Container>
      <Content>
        <TitleContainer>
          <Title>Cadastro Realizado</Title>
          <img src={cellphone_confirmed} alt="Confirmed" />
        </TitleContainer>
        <Text>Agora você pode aproveitar todos os recursos</Text>
      </Content>

      <Button>Login</Button>
    </Container>
  );
};

export default Finished;
