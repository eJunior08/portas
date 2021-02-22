import { Formik } from "formik";
import React from "react";
import Input from "../Form/Input";

import {
  Button,
  ButtonContainer,
  Container,
  Divider,
  FormStyled,
  Text,
  Title,
} from "./styles";

const AddTechnician: React.FC<any> = ({ onClose }) => {
  const initialValues = {
    cpf: "",
  };

  function handleSubmit(values: any) {
    console.log("values", values);
    onClose(values.cpf);
  }

  return (
    <Container>
      <Title>Adicionar técnico</Title>
      <Divider />

      <Text>Insira o cpf do técnico a ser linkado a sua empresa</Text>

      <Formik
        initialValues={initialValues}
        onSubmit={(values, helpers) => handleSubmit(values)}
      >
        {(formik) => (
          <FormStyled>
            <Input label="CPF do técnico" name="cpf" required />

            <ButtonContainer>
              <Button onClick={onClose} type="button">
                Voltar
              </Button>
              <Button type="submit">Confirmar</Button>
            </ButtonContainer>
          </FormStyled>
        )}
      </Formik>
    </Container>
  );
};

export default AddTechnician;
