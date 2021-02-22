import React, { useMemo, useState } from "react";
import { Formik } from "formik";
import { gql, useMutation } from "@apollo/client";
import { Link, useHistory } from "react-router-dom";

/* Components */
import Input from "../../components/Form/Input";

/* Interfaces */
import { LoginForm } from "../../interfaces/LoginPage/LoginForm";

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
} from "./styles";

/* Validator */
import { LoginValidator } from "../../validators/Form/login.validator";
import Modal from "../../components/Modal";

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(password: $password, email: $email) {
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
  // const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);

  const initialValues: LoginForm = { email: "", password: "" };

  async function handleSubmit(values: LoginForm) {
    const response = await login({
      variables: {
        ...values,
      },
    });

    if (response.data.login.sucess) {
      // TODO: SALVAR TOKEN
      const { accessToken, userRole } = response.data.login;
      console.log("accessToken", accessToken);
      console.log("userRole", userRole);

      localStorage.setItem("token", accessToken);
      localStorage.setItem("roles", JSON.stringify([userRole]));

      history.push("app/dashboard");
    } else {
      console.log("Erro: ", response.data.login);
    }
  }

  function handleOnClose() {
    setIsOpen(false);
  }

  const modalMemoized = useMemo(
    () => (
      <Modal isOpen={isOpen} onClose={() => handleOnClose()}>
        <div>Hue</div>
      </Modal>
    ),
    []
  );

  return (
    <>
      <Container>
        <PageHeader>
          <TitleHeader>Projeto Portas</TitleHeader>
        </PageHeader>

        <Formik
          initialValues={initialValues}
          validationSchema={LoginValidator}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <FormContainer>
              <div>
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
              </div>

              <Button disabled={formik.isSubmitting} type="submit">
                Login
              </Button>
            </FormContainer>
          )}
        </Formik>
      </Container>

      {modalMemoized}
    </>
  );
};

export default LoginPage;
