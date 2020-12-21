import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 0 1.4rem;

  overflow-y: auto;
`;

export const ButtonStyled = styled.button`
  width: 9rem;
  height: 8rem;

  border-radius: 9rem;

  background-color: var(--color-secondary);
`;

export const DoorsContainer = styled.div`
  /* background: red; */

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  margin: 5rem 0;
`;
