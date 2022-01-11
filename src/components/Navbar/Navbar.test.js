/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import Layout from '../Layout/Layout.component';

test('Render Navbar', async () => {
  render(
    <Layout>
      <Navbar />
    </Layout>
  );

  expect(screen.getByRole('navigation')).toBeInTheDocument();
});
