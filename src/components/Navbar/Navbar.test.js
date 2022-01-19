import React from 'react';
import Navbar from './Navbar';
import { screen, act, render } from '@testing-library/react';

import { mountAllProviders } from '../../__mocks__/MountComponent';

jest.mock('../../api/youtubeAPI.js', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');
  return { getVideos: mock.getVideos };
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/example/path',
  }),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('<Navbar />', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');

  let videoProps = {
    video: {},
    fetchVideos: mock.getVideos,
    setSearchItem: jest.fn(),
  };

  test('Render Navbar', async () => {
    await act(async () => {
      render(<Navbar />, mountAllProviders({}, videoProps));
    });

    expect(await screen.findByRole('navigation')).toBeInTheDocument();
  });
});
