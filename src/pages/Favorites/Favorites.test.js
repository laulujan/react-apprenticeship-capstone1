import React from 'react';
import Favorites from './Favorites';
import { screen, act, render } from '@testing-library/react';

import { mountAllProviders } from '../../__mocks__/MountComponent';

jest.mock('../../api/youtubeAPI.js', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');
  return { getVideos: mock.getVideos };
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/',
  }),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

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
    setSearchItem: jest.fn(),
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
