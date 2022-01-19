import React from 'react';
import { screen, act, render } from '@testing-library/react';
import CardWrapper from './CardWrapper';
import { mountAllProviders } from '../../__mocks__/MountComponent';

jest.mock('../../api/youtubeAPI.js', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');
  return { getVideos: mock.getVideos };
});

describe('<CardWrapper />', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');
  let videosMock = [{ image: 'test', title: 'My Test Title', id: 'test' }];
  let videoProps = {
    video: {},
    fetchVideos: mock.getVideos,
    setSearchItem: jest.fn(),
  };

  test('Renders Cards img', async () => {
    await act(async () => {
      render(
        <CardWrapper videos={videosMock} />,
        mountAllProviders({}, videoProps)
      );
    });

    expect(await screen.findByAltText(videosMock[0].title)).toBeInTheDocument();
  });

  test('Renders Cards title', async () => {
    await act(async () => {
      render(
        <CardWrapper videos={videosMock} />,
        mountAllProviders({}, videoProps)
      );
    });

    expect(await screen.findByRole('heading')).toBeInTheDocument();
  });
});
