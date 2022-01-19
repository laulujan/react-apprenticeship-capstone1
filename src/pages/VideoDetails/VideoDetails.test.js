import React from 'react';
import VideoDetails from './VideoDetails';
import { screen, act, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { mountAllProviders } from '../../__mocks__/MountComponent';

jest.mock('../../api/youtubeAPI.js', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');
  return { getVideos: mock.getVideos };
});

describe('<VideoDetails/>', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');

  let videoProps = {
    video: {},
    favorites: [{ id: '1', title: 'test', image: 'test', description: 'test' }],
    fetchRelatedVideos: mock.getVideos,
    relatedVideos: [
      { id: '2', title: 'test2', image: 'test2', description: 'test2' },
    ],
  };
  test('Renders from favorites when user is loged in ', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={[`/favorites`]}>
          <VideoDetails />
        </MemoryRouter>,
        mountAllProviders({ isLogedIn: true }, videoProps)
      );
    });

    expect(screen.getByAltText('test')).toBeInTheDocument();
  });
  test('Renders videos when user is loged out ', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={[`/video`]}>
          <VideoDetails />
        </MemoryRouter>,
        mountAllProviders({ isLogedIn: false }, videoProps)
      );
    });
    expect(screen.getByAltText('test2')).toBeInTheDocument();
  });
});
