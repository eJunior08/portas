import * as Yup from "yup";

export const AddressValidator = Yup.object().shape({
  endereco: Yup.string().required(),
  numero: Yup.string().required(),
  complemento: Yup.string().required(),
  bairro: Yup.string().required(),
  cidade: Yup.string().required(),
  cep: Yup.string().required(),
});
