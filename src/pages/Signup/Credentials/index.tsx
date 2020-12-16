import React from 'react';
import { Formik } from 'formik';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

/* Styles */
import {
  Container,
  Description,
  FormContainer,
  HeaderContent,
  Legend,
  PageHeader,
  Title,
  TopBar,
} from './styles';
import Input from '../../../components/Form/Input';

const SINGUP = gql`
  mutation {
    registerUser(
      data: {
        first_name: "Elson"
        last_name: "Oliveira,"
        cpf: "61358518963"
        phone: "12323233"
        name: "Elson Oliveira"
        endereco: "R. Teste"
        numero: "123"
        complemento: "Teste complmento"
        bairro: "Bairro Teste"
        cidade: "Teste Cidade"
        cep: "11111111"
        email: "elsonfojr@gmail.com"
        password: "12345678"
      }
    ) {
      sucess
      message
    }
  }
`;

const Credentials: React.FC = () => {
  const history = useHistory();
  const [singup /* , { data } */] = useMutation(SINGUP);

  const initialValues = {
    email: '',
    password: '',
  };

  async function handleOnSubmit(values: any) {
    const about = JSON.parse(localStorage.getItem('about') as string);
    const address = JSON.parse(localStorage.getItem('address') as string);

    console.log('about', about);
    console.log('address', address);

    const response = await singup();

    if (response.data.registerUser.sucess) {
      history.push('');
    } else {
      console.log('Erro: ', response.data.registerUser.message);
    }
    // console.log('handle');
  }

  return (
    <Container>
      <PageHeader>
        <TopBar>Voltar</TopBar>

        <HeaderContent>
          <Title>Crie sua conta agora</Title>
          <Description>
            Por fim, insira suas credenciais para acessar o app.
          </Description>
        </HeaderContent>
      </PageHeader>

      <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
        <FormContainer>
          <fieldset>
            <Legend>04. Suas credenciais</Legend>

            <Input type="text" label="E-mail" name="email" required />
            <Input type="text" label="Senha" name="password" required />
          </fieldset>

          <button type="submit">ok</button>
        </FormContainer>
      </Formik>
    </Container>
  );
};

export default Credentials;
