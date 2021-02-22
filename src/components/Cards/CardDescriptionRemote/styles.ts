import styled from "styled-components";
import { Form } from "formik";

export const FormContainer = styled(Form)`
  background-color: var(--color-background);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  max-width: 100vw;

  margin-top: 1.6rem;

  flex: 1;
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
`;

export const Legend = styled.legend`
  font: 400 2.4rem Poppins;
`;

export const InputGroup = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 5rem;
  margin-top: 2.4rem;
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

export const Container = styled.div`
  background-color: var(--color-box-base);

  border: 1px solid var(--color-box-border);
  border-radius: 0.8rem;
  box-shadow: var(--cfg-box-shadow);

  padding: 2rem 1.5rem;
  margin-bottom: 2.4rem;
`;

export const Title = styled.h2`
  font: 500 2.4rem Poppins;
  color: #1a1a1a;
`;

export const Divider = styled.div`
  height: 1px;

  margin-top: 1.6rem;

  background-color: var(--color-primary);
`;

export const Content = styled.div`
  /* background-color: yellow; */

  /* flex: 1; */
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: space-between; */
  /* flex-wrap: wrap; */

  /* margin: 0 1.5rem; */

  /* margin-top: 5rem; */
`;

export const SubContent = styled.div`
  margin-top: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subtitle = styled.div`
  font: 400 1.6rem Poppins;
  color: var(--color-subtitle-card);
`;

export const Info = styled.div`
  font: 600 1.6rem Poppins;
  color: var(--color-primary);
`;

export const ButtonStyled = styled.button`
  width: 12.7rem;

  border-radius: 9rem;

  padding: 0.6rem 0;

  background-color: var(--color-secondary);
  color: white;
`;

export const ClientContent = styled.div``;

export const InfoClientContainer = styled.div``;
