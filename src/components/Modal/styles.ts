import styled, { keyframes } from "styled-components";

const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(51, 51, 51, 0.3);
  backdrop-filter: blur(1px);

  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${FadeInAnimation} 0.2s forwards;
`;

export const Content = styled.div`
  position: relative;
  padding: 2rem;

  min-height: 50px;
  min-width: 50px;
  max-height: 90%;
  max-width: 90%;

  width: 100%;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  background-color: var(--color-background);
  border-radius: 2px;

  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #898989;
  }

  @media (min-width: 1000px) {
    width: fit-content;
  }
`;
