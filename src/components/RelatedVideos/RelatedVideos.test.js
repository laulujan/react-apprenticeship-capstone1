import React from 'react';
import { render, screen, act } from '@testing-library/react';
import RelatedVideos from './RelatedVideos';
import { mountThemeProvider } from '../../__mocks__/MountComponent';
import VideoProvider from '../../providers/Video/Video.provider';

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
});
