import styled from "styled-components";
import { ReturnUpBack } from "@styled-icons/ionicons-outline";

export const Container = styled.div`
  flex: 1;

  /* flex-direction: column;
  align-items: center; */

  width: 100vw;
  height: 100vh;

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

  /* max-width: 100rem;

  @media (min-width: 1000px) {
    margin: 0 auto 2rem;
  } */
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

  /* max-width: 100rem;

  @media (min-width: 1000px) {
    margin: 0 auto 2rem;
  } */
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

export const ChooseContainer = styled.div`
  margin: 5rem 3rem;

  @media (min-width: 1000px) {
    margin: 5rem auto;
    width: 50vw;
  }
`;

export const Subtitle = styled.h2`
  font: 600 2.4rem Poppins;
  margin-bottom: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ButtonType = styled.div`
  /* position: relative; */

  display: flex;
  align-items: flex-end;

  height: 14rem;
  width: 16rem;

  padding: 2rem;

  border-radius: 0.8rem;
  border: 1px solid var(--color-primary);
  background: var(--color-primary);
  color: var(--color-box-base);

  box-shadow: -5px 9px 14px -4px rgba(0, 0, 0, 0.24);

  cursor: pointer;

  transition: all 0.5s;

  margin-top: 1rem;

  font: 500 1.6rem "Poppins";

  @media (min-width: 1000px) {
    &:hover {
      background: #292929;
      transform: scaleX(1.1) scaleY(1.1);
    }
  }
`;
