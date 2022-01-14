import React from 'react';

import Navbar from '../Navbar/Navbar';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <Navbar>{children}</Navbar>
      <main className="container">{children}</main>
    </>
  );
}

export default Layout;
