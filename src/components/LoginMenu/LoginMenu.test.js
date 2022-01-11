/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import LoginMenu from './LoginMenu';
import Layout from '../Layout/Layout.component';

test('Opens dropdown on click event', async () => {
  render(
    <Layout>
      <LoginMenu />
    </Layout>
  );
  const btn = screen.getByRole('button');
  fireEvent.click(btn);
  expect(screen.getByRole('list')).toBeInTheDocument();
});
