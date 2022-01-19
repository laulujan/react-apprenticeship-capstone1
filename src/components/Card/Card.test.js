import React from 'react';
import {
  screen,
  act,
  render,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import Card from './Card';
import { mountAllProviders } from '../../__mocks__/MountComponent';
import { MemoryRouter } from 'react-router-dom';

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

describe('<Card />', () => {
  let videoProps = {
    setCurrentVideo: jest.fn(),
  };
  let videoMock = { image: 'test', title: 'My Test Title', id: 'test' };
  test('Render card image', async () => {
    await act(async () => {
      render(<Card video={videoMock} />, mountAllProviders());
    });
    expect(await screen.findByAltText(videoMock.title)).toBeInTheDocument();
  });
  test('on click', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={[`/`]}>
          <Card video={videoMock} />
        </MemoryRouter>,
        mountAllProviders({}, videoProps)
      );
    });
    const card = document.getElementsByClassName('card')[0];
    fireEvent.click(card);
    waitFor(() => expect(location.pathname).toBe('/video/test'));
  });
  test('on click with favorites', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={[`/favorites`]}>
          <Card video={videoMock} />
        </MemoryRouter>,
        mountAllProviders({}, videoProps)
      );
    });
    const card = document.getElementsByClassName('card')[0];
    fireEvent.click(card);
    waitFor(() => expect(location.pathname).toBe('/favorites/test'));
  });
});
