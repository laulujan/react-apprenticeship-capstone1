import React from 'react';
import ThemeButton from './ThemeButton';

import { mount } from '../../__mocks__/MountComponent';

describe('<ThemeButton />', () => {
  test('Render Navbar', async () => {
    let x = mount(<ThemeButton />);
    expect(await x.findByRole('button')).toBeInTheDocument();
  });
});
