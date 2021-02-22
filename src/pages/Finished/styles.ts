import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-primary);

  width: 100vw;
  height: 100vh;

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 5rem;

  position: relative;
`;

export const Content = styled.div`
  /* padding-bottom: 20rem; */
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1rem;

  & > img {
    width: 6.9rem;
    margin-left: 1.8rem;
  }
`;
export const Title = styled.h1`
  font: 600 3.2rem Archivo;
  color: var(--color-title-in-primary);

  /* border-right: 1px solid var(--color-line); */
`;
export const Text = styled.p`
  font: 400 1.8rem Poppins;
  color: var(--color-text-in-primary);
`;

export const Button = styled.button`
  position: absolute;

  width: calc(100% - 10rem);

  bottom: 0;
  margin: 0 5rem 5rem;

  font: bold 1.8rem Archivo;
  text-transform: uppercase;
  background-color: var(--color-secondary);
  color: var(--color-button-text);

  padding: 1.6rem 7rem;

  border-radius: 1000px;

  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-secondary-light);
  }

  @media (min-width: 1000px) {
    width: 50rem;
  }
`;
