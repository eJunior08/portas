import React from 'react';
import { Formik } from 'formik';

import { useHistory } from 'react-router-dom';

/* Styles */
import {
  Container,
  Description,
  FormContainer,
  HeaderContent,
  Legend,
  PageHeader,
  Title,
  TopBar,
} from './styles';
import Input from '../../../components/Form/Input';

const Organization = (props: any) => {
  const history = useHistory();
  const initialValues = {
    responsible_name: '',
    nome_fantasia: '',
    responsible_email: '',
    responsible_phone: '',
    cnpj: '',
    phone: '',
    name: '',
  };

  async function handleOnSubmit(values: any) {
    localStorage.setItem('about', JSON.stringify(values));
    history.push('sign-up-address');
  }

  return (
    <Container>
      <PageHeader>
        <TopBar>Voltar</TopBar>

        <HeaderContent>
          <Title>Crie sua conta agora</Title>
          <Description>
            Agora preencha as informações da sua empresa.
          </Description>
        </HeaderContent>
      </PageHeader>

      <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
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
            <Input type="text" label="CNPJ" name="cnpj" required />
            <Input type="text" label="Telefone" name="phone" required />
            <Input type="text" label="Nome" name="name" required />
          </fieldset>
          <button type="submit">ok</button>
        </FormContainer>
      </Formik>
    </Container>
  );
};

export default Organization;
