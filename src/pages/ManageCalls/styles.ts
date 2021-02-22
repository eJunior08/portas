import styled from "styled-components";

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  & > div {
    &:last-child {
      display: flex;
      flex-direction: column;

      width: 100%;
      height: 100%;
    }

    @media (min-width: 1000px) {
      height: 100%;
      width: 100%;
    }
  }

  @media (min-width: 1000px) {
    /* padding: 0 20rem; */
    display: flex;
    flex-direction: row;

    width: 100vw;
    height: 100vh;
  }
`;

export const TopBar = styled.div`
  height: 8rem;
  width: 100vw;
  background-color: var(--color-primary);

  color: var(--color-text-in-primary);

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 0 1.5rem;

  @media (min-width: 1000px) {
    border-radius: 0;
    width: 35rem;
    min-width: 35rem;
    max-width: 35rem;
    height: 100vh;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 2rem 0;

    & > span {
      cursor: pointer;
    }
  }
`;

export const InfoPage = styled.div`
  margin: 5rem 1.5rem;
`;

export const Title = styled.h2`
  font: 600 2.8rem Poppins;
  width: 21.6rem;
`;

export const Divider = styled.div`
  height: 1px;

  margin: 0 1.5rem;

  background-color: var(--color-primary);
`;

export const Content = styled.div`
  /* background-color: yellow; */

  /* position: relative; */

  flex: 1;
  display: flex;
  flex-direction: column;

  padding: 0 1.5rem;
  /* align-items: center; */
  /* justify-content: center; */

  /* margin-top: 5rem; */
`;

export const Subtitle = styled.h4`
  font: 600 1.8rem Poppins;
  width: 50%;
  text-align: center;

  margin-top: 2rem;
`;

export const Button = styled.button`
  /* position: absolute; */
  /* top: 1rem; */

  font: bold 1.8rem Archivo;
  text-transform: uppercase;
  background-color: var(--color-secondary);
  color: var(--color-button-text);

  /* width: 100%; */
  align-self: center;

  padding: 1.6rem 7rem;
  margin: 2.4rem 0;

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
