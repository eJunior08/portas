import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    first_name: '',
    last_name: '',
    cpf: '',
    phone: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    cep: '',
    email: '',
    password: '',
  },
  reducers: {
    updateSignup(state, { payload }) {
      console.log('payload', payload);
      state = payload;
      console.log('state', state.first_name);
    },
  },
});

export const { updateSignup } = signupSlice.actions;

export default signupSlice.reducer;
