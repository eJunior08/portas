import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const InputStyled = styled.textarea`
  width: 100%;

  background-color: var(--color-input-background);
  border: 1px solid var(--color-secondary);

  transition: border-color 0.2s;
  &:focus {
    border: 1px solid var(--color-secondary-dark);
  }

  /* padding: 0 2rem;

  background-color: var(--color-input-background);
  border: 1px solid var(--color-secondary); */

  /* outline: none; */

  /* transition: border-color 0.2s;
  &:focus {
    border: 1px solid var(--color-secondary-dark);
  } */
`;
