import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import NotFound from './NotFound.page';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  test('Render Navbar', async () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByAltText('page not found')).toBeInTheDocument();
    });
  });
});
