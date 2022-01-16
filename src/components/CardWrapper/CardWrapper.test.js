import React from 'react';
import { screen, act } from '@testing-library/react';
import CardWrapper from './CardWrapper';
import { mount } from '../../__mocks__/MountComponent';

jest.mock('../../api/youtubeAPI.js', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');
  return { getVideos: mock.getVideos };
});

describe('<CardWrapper />', () => {
  test('Renders Cards img', async () => {
    await act(async () => {
      mount(<CardWrapper />);
    });

    expect(await screen.findByAltText('Wizeline')).toBeInTheDocument();
  });

  test('Renders Cards title', async () => {
    await act(async () => {
      mount(<CardWrapper />);
    });

    expect(await screen.findByRole('heading')).toBeInTheDocument();
  });
});
