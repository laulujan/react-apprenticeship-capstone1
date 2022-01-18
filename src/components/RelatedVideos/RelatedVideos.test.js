import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import RelatedVideos from './RelatedVideos';
import {
  mountThemeProvider,
  mountAllProviders,
} from '../../__mocks__/MountComponent';
import VideoProvider from '../../providers/Video/Video.provider';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/video',
  }),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('<RelatedVideos />', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');

  test('Render Video image', async () => {
    await act(async () => {
      render(
        <VideoProvider>
          <RelatedVideos videosList={mock.getVideos()} />
        </VideoProvider>,
        mountThemeProvider()
      );
    });

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  test('Render video Title', async () => {
    await act(async () => {
      render(
        <VideoProvider>
          <RelatedVideos videosList={mock.getVideos()} />
        </VideoProvider>,
        mountThemeProvider()
      );
    });
    expect(document.getElementsByTagName('p')[0]).toBeInTheDocument();
  });

  let videoProps = {
    setCurrentVideo: () => {
      'test';
    },
    fetchRelatedVideos: jest.fn(),
  };
  test('Action on click', async () => {
    await act(async () => {
      render(
        <RelatedVideos videosList={mock.getVideos()} setPath={jest.fn()} />,
        mountAllProviders({}, videoProps)
      );
    });
    const item = screen.getByRole('img');
    fireEvent.click(item);
    expect(videoProps.fetchRelatedVideos).toHaveBeenCalled();
  });
});
