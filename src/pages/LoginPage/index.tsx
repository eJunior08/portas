import React from 'react';
import { Formik } from 'formik';
import { gql, useMutation } from '@apollo/client';
import { Link, useHistory } from 'react-router-dom';

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

/* Validator */
import { LoginValidator } from '../../validators/Form/login.validator';

const LOGIN = gql`
  mutation {
    login(password: "12345678", email: "wemovil590@chatdays.com") {
      accessToken
      message
      sucess
      userRole
    }
  }
`;

const LoginPage: React.FC = () => {
  const history = useHistory();
  const [login /* , { data } */] = useMutation(LOGIN);

  const initialValues: LoginForm = { email: '', password: '' };

  async function handleSubmit() {
    const response = await login();

    if (response.data.login.sucess) {
      // TODO: SALVAR TOKEN
      const { accessToken, userRole } = response.data.login;
      console.log('accessToken', accessToken);
      localStorage.setItem('token', accessToken);
      localStorage.setItem('role', userRole);
      history.push('dashboard');
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

      <Formik
        initialValues={initialValues}
        validationSchema={LoginValidator}
        onSubmit={handleSubmit}
      >
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
