/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import ThemeButton from './ThemeButton';
import Layout from '../Layout/Layout.component';

test('Opens dropdown on click event', async () => {
  render(
    <Layout>
      <ThemeButton data-testid="theme" />
    </Layout>
  );
  const btn = screen.getByRole('button');
  fireEvent.click(btn);
  //incomplete test
});
