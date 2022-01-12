import React from 'react';
import { waitFor, render } from '@testing-library/react';
import App from './App.component';

test('Render Navbar', async () => {
  const { container } = render(<App />);

  await waitFor(() => {
    expect(container.getElementsByClassName('navbar').length).toBe(1);
  });
});

test('Render card container', async () => {
  const { container } = render(<App />);

  await waitFor(() => {
    expect(container.getElementsByClassName('card-container').length).toBe(1);
  });
});
