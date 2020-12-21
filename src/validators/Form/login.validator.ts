import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    required: 'Campo obrigatório'
  }
})

export const LoginValidator = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});