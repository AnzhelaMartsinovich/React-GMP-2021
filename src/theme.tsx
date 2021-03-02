import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  colors: {
    pink: '#f65261',
    white: '#ffffff',
    black: '#232323',
    gray: '#424242',
    grayBg: '#555555',
  },
  BREAKPOINT: {
    MOBILE_M: '375px',
    MOBILE_L: '425px',
    TABLET: '825px',
    LAPTOP: '1024px',
    LAPTOP_L: '1440px',
    DESKTOP: '2560px',
  },
};

export type Theme = typeof theme | any;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
