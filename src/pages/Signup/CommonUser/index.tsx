import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';

/* Actions */
import { signupAction } from '../../../redux/actions/signup.action';

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

const CommonUser = (props: any) => {
  const history = useHistory();
  const initialValues = {
    first_name: '',
    last_name: '',
    cpf: '',
    phone: '',
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
          <Description>Agora preencha suas informações pessoais.</Description>
        </HeaderContent>
      </PageHeader>

      <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
        <FormContainer>
          <fieldset>
            <Legend>02. Sobre você</Legend>

            <Input type="text" label="Nome" name="first_name" required />
            <Input type="text" label="Sobrenome" name="last_name" required />
            <Input type="text" label="CPF" name="cpf" required />
            <Input type="text" label="Telefone" name="phone" required />
          </fieldset>
          <button type="submit">ok</button>
        </FormContainer>
      </Formik>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(signupAction, dispatch);

export default connect(null, mapDispatchToProps)(CommonUser);
