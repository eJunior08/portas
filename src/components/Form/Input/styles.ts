import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;

  &:first-of-type input {
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
  }

  &:last-of-type input {
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
  }

  & > input:focus ~ label,
  & > input:valid ~ label {
    font-size: 1rem;
    top: 0.3rem;
  }
`;

export const InputStyled = styled.input`
  height: 5rem;
  width: 100%;

  padding: 0 2rem;

  background-color: var(--color-input-background);
  border: 1px solid var(--color-secondary);

  outline: none;

  transition: border-color 0.2s;
  &:focus {
    border: 1px solid var(--color-secondary-dark);
  }
`;

export const LabelStyled = styled.label`
  position: absolute;
  top: 1.3rem;
  left: 2rem;

  transition: all 0.2s;
`;
