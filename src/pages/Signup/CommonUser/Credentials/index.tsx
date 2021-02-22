import React from "react";
import { Formik } from "formik";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

/* Components */
import Input from "../../../../components/Form/Input";

/* Styles */
import {
  Button,
  Container,
  Description,
  FormContainer,
  HeaderContent,
  Legend,
  PageHeader,
  ReturnIconStyled,
  Title,
  TopBar,
} from "./styles";

const SINGUP = gql`
  mutation RegisterClientUser($data: User!) {
    registerClientUser(data: $data) {
      sucess
      message
    }
  }
`;

const Credentials: React.FC = () => {
  const history = useHistory();
  const [singup /* , { data } */] = useMutation(SINGUP);

  const initialValues = {
    email: "",
    password: "",
  };

  function handleBack() {
    history.goBack();
  }

  async function handleOnSubmit(values: any) {
    const about = JSON.parse(localStorage.getItem("about") as string);
    const address = JSON.parse(localStorage.getItem("address") as string);

    address.cep = address.cep.replace(/\D/g, "");
    about.cpf = about.cpf.replace(/\D/g, "");

    const response = await singup({
      variables: {
        data: { ...about, ...address, ...values },
      },
    });
    console.log("response", response);

    if (response.data.registerClientUser.sucess) {
      history.push("finished");

      localStorage.removeItem("about");
      localStorage.removeItem("address");
    } else {
      console.log("Erro: ", response.data.registerUser.message);
    }
  }

  return (
    <Container>
      <PageHeader>
        <TopBar>
          <ReturnIconStyled onClick={handleBack} />
        </TopBar>

        <HeaderContent>
          <Title>Crie sua conta agora</Title>
          <Description>
            Por fim, insira suas credenciais para acessar o app.
          </Description>
        </HeaderContent>
      </PageHeader>

      <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
        {(formik) => (
          <FormContainer>
            <fieldset>
              <Legend>04. Suas credenciais</Legend>

              <Input type="text" label="E-mail" name="email" required />
              <Input type="password" label="Senha" name="password" required />
            </fieldset>

            <Button disabled={formik.isSubmitting} type="submit">
              ok
            </Button>
          </FormContainer>
        )}
      </Formik>
    </Container>
  );
};

export default Credentials;
