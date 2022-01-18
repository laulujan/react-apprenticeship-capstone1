import React from 'react';
import HomePage from './Home.page';
import { screen, act, render } from '@testing-library/react';

import { mountAllProviders } from '../../__mocks__/MountComponent';

describe('<Home page />', () => {
  let videoProps = {
    video: {},
    setSearchItem: jest.fn(),
  };
  test('Shows not videos found if there is no videos ', async () => {
    await act(async () => {
      render(<HomePage />, mountAllProviders({ isLogedIn: false }, videoProps));
    });

    expect(screen.getByText('No videos found')).toBeInTheDocument();
  });
});
