import styled from "styled-components";

export const Container = styled.div`
  /* background: red; */

  width: 100vw;
  height: 100vh;
  /* max-width: 1000px; */

  padding: 0 1.4rem;

  position: relative;

  overflow-y: auto;

  @media (min-width: 1000px) {
    padding: 0 20rem;
  }

  /* display: flex;
  flex-direction: column; */
`;

export const DashboardContent = styled.div`
  /* background: red; */
  /* padding-top: 5rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2rem;
  }
`;
