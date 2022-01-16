import React from 'react';
import {
  render,
  waitFor,
  act,
  screen,
  fireEvent,
} from '@testing-library/react';
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
  return { getVideos: mock.getVideos, getRelatedVideos: mock.getVideos };
});
describe('App', () => {
  test('Render Navbar', async () => {
    const { container } = render(<App />);

    await waitFor(() => {
      expect(container.getElementsByClassName('navbar').length).toBe(1);
    });
  });

  test('Render card container', async () => {
    await act(async () => {
      render(<App />);
    });
    expect(await screen.findByAltText('Wizeline')).toBeInTheDocument();
  });

  test('Show video on card click', async () => {
    await act(async () => {
      render(<App />);
    });

    const card = screen.getByAltText('Wizeline');
    await act(async () => {
      await fireEvent.click(card);
    });
    expect(document.getElementsByTagName('iframe')[0]).toBeInTheDocument();
  });
  test('Show related videos ', async () => {
    await act(async () => {
      render(<App />);
    });

    const card = screen.getByAltText('Wizeline');
    await act(async () => {
      await fireEvent.click(card);
    });
    expect(
      document.getElementsByClassName('related-content')[0]
    ).toBeInTheDocument();
  });
});
