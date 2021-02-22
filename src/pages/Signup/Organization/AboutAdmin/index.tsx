import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

/* Components */
import Input from "../../../../components/Form/Input";

/* Interface */
import { IAboutAdmin } from "../../../../interfaces/SignUp/Organization/aboutAdmin.interface";

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
import { AboutAdminValidator } from "../../../../validators/Form/SignUp/Organization/aboutAdmin.validator";
import { cpfMask } from "../../../../utils/Masks/cpf.mask";

/* Validators */

const AboutAdmin: React.FC = () => {
  const history = useHistory();
  const initialValues: IAboutAdmin = {
    first_name: "",
    last_name: "",
    cpf: "",
    phone: "",
  };

  function handleBack() {
    history.goBack();
  }

  async function handleOnSubmit(values: IAboutAdmin) {
    localStorage.setItem("about-org-admin", JSON.stringify(values));
    history.push("sign-up-organization-address-admin");
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
            Agora preencha as informações do usuário administrador da conta.
          </Description>
        </HeaderContent>
      </PageHeader>

      <Formik
        initialValues={initialValues}
        validationSchema={AboutAdminValidator}
        onSubmit={handleOnSubmit}
      >
        {(formik) => (
          <FormContainer>
            <fieldset>
              <Legend>04. Sobre você</Legend>

              <Input type="text" label="Nome" name="first_name" required />
              <Input type="text" label="Sobrenome" name="last_name" required />
              <Input
                type="text"
                label="CPF"
                name="cpf"
                onChange={(v) => {
                  formik.setValues({
                    ...formik.values,
                    cpf: cpfMask(v.target.value),
                  });
                }}
                required
              />
              <Input type="text" label="Telefone" name="phone" required />
            </fieldset>
            <Button type="submit">ok</Button>
          </FormContainer>
        )}
      </Formik>
    </Container>
  );
};

export default AboutAdmin;
