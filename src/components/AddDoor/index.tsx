import React from "react";
import { Formik } from "formik";
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

interface AddDoorProps {
  onClose: (serialNumber: string) => void;
}

const AddDoor: React.FC<AddDoorProps> = ({ onClose }) => {
  const initialValues = {
    serialNumber: "",
  };

  function handleSubmit(values: any) {
    console.log("values", values);
    onClose(values.serialNumber);
  }

  return (
    <Container>
      <Title>Adicionar porta</Title>
      <Divider />

      <Text>
        Insira o número serial da porta a ser adicionada a sua conta e logo em
        seguida aperte em confirmar.
      </Text>

      <Formik
        initialValues={initialValues}
        onSubmit={(values, helpers) => handleSubmit(values)}
      >
        {(formik) => (
          <FormStyled>
            <Input label="Número serial" name="serialNumber" required />

            <ButtonContainer>
              <Button /* onClick={onClose} */ type="button">Voltar</Button>
              <Button type="submit">Confirmar</Button>
            </ButtonContainer>
          </FormStyled>
        )}
      </Formik>
    </Container>
  );
};

export default AddDoor;
