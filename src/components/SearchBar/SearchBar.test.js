import {
  screen,
  act,
  fireEvent,
  render,
  waitFor,
} from '@testing-library/react';
import SearchBar from './SearchBar';
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

describe('<SearchBar />', () => {
  let videoProps = {
    video: {},
    fetchVideos: jest.fn(),
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
  test('calls fetch on first render', async () => {
    await act(async () => {
      render(<SearchBar />, mountAllProviders(authProps, videoProps));
    });

    expect(videoProps.fetchVideos).toHaveBeenCalled();
  });
  test('Allows to write in input', async () => {
    await act(async () => {
      render(<SearchBar />, mountAllProviders(authProps, videoProps));
    });
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'wizeline' } });
    expect(input.value).toMatch('wizeline');
  });
  test('Fetch videos on enter', async () => {
    await act(async () => {
      render(<SearchBar />, mountAllProviders(authProps, videoProps));
    });
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'wizeline' } });
    input.focus();
    fireEvent.keyDown(document.activeElement || document.body);

    waitFor(() => expect(videoProps.fetchVideos).toHaveBeenCalled());
    expect(location.pathname).toBe('/');
  });
  test('Redirects to home to show results', async () => {
    await act(async () => {
      render(<SearchBar />, mountAllProviders(authProps, videoProps));
    });
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'wizeline' } });
    input.focus();
    fireEvent.keyPress(input, {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      charCode: 13,
    });
    expect(videoProps.fetchVideos).toHaveBeenCalled();
    expect(location.pathname).toBe('/');
  });
  test('Not call fetch on other key down', async () => {
    await act(async () => {
      render(<SearchBar />, mountAllProviders(authProps, videoProps));
    });
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'wizeline' } });
    input.focus();
    fireEvent.keyPress(input, {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27,
    });
    waitFor(() => expect(videoProps.fetchVideos).not.toHaveBeenCalled());
  });
});
