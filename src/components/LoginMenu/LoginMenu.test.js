import React from 'react';
import { fireEvent, screen, act } from '@testing-library/react';
import LoginMenu from './LoginMenu';
import { mount } from '../../__mocks__/MountComponent';

jest.mock('../../api/youtubeAPI.js', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');
  return { getVideos: mock.getVideos };
});

describe('<LoginMenu />', () => {
  test('Open dropdown on click event', async () => {
    await act(async () => {
      mount(<LoginMenu />);
    });
    const btn = screen.getAllByRole('button')[2];
    fireEvent.click(btn);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
