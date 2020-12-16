import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    height: 100%;
    width: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font: 400 1.6rem Poppins;
  }

  html {
    background-color: var(--color-background);
  }

  a {
    color: var(--color-primary);
  }

  :root {
    font-size: 60%;

    --color-background: #F0F0F7;
    --color-primary: #1A1A1A;
    --color-secondary-light: #FFA854;
    --color-secondary: #FF9B3D;
    --color-secondary-dark: #D86826;

    --color-title-in-primary: #F0F0F7;
    --color-text-in-primary: #F0F0F7;
    --color-subtitle-card: #747881;

    --color-line: #F0F0F7;
    --color-input-background: #FAFAFC;
    --color-button-text: #F0F0F7;
    --color-box-base: #FAFAFC;
    --color-box-border: #E6E6F0;

    --color-danger: #E33D3D;

    --cfg-box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);

    /* --color-disable: ; */
  }

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-background); 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #555; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary); 
  }

  @media (min-width: 700px) {
    :root {
      font-size: 65.5%;
    }
  }
`;
