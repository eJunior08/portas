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

const Address = () => {
  const history = useHistory();
  const initialValues = {
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    cep: '',
  };

  function handleOnSubmit(values: any) {
    localStorage.setItem('address', JSON.stringify(values));
    history.push('sign-up-credentials');
  }

  return (
    <Container>
      <PageHeader>
        <TopBar>Voltar</TopBar>

        <HeaderContent>
          <Title>Crie sua conta agora</Title>
          <Description>Agora nos informe sobre seu endereço.</Description>
        </HeaderContent>
      </PageHeader>

      <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
        <FormContainer>
          <fieldset>
            <Legend>03. Seu endereço</Legend>

            <Input type="text" label="Endereço" name="endereco" required />
            <Input type="text" label="Número" name="numero" required />
            <Input
              type="text"
              label="Complemento"
              name="complemento"
              required
            />
            <Input type="text" label="Bairro" name="bairro" required />
            <Input type="text" label="Cidade" name="cidade" required />
            <Input type="text" label="CEP" name="cep" required />
          </fieldset>

          <button type="submit">Ok</button>
        </FormContainer>
      </Formik>
    </Container>
  );
};

export default Address;
