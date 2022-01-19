import React from 'react';
import Favorites from './Favorites';
import {
  screen,
  act,
  render,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { mountAllProviders } from '../../__mocks__/MountComponent';

jest.mock('../../api/youtubeAPI.js', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');
  return { getVideos: mock.getVideos };
});

describe('<Favorites />', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');

  let videoProps = {
    video: {},
    favorites: [{ id: '1', title: 'test', image: 'test', description: 'test' }],
    fetchVideos: mock.getVideos,
    setSearchItem: jest.fn(),
  };
  test('Renders cards when favorites list is not empty ', async () => {
    await act(async () => {
      render(
        <Favorites />,
        mountAllProviders({ isLogedIn: false }, videoProps)
      );
    });

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});

describe('<Favorites />', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');

  let videoProps = {
    video: {},
    favorites: [],
    fetchVideos: mock.getVideos,
  };

  test('Display no favorite videos when favorites list is empty ', async () => {
    await act(async () => {
      render(
        <Favorites />,
        mountAllProviders({ isLogedIn: false }, videoProps)
      );
    });

    expect(screen.getByText('No Favorite videos Found')).toBeInTheDocument();
  });
});

describe('<Favorites with elements/>', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');

  let videoProps = {
    video: {},
    favorites: [
      { id: 'test', title: 'test', image: 'test', description: 'test' },
    ],
    fetchVideos: mock.getVideos,
    setSearchItem: jest.fn(),
    setCurrentVideo: jest.fn(),
  };

  test('Display cards ', async () => {
    await act(async () => {
      render(<Favorites />, mountAllProviders({ isLogedIn: true }, videoProps));
    });

    expect(screen.getByAltText('test')).toBeInTheDocument();
  });
  test('Redirects to video page on click', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={[`/favorites`]}>
          <Favorites />
        </MemoryRouter>,
        mountAllProviders({ isLogedIn: true }, videoProps)
      );
    });
    const card = screen.getByAltText('test');
    act(() => {
      /* fire events that update state */
      fireEvent.click(card);
    });
    waitFor(() => expect(location.pathname).toBe('/favorites/test'));
  });
});
