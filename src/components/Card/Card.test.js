import React from 'react';
import { screen, act } from '@testing-library/react';
import Card from './Card';
import { mount } from '../../__mocks__/MountComponent';

jest.mock('../../api/youtubeAPI.js', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');
  return { getVideos: mock.getVideos };
});
describe('<Card />', () => {
  test('Render card image', async () => {
    await act(async () => {
      mount(<Card />);
    });
    expect(await screen.findByAltText('Wizeline')).toBeInTheDocument();
  });
});
