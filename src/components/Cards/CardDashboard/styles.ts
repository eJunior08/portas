import styled from "styled-components";

interface Props {
  backgroundImg: string;
}

export const Container = styled.div<Props>`
  width: 100%;
  height: 25rem;

  margin: 3rem 0;

  background-image: url(${(props) => props.backgroundImg});
  background-color: var(--color-primary);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 0.8rem;

  position: relative;

  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);

  @media (min-width: 1000px) {
    cursor: pointer;

    transition: transform 0.2s;
    &:hover {
      box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.45);
      transform: scale(1.02, 1.02) translateY(-1rem);
      &:first-of-type {
        transform: scale(1.02, 1.02) rotateZ(-1deg) translateY(-1rem);
      }
      &:last-of-type {
        transform: scale(1.02, 1.02) rotateZ(1deg) translateY(-1rem);
      }
    }
  }
`;

export const Title = styled.div`
  position: absolute;

  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--color-title-in-primary);
  background: var(--color-primary);
  opacity: 0.95;

  height: 5.8rem;

  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;

  padding: 0 2rem;
`;
