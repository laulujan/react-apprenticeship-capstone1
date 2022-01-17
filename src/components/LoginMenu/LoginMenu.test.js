import React from 'react';
import { fireEvent, screen, act, render } from '@testing-library/react';
import LoginMenu from './LoginMenu';
import { mountAllProviders } from '../../__mocks__/MountComponent';

jest.mock('../../api/youtubeAPI.js', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');
  return { getVideos: mock.getVideos };
});

describe('<LoginMenu />', () => {
  test('Open dropdown on click event', async () => {
    await act(async () => {
      render(<LoginMenu />, mountAllProviders());
    });

    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
