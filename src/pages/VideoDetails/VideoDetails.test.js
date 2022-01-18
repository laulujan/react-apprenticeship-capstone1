import React from 'react';
import VideoDetails from './VideoDetails';
import { screen, act, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { mountAllProviders } from '../../__mocks__/MountComponent';

jest.mock('../../api/youtubeAPI.js', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');
  return { getVideos: mock.getVideos };
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/',
  }),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('<VideoDetails/>', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');

  let videoProps = {
    video: {},
    favorites: [{ id: '1', title: 'test', image: 'test', description: 'test' }],
    fetchRelatedVideos: mock.getVideos,
    relatedVideos: [],
  };
  test('Renders  ', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={[`/video`]}>
          <VideoDetails />
        </MemoryRouter>,
        mountAllProviders({ isLogedIn: false }, videoProps)
      );
    });

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
//fix this test