import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import NotFound from './NotFound';
import { MemoryRouter } from 'react-router-dom';

describe('<Not found />', () => {
  test('Renders not found page', async () => {
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
