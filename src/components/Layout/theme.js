import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font: Arial, Helvetica, sans-serif',
    transition: background 0.2s ease-in, color 0.2s ease-in;
  },
`;
export const lightTheme = {
  body: '#f1f1f1',
  text: '#121620',
  colors: {
    primary: '#00838f',
    secondary: '#fdd835',
    bg: '#fafafa',
  },
};
export const darkTheme = {
  body: '#121620',
  text: '#f1f1f1',
  colors: {
    primary: '#4fb3bf',
    secondary: '#fdd835',
    bg: '#263238',
  },
};
