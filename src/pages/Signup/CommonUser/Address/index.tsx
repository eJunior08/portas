import React from "react";
import { FormikProps, withFormik } from "formik";
import { useHistory, withRouter } from "react-router-dom";
import CepService from "cep-promise";

/* Components */
import Input from "../../../../components/Form/Input";

/* Interfaces */
import { IAddress } from "../../../../interfaces/SignUp/address.interface";

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
import { AddressValidator } from "../../../../validators/Form/SignUp/ClientUser/address.validator";
import { useDispatch } from "react-redux";
import { cepMask } from "../../../../utils/Masks/cep.mask";

const MyEnhancedForm = withFormik<any, IAddress>({
  mapPropsToValues: () => ({
    bairro: "",
    cep: "",
    cidade: "",
    complemento: "",
    endereco: "",
    numero: "",
  }),

  validationSchema: AddressValidator,

  handleSubmit: (values, { props }) => {
    const { history } = props;
    console.log("props", props);
    localStorage.setItem("address", JSON.stringify(values));
    history.push("sign-up-credentials");
  },

  displayName: "AddressClientForm",
});

const Address = (props: FormikProps<IAddress>) => {
  const { isSubmitting, values, isValid, dirty, setValues } = props;

  const dispatch = useDispatch();

  const history = useHistory();

  function handleBack() {
    history.goBack();
  }

  async function getAddressByCep(cep: string) {
    try {
      const responseCEP = await CepService(cep);

      setValues({
        ...values,
        bairro: responseCEP.neighborhood,
        endereco: responseCEP.street,
        cidade: responseCEP.city,
      });
    } catch (err) {
      console.log("err", err.errors);
    }
  }

  return (
    <Container>
      <PageHeader>
        <TopBar>
          <ReturnIconStyled onClick={handleBack} />
        </TopBar>

        <HeaderContent>
          <Title>Crie sua conta agora</Title>
          <Description>Agora nos informe sobre seu endereço.</Description>
        </HeaderContent>
      </PageHeader>

      <FormContainer>
        <fieldset>
          <Legend>03. Seu endereço</Legend>

          <Input
            type="text"
            label="CEP"
            name="cep"
            required
            onChange={(v) => {
              setValues({
                ...values,
                cep: cepMask(v.target.value),
              });
            }}
            onBlur={(e) => getAddressByCep(e.target.value)}
          />
          <Input type="text" label="Endereço" name="endereco" required />
          <Input type="text" label="Bairro" name="bairro" required />
          <Input type="text" label="Cidade" name="cidade" required />
          <Input type="text" label="Número" name="numero" required />
          <Input type="text" label="Complemento" name="complemento" required />
        </fieldset>

        <Button disabled={!(isValid && dirty)} type="submit">
          Ok
        </Button>
      </FormContainer>
    </Container>
  );
};

export default withRouter(MyEnhancedForm(Address));
