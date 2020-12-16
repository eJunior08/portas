import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const PageHeader = styled.div`
  background-color: var(--color-primary);
  padding: 2rem 3rem;

  border-radius: 0 0 0.8rem 0.8rem;
`;

export const TopBar = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  color: var(--color-text-in-primary);

  margin-bottom: 4rem;

  max-width: 50rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-bottom: 2rem;

  max-width: 50rem;
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
`;

export const Subtitle = styled.h2`
  font: 600 2.4rem Poppins;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ButtonType = styled.div`
  position: relative;

  height: 14rem;
  width: 15rem;

  border-radius: 0.8rem;
  border: 1px solid var(--color-primary);
  background: var(--color-box-base);

  cursor: pointer;

  transition: all 0.5s;

  margin-top: 2rem;
`;
