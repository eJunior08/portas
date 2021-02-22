import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  /* height: 100vh;
  width: 100vw; */
  /* flex: 1;

  display: flex;
  flex-direction: column; */
  /* flex: 1;

  display: flex;
  flex-direction: column; */
  /* width: 100vw;
  height: 100vh;

  overflow-y: auto; */

  & > div {
    &:last-child {
      display: flex;
      flex-direction: column;

      width: 100%;
      height: 100%;

      @media (min-width: 1000px) {
        display: inline-block;

        height: 100%;
        width: 100%;

        overflow-y: scroll;
      }
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

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font: 600 2.8rem Poppins;
  width: 21.6rem;
`;

export const Divider = styled.div`
  height: 1px;

  margin: 0 1.5rem 2.4rem;

  background-color: var(--color-primary);
`;

export const Content = styled.div`
  /* background-color: yellow; */

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* align-items: flex-end; */
  /* justify-content: space-between; */
  /* flex-wrap: wrap; */

  margin: 0 1.5rem;

  /* margin-top: 5rem; */

  @media (min-width: 1000px) {
    margin: 0 20rem;
  }
`;

export const Subtitle = styled.h4`
  font: 600 1.8rem Poppins;
  width: 50%;
  text-align: center;

  margin-top: 2rem;
`;

export const ButtonStyled = styled.button<ButtonStyledProps>`
  /* width: 9rem;
  height: 8rem; */

  border-radius: 9rem;

  background-color: ${(props) =>
    props.danger ? "var(--color-danger)" : "var(--color-secondary)"};
  color: white;

  width: 100%;
  padding: 1.6rem 7rem;
  margin-bottom: 1.6rem;

  font: bold 1.8rem Archivo;

  @media (min-width: 1000px) {
    cursor: pointer;

    transition: background-color 0.2s;

    &:hover {
      background-color: ${(props) =>
        props.danger ? "var(--color-danger)" : "var(--color-secondary-light)"};
    }
  }
`;

interface ButtonStyledProps {
  danger?: boolean;
}

export const DoorsContainer = styled.div`
  /* background: red; */

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  margin: 5rem 0;
`;
