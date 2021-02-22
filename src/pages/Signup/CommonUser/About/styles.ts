import styled from "styled-components";
import { Form } from "formik";
import { ReturnUpBack } from "@styled-icons/ionicons-outline";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
  }
`;

export const PageHeader = styled.div`
  background-color: var(--color-primary);
  padding: 2rem 3rem;

  border-radius: 0 0 0.8rem 0.8rem;

  @media (min-width: 1000px) {
    border-radius: 0;
    width: 35rem;
  }
`;

export const TopBar = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  color: var(--color-text-in-primary);

  margin-bottom: 4rem;

  max-width: 50rem;
`;

export const ReturnIconStyled = styled(ReturnUpBack)`
  width: 3rem;
  height: 3rem;

  &:hover {
    cursor: pointer;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-bottom: 2rem;

  max-width: 50rem;
`;
export const Title = styled.h1`
  color: var(--color-title-in-primary);

  font: 600 2.8rem Poppins;
  line-height: 4.2rem;

  margin-bottom: 0.8rem;
  max-width: 17.6rem;
`;
export const Description = styled.div`
  color: var(--color-text-in-primary);

  font: 400 1.4rem Poppins;
  line-height: 2.4rem;
  max-width: 50vw;
`;

export const FormContainer = styled(Form)`
  margin: 5rem 3rem;

  max-width: 50rem;

  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1000px) {
    margin: 5rem auto;
    width: 50vw;
  }
`;

export const FieldsetContainer = styled.fieldset``;

export const Legend = styled.legend`
  font: 600 2.4rem Poppins;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  font: bold 1.8rem Archivo;
  text-transform: uppercase;
  background-color: var(--color-secondary);
  color: var(--color-button-text);

  width: 100%;

  padding: 1.6rem 7rem;

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
