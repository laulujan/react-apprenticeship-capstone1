import React from 'react';
import ThemeButton from './ThemeButton';
import { fireEvent, screen, act } from '@testing-library/react';
import { mount } from '../../__mocks__/MountComponent';

jest.mock('../../api/youtubeAPI.js', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');
  return { getVideos: mock.getVideos };
});

describe('<ThemeButton />', () => {
  test('Render Theme button', async () => {
    await act(async () => {
      mount(<ThemeButton />);
    });

    expect(screen.getByTestId('theme-button')).toBeInTheDocument();
  });
  test('Changes theme button after click', async () => {
    await act(async () => {
      mount(<ThemeButton />);
    });

    const button = screen.getByTestId('theme-button');
    fireEvent.click(button);

    expect(screen.getByTitle('dark_theme')).toBeInTheDocument();
  });
});
