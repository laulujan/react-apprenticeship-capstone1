import React from 'react';
import { screen, act, render } from '@testing-library/react';
import Card from './Card';
import { mountAllProviders } from '../../__mocks__/MountComponent';

jest.mock('../../api/youtubeAPI.js', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');
  return { getVideos: mock.getVideos };
});
describe('<Card />', () => {
  let videoMock = { image: 'test', title: 'My Test Title' };
  test('Render card image', async () => {
    await act(async () => {
      render(<Card video={videoMock} />, mountAllProviders());
    });
    expect(await screen.findByAltText(videoMock.title)).toBeInTheDocument();
  });
});
