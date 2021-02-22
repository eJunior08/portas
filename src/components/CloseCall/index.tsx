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

const CloseCall: React.FC<any> = ({ onClose }) => {
  const initialValues = {
    signature: "",
  };

  function handleSubmit(values: any) {
    console.log("values", values);
    onClose(values);
  }

  return (
    <Container>
      <Title>Adicionar técnico</Title>
      <Divider />

      <Text>Insira sua assinatura para fechar o chamado</Text>

      <Formik
        initialValues={initialValues}
        onSubmit={(values, helpers) => handleSubmit(values)}
      >
        {(formik) => (
          <FormStyled>
            <Input label="Assinatura" name="signature" required />

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

export default CloseCall;
