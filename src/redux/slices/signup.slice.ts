import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    first_name: "",
    last_name: "",
    cpf: "",
    phone: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    cep: "",
    email: "",
    password: "",
  },
  reducers: {
    updateSignup: (state, { payload }) => ({ ...state, ...payload }),
  },
});

export const { updateSignup } = signupSlice.actions;

export default signupSlice.reducer;
