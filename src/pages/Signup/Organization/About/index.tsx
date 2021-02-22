import React from "react";
import { Formik } from "formik";

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

/* Validators */
import { AboutValidator } from "../../../../validators/Form/SignUp/Organization/about.validator";
import { cnpjMask } from "../../../../utils/Masks/cnpj.mask";

const About: React.FC = () => {
  const history = useHistory();
  const initialValues = {
    responsible_name: "",
    nome_fantasia: "",
    responsible_email: "",
    responsible_phone: "",
    cnpj: "",
    phone: "",
    name: "",
  };

  function handleBack() {
    history.goBack();
  }

  async function handleOnSubmit(values: any) {
    localStorage.setItem("about-org", JSON.stringify(values));
    history.push("sign-up-organization-address");
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
            Agora preencha as informações da sua empresa.
          </Description>
        </HeaderContent>
      </PageHeader>

      <Formik
        initialValues={initialValues}
        validationSchema={AboutValidator}
        onSubmit={handleOnSubmit}
      >
        {(formik) => (
          <FormContainer>
            <fieldset>
              <Legend>02. Sobre a empresa</Legend>

              <Input
                type="text"
                label="Nome institucional"
                name="responsible_name"
                required
              />
              <Input
                type="text"
                label="Nome fantasia"
                name="nome_fantasia"
                required
              />
              <Input
                type="text"
                label="Email institucional"
                name="responsible_email"
                required
              />
              <Input
                type="text"
                label="Telefone institucional"
                name="responsible_phone"
                required
              />
              <Input
                type="text"
                label="CNPJ"
                name="cnpj"
                onChange={(v) => {
                  formik.setValues({
                    ...formik.values,
                    cnpj: cnpjMask(v.target.value),
                  });
                }}
                required
              />
              <Input type="text" label="Telefone" name="phone" required />
              <Input type="text" label="Nome" name="name" required />
            </fieldset>
            <Button disabled={!(formik.isValid && formik.dirty)} type="submit">
              ok
            </Button>
          </FormContainer>
        )}
      </Formik>
    </Container>
  );
};

export default About;
