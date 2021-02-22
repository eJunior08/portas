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
  mutation RegisterUserTechnician($data: User!) {
    registerUserTechnician(data: $data) {
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

  function getLocalStorageJSON(key: string) {
    return JSON.parse(localStorage.getItem(key) as string);
  }

  async function handleOnSubmit(values: any) {
    const about = getLocalStorageJSON("about-tech");
    const address = getLocalStorageJSON("address-tech");

    address.cep = address.cep.replace(/\D/g, "");
    about.cpf = about.cpf.replace(/\D/g, "");

    const response = await singup({
      variables: {
        data: { ...about, ...address, ...values },
      },
    });

    console.log("response", response);

    if (response.data.registerUserTechnician.sucess) {
      localStorage.removeItem("about-tech");
      localStorage.removeItem("address-tech");

      history.push("finished");
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
              <Legend>04. Suas credenciais (Tech)</Legend>

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
