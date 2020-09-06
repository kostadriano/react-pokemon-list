import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle(({ theme: { colors: { background, textColor } } }) => ({
  body: {
    background: background,
    color: textColor
  }
}));

export default GlobalStyle;
