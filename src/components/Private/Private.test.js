import React from 'react';
import Private from './Private';
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
    pathname: 'localhost:3000/favorites/',
  }),
  useHistory: () => ({
    push: jest.fn(),
  }),
  Redirect: () => {
    return <div>Home Test</div>;
  },
}));

describe('<Private />', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');

  let videoProps = {
    video: {},
    fetchVideos: mock.getVideos,
    setSearchItem: jest.fn(),
    favorites: [
      { id: 'test', title: 'test', image: 'test', description: 'test' },
    ],
  };

  test('Redirects when user is not loged in', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={[`/favorites`]}>
          <Private />
        </MemoryRouter>,
        mountAllProviders({ isLoggedIn: false }, videoProps)
      );
    });

    expect(screen.getByText('Home Test')).toBeInTheDocument();
  });
  test('shows private route when user is logged in', async () => {
    const PrivateComponent = () => <>Favorites</>;
    await act(async () => {
      render(
        <MemoryRouter initialEntries={[`/favorites`]}>
          <Private path="/favorites">
            <PrivateComponent />
          </Private>
        </MemoryRouter>,
        mountAllProviders({ isLoggedIn: true }, videoProps)
      );
    });

    expect(screen.queryByText('Favorites')).toBeInTheDocument();
  });
});
