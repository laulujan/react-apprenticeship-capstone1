import React from 'react';
import Navbar from './Navbar';

import { mount } from '../../__mocks__/MountComponent';

jest.mock('../../api/youtubeAPI.js', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');
  return { getVideos: mock.getVideos };
});

describe('<Navbar />', () => {
  test('Render Navbar', async () => {
    let x = mount(<Navbar />);
    expect(await x.findByRole('navigation')).toBeInTheDocument();
  });
});
