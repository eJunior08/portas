import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

/* Components */
import Input from "../../../../components/Form/Input";

/* Interface */
import { ICommonUser } from "../../../../interfaces/SignUp/commonUser.interface";

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

/* Validators */
import { CommonUserValidator } from "../../../../validators/Form/SignUp/ClientUser/commonUser.validator";
import { updateSignup } from "../../../../redux/slices/signup.slice";
import { cpfMask } from "../../../../utils/Masks/cpf.mask";

const About: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const initialValues: ICommonUser = {
    first_name: "",
    last_name: "",
    cpf: "",
    phone: "",
  };

  function handleBack() {
    history.goBack();
  }

  async function handleOnSubmit(values: ICommonUser) {
    dispatch(updateSignup({ ...values }));
    localStorage.setItem("about", JSON.stringify(values));
    history.push("sign-up-address");
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

      <Formik
        initialValues={initialValues}
        validationSchema={CommonUserValidator}
        onSubmit={handleOnSubmit}
      >
        {(formik) => (
          <FormContainer>
            <fieldset>
              <Legend>02. Sobre você</Legend>

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
