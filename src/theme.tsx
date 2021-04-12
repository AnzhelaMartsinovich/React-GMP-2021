import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  colors: {
    pink: '#f65261',
    white: '#ffffff',
    black: '#232323',
    gray: '#424242',
    grayBg: '#555555',
    green: '#5bba1c',
  },
  transparency: {
    0: '00',
    5: '0d',
    10: '1a',
    15: '26',
    20: '33',
    25: '40',
    30: '4d',
    35: '59',
    40: '66',
    45: '73',
    50: '80',
    55: '8c',
    60: '99',
    65: 'a6',
    70: 'b3',
    75: 'bf',
    80: 'cc',
    85: 'd9',
    90: 'e6',
    95: 'f2',
    100: 'ff',
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
