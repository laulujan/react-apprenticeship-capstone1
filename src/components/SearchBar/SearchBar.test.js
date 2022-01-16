import { screen, act, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import { mount } from '../../__mocks__/MountComponent';

jest.mock('../../api/youtubeAPI.js', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');
  return { getVideos: mock.getVideos };
});

describe('Search component', () => {
  test('Renders input', async () => {
    await act(async () => {
      mount(<SearchBar />);
    });
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  test('Allows to write in input', async () => {
    await act(async () => {
      mount(<SearchBar />);
    });
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'wizeline' } });
    expect(input.value).toMatch('wizeline');
  });
});
