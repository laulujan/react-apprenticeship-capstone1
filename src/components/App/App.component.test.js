import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from './App.component';

jest.mock('../../api/gapi', () => {
  return {
    initGoogle: () => {
      return new Promise((resolve) => {
        resolve(true);
      });
    },
  };
});

jest.mock('../../api/youtubeAPI.js', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');
  return { getVideos: mock.getVideos };
});

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
