/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import Menu from './Menu';
import Layout from '../Layout/Layout.component';

test('Open dropdown on click event', async () => {
  render(
    <Layout>
      <Menu />
    </Layout>
  );
  const btn = screen.getByRole('button');
  fireEvent.click(btn);
  expect(screen.getByRole('list')).toBeInTheDocument();
});
