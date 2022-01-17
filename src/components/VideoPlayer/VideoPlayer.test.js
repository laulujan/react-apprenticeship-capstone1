import React from 'react';
import { screen, act, render } from '@testing-library/react';
import VideoPlayer from './VideoPlayer';
import { mountAllProviders } from '../../__mocks__/MountComponent';

describe('<VideoPlayer />', () => {
  test('Render video', async () => {
    await act(async () => {
      render(<VideoPlayer video={{ id: 'test' }} />, mountAllProviders());
    });

    expect(screen.getByTestId('video-player-container')).toBeInTheDocument();
    expect(document.getElementsByTagName('iframe')[0]).toBeInTheDocument();
  });
  test('Render favorite button', async () => {
    render(
      <VideoPlayer video={{ id: 'test' }} />,
      mountAllProviders(
        { isLoggedIn: true },
        { isFavorite: jest.fn(() => false) }
      )
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  test('Render video Title', async () => {
    render(<VideoPlayer video={{ id: 'test' }} />, mountAllProviders());
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
