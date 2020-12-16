import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react';

/* Styles */
import { Container, InputStyled, LabelStyled } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Container>
      <InputStyled {...field} {...props} autoComplete="off" />
      <LabelStyled htmlFor={props.id || props.name}>{label}</LabelStyled>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </Container>
  );
};

export default Input;
