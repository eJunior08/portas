import styled from 'styled-components';

export const Container = styled.div`
  width: 17rem;
  height: 14rem;

  background-color: var(--color-box-base);
  border: 1px solid var(--color-box-border);
  border-radius: 0.8rem;
  box-shadow: var(--cfg-box-shadow);

  margin-top: 1.4rem;
  /* margin-right: 0.7rem; */
  padding: 1.5rem 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & > span {
    font: 400 1.8rem Poppins;
    text-align: center;
  }

  & > h4 {
    max-width: 12rem;

    font: 600 2.4rem Poppins;
    text-align: center;
  }
`;
