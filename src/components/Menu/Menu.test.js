import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Menu from './Menu';
import { mountAllProviders } from '../../__mocks__/MountComponent';

describe('<Menu />', () => {
  test('Open dropdown on click event', async () => {
    render(<Menu />, mountAllProviders());
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
