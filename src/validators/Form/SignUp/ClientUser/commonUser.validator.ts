import * as Yup from "yup";

export const CommonUserValidator = Yup.object().shape({
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  cpf: Yup.string().required(),
  phone: Yup.string().required(),
});
