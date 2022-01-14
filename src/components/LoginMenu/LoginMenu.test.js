import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import LoginMenu from './LoginMenu';
import { mount } from '../../__mocks__/MountComponent';

describe('<LoginMenu />', () => {
  test('Open dropdown on click event', async () => {
    mount(<LoginMenu />);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
