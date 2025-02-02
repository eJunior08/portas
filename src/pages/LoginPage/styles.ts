import styled from "styled-components";
import { Form } from "formik";

export const Container = styled.div`
  /* background: red; */

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const PageHeader = styled.div`
  width: 100vw;
  height: 28rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--color-primary);

  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;

  @media (min-width: 1000px) {
    height: 100vh;
    border-radius: 0;
  }
`;

export const TitleHeader = styled.h2`
  color: var(--color-title-in-primary);
  font-size: 2.4rem;
  font-weight: 500;
`;

export const FormContainer = styled(Form)`
  background-color: var(--color-background);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 0 5rem;
  max-width: 100vw;

  margin-top: 6.4rem;
  padding-bottom: 5rem;

  flex: 1;

  @media (min-width: 1000px) {
    max-width: min(45vw, 750px);
    margin-top: 0;
    padding-bottom: 0;
  }
`;

export const LegendContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;

  padding: 0 5rem;

  & > a {
    font-size: 1.3rem;
  }

  @media (min-width: 1000px) {
    max-width: min(45vw, 750px);
  }
`;

export const Legend = styled.legend`
  font: 400 2.4rem Poppins;

  /* @media (min-width: 1000px) {
    max-width: min(45vw, 750px);
  } */
`;

export const InputGroup = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 5rem;
  margin-top: 2.4rem;

  @media (min-width: 1000px) {
    max-width: min(45vw, 750px);
  }
`;

export const Button = styled.button`
  font: bold 1.8rem Archivo;
  text-transform: uppercase;
  background-color: var(--color-secondary);
  color: var(--color-button-text);

  width: 100%;

  padding: 1.6rem 7rem;
  margin-top: 5rem;

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
