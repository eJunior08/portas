import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-box-base);

  border: 1px solid var(--color-box-border);
  border-radius: 0.8rem;
  box-shadow: var(--cfg-box-shadow);

  padding: 2rem 1.5rem;
  margin-bottom: 2.4rem;
`;

export const Title = styled.h2`
  font: 500 2.4rem Poppins;
  color: #1a1a1a;
`;

export const Divider = styled.div`
  height: 1px;

  margin-top: 1.6rem;

  background-color: var(--color-primary);
`;

export const Content = styled.div`
  /* background-color: yellow; */

  /* flex: 1; */
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: space-between; */
  /* flex-wrap: wrap; */

  /* margin: 0 1.5rem; */

  /* margin-top: 5rem; */
`;

export const SubContent = styled.div`
  margin-top: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subtitle = styled.div`
  font: 400 1.6rem Poppins;
  color: var(--color-subtitle-card);
`;

export const Info = styled.div`
  font: 600 1.6rem Poppins;
  color: var(--color-primary);
`;

export const ButtonStyled = styled.button`
  width: 12.7rem;

  border-radius: 9rem;

  padding: 0.6rem 0;

  background-color: var(--color-secondary);
  color: white;
`;

export const ClientContent = styled.div``;

export const InfoClientContainer = styled.div``;
