import React from 'react';
import { ThemeProvider } from 'styled-components';

import Navbar from '../Navbar/Navbar';
import theme from './theme';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar>{children}</Navbar>
      <main className="container">{children}</main>
    </ThemeProvider>
  );
}

export default Layout;
