import * as Yup from "yup";

export const AboutValidator = Yup.object().shape({
  responsible_name: Yup.string().required(),
  nome_fantasia: Yup.string().required(),
  responsible_email: Yup.string().email().required(),
  responsible_phone: Yup.string().required(),
  cnpj: Yup.string().required(),
  phone: Yup.string().required(),
  name: Yup.string().required(),
});
