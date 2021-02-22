import { useField } from "formik";
import React, { InputHTMLAttributes, useRef } from "react";

/* Styles */
import { Container, InputStyled, LabelStyled } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [field /* , meta */] = useField(props);

  function onLabelClick() {
    inputEl.current?.focus();
  }

  return (
    <Container>
      <InputStyled ref={inputEl} {...field} {...props} />
      <LabelStyled onClick={onLabelClick} htmlFor={props.id || props.name}>
        {label}
      </LabelStyled>
      {/* {meta.touched && meta.error ? <div>{meta.error}</div> : null} */}
    </Container>
  );
};

export default Input;
