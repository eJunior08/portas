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

const AddCall: React.FC<any> = ({ onClose }) => {
  const initialValues = {
    description: "",
    name: "",
  };

  function handleSubmit(values: any) {
    console.log("values", values);
    onClose(values);
  }

  return (
    <Container>
      <Title>Adicionar chamado</Title>
      <Divider />

      <Text>Insira as informações para abertura do seu chamado</Text>

      <Formik
        initialValues={initialValues}
        onSubmit={(values, helpers) => handleSubmit(values)}
      >
        {(formik) => (
          <FormStyled>
            <Input label="Nome do chamado" name="name" required />
            <Input label="Descrição" name="description" required />

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

export default AddCall;
