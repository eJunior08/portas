import { Form } from "formik";
import styled from "styled-components";

export const Container = styled.div`
  /* width: 400px; */
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #1a1a1a;
`;

export const Title = styled.h3`
  font: 400 1.8rem Poppins;
  margin-bottom: 2rem;
`;

export const Text = styled.p`
  /* font: 400 1.8rem Poppins; */
  margin: 2rem 0;
`;

export const FormStyled = styled(Form)`
  width: 100%;

  & > :not(:last-child) {
    margin-bottom: 2rem;
  }

  padding-top: 2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > :first-child {
    margin-right: 1rem;
  }
`;

export const Button = styled.button`
  font: bold 1.6rem Archivo;
  text-transform: uppercase;
  background-color: var(--color-secondary);
  color: var(--color-button-text);

  width: 12rem;

  padding: 0.8rem;

  border-radius: 1000px;

  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-secondary-light);
  }

  &:disabled {
    opacity: 0.7;
  }
`;
