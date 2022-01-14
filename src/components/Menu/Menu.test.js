import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import Menu from './Menu';
import { mount } from '../../__mocks__/MountComponent';

describe('<Menu />', () => {
  test('Open dropdown on click event', async () => {
    mount(<Menu />);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
