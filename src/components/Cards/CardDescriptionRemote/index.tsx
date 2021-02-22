import { Formik } from "formik";
import React from "react";
import Textarea from "../../Form/Textarea";

/* Styles */
import {
  ButtonStyled,
  Container,
  Content,
  Divider,
  Info,
  InfoContainer,
  SubContent,
  Subtitle,
  Title,
  FormContainer,
  LegendContainer,
  Legend,
} from "./styles";

const CardDescriptionRemote: React.FC = () => {
  const initialValues = {
    descriptionRemote: "",
  };

  async function handleSubmit(values: any) {
    console.log("values", values);
  }

  return (
    <Container>
      <Title>Descrição das ações remotas</Title>

      <Divider />

      <Content>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {(formik) => (
            <FormContainer>
              <Textarea
                label="E-mail"
                id="descriptionRemote"
                name="descriptionRemote"
                placeholder="Inserir"
                required
              />
            </FormContainer>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default CardDescriptionRemote;
