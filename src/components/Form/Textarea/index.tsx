import { useField } from "formik";
import React, { TextareaHTMLAttributes, useRef } from "react";

/* Styles */
import { Container, InputStyled } from "./styles";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, ...props }) => {
  const textareaEl = useRef<HTMLTextAreaElement>(null);
  const [field /* , meta */] = useField(props);

  function onLabelClick() {
    textareaEl.current?.focus();
  }

  return (
    <Container>
      <InputStyled ref={textareaEl} {...field} {...props} />
      {/* {meta.touched && meta.error ? <div>{meta.error}</div> : null} */}
    </Container>
  );
};

export default Textarea;
