import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './theme';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <main className="container">{children}</main>
    </ThemeProvider>
  );
}

export default Layout;
