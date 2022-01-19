import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import Menu from './Menu';
import { mountAllProviders } from '../../__mocks__/MountComponent';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/example/path',
  }),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('<Menu />', () => {
  test('Open dropdown on click event', async () => {
    render(<Menu />, mountAllProviders());
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
  test('Show favorites when user is loged in', async () => {
    await act(async () => {
      render(<Menu />, mountAllProviders({ isLoggedIn: true }));
    });

    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(screen.getByText('Favorites')).toBeInTheDocument();
  });
  test('Dont show favorites when user is logedout', async () => {
    await act(async () => {
      render(<Menu />, mountAllProviders({ isLoggedIn: false }));
    });

    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(screen.queryByText('Favorites')).not.toBeInTheDocument();
  });
  test('closes dropdown after click', async () => {
    await act(async () => {
      render(<Menu />, mountAllProviders({ isLoggedIn: false }));
    });

    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(screen.getByText('Home')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByText('Home')).not.toBeInTheDocument();
  });
  test('closes dropdown after click outside', async () => {
    await act(async () => {
      render(<Menu />, mountAllProviders({ isLoggedIn: false }));
    });

    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(screen.getByText('Home')).toBeInTheDocument();
    fireEvent.mouseDown(document.body);
    expect(screen.queryByText('Home')).not.toBeInTheDocument();
  });
});
