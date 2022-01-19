import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../Layout/theme';
import { usePreferences } from '../../providers/Preferences/provider';
import Router from '../Router/Router';

const ThemedApp = () => {
  const { theme } = usePreferences();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </div>
  );
};

export default ThemedApp;
