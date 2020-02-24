import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 400;
    src: url(${require('../assets/fonts/Proxima-Nova-Regular.otf')}) format('opentype');
  }

  @font-face {
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 600;
    src: url(${require('../assets/fonts/Proxima-Nova-Semibold.otf')}) format('opentype');
  }

  * {
    box-sizing: border-box;
    font-family: ${props => props.theme.sansSerif};
  }

  html, body, #root, #root>div {
    height: 100%
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    background-color: ${props => props.theme.accentBlueLight};
    color: ${props => props.theme.black};
    font-size: 14px;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-size: 2.1rem;
    font-weight: 600;
  }

  h2 {
    font-size: 1.3rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
  }

  h5 {
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export default GlobalStyle;