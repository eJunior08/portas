import styled from "styled-components";

export const Container = styled.div`
  /* background: red; */

  width: 100vw;
  height: 100vh;
  /* max-width: 1000px; */

  /* padding: 0 1.4rem; */

  position: relative;

  overflow-y: auto;

  @media (min-width: 1000px) {
    /* padding: 0 20rem; */
    display: flex;
    flex-direction: row;
  }
`;

export const TopBar = styled.div`
  height: 8rem;
  width: 100vw;
  background-color: var(--color-primary);

  color: var(--color-text-in-primary);

  display: flex;
  align-items: center;
  justify-content: space-between;

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

export const DashboardContent = styled.div`
  /* background: red; */
  /* padding-top: 5rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  margin: 0 1.4rem;

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2rem;

    width: 100%;
    margin: 0 7rem;
  }
`;
