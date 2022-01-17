import { screen, act, fireEvent, render } from '@testing-library/react';
import SearchBar from './SearchBar';
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

describe('Search component', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');
  let videoProps = {
    video: {},
    fetchVideos: mock.getVideos,
    setSearchItem: jest.fn(),
  };

  let authProps = {
    username: 'user',
    password: 'password',
  };

  test('Renders input', async () => {
    await act(async () => {
      render(<SearchBar />, mountAllProviders(authProps, videoProps));
    });

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  test('Allows to write in input', async () => {
    await act(async () => {
      render(<SearchBar />, mountAllProviders(authProps, videoProps));
    });
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'wizeline' } });
    expect(input.value).toMatch('wizeline');
  });
});
