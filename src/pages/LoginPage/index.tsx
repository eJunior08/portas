import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { gql, useMutation } from '@apollo/client';

/* Components */
import Input from '../../components/Form/Input';

/* Interfaces */
import { LoginForm } from '../../interfaces/LoginPage/LoginForm';

/* Styles */
import {
  Button,
  Container,
  FormContainer,
  InputGroup,
  Legend,
  LegendContainer,
  PageHeader,
  TitleHeader,
} from './styles';

const LOGIN = gql`
  mutation {
    login(password: "12345678", email: "elson.junior9@hotmail.com") {
      accessToken
      message
      sucess
      userRole
    }
  }
`;

const LoginPage: React.FC = () => {
  const [login /* , { data } */] = useMutation(LOGIN);

  const initialValues: LoginForm = { email: '', password: '' };

  async function handleSubmit() {
    const response = await login();

    if (response.data.login.sucess) {
      // TODO: SALVAR TOKEN
      const { accessToken } = response.data.login;
      console.log('accessToken', accessToken);
      localStorage.setItem('token', accessToken);
    } else {
      console.log('Erro: ', response.data.login.message);
    }

    console.log('response', response);
  }

  return (
    <Container>
      <PageHeader>
        <TitleHeader>Projeto Portas</TitleHeader>
      </PageHeader>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <FormContainer>
          <LegendContainer>
            <Legend>Fazer Login</Legend>
            <Link to="sign-up-choose">Cadastre-se</Link>
          </LegendContainer>

          <InputGroup>
            <Input label="E-mail" id="email" name="email" required />

            <Input
              label="Senha"
              id="password"
              name="password"
              type="password"
              required
            />
          </InputGroup>

          <Button>Login</Button>
        </FormContainer>
      </Formik>
    </Container>
  );
};

export default LoginPage;
