import React from "react";
import { Formik } from "formik";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

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
import Input from "../../../../components/Form/Input";

const SINGUP = gql`
  mutation RegisterAssistance($data: RegisterOrganization!) {
    registerAssistance(data: $data) {
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
    try {
      const aboutOrg = getLocalStorageJSON("about-org");
      const addressOrg = getLocalStorageJSON("address-org");
      const aboutOrgAdmin = getLocalStorageJSON("about-org-admin");
      const addressOrgAdmin = getLocalStorageJSON("address-org-admin");

      addressOrg.cep = addressOrg.cep.replace(/\D/g, "");
      addressOrgAdmin.cep = addressOrgAdmin.cep.replace(/\D/g, "");

      aboutOrg.cnpj = aboutOrg.cnpj.replace(/\D/g, "");
      aboutOrgAdmin.cpf = aboutOrgAdmin.cpf.replace(/\D/g, "");

      const response = await singup({
        variables: {
          data: {
            organization: { ...aboutOrg, ...addressOrg },
            user: { ...aboutOrgAdmin, ...addressOrgAdmin, ...values },
          },
        },
      });

      console.log("response", response);

      if (response.data.registerAssistance.sucess) {
        localStorage.removeItem("about-org");
        localStorage.removeItem("address-org");
        localStorage.removeItem("about-org-admin");
        localStorage.removeItem("address-org-admin");

        history.push("finished");
      } else {
        console.log("Erro: ", response.data.registerAssistance.message);
      }
    } catch (err) {
      console.log("err", err);
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
              <Legend>06. Suas credenciais</Legend>

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
