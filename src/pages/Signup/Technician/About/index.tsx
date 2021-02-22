import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

/* Components */
import Input from "../../../../components/Form/Input";

/* Interface */

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
import { cpfMask } from "../../../../utils/Masks/cpf.mask";

/* Validators */

const About: React.FC = () => {
  const history = useHistory();
  const initialValues = {
    first_name: "",
    last_name: "",
    cpf: "",
    phone: "",
  };

  function handleBack() {
    history.goBack();
  }

  async function handleOnSubmit(values: any) {
    localStorage.setItem("about-tech", JSON.stringify(values));
    history.push("sign-up-address-tech");
  }

  return (
    <Container>
      <PageHeader>
        <TopBar>
          <ReturnIconStyled onClick={handleBack} />
        </TopBar>

        <HeaderContent>
          <Title>Crie sua conta agora</Title>
          <Description>Agora preencha suas informações pessoais.</Description>
        </HeaderContent>
      </PageHeader>

      <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
        {(formik) => (
          <FormContainer>
            <fieldset>
              <Legend>02. Sobre você (Tech)</Legend>

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

export default About;
