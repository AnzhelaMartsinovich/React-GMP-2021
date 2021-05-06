import { createGlobalStyle } from 'styled-components';
import { styled, theme } from 'theme';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.colors.grayBg};
  }
`;

export const AppStyled = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;
