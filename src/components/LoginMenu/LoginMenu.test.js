import React from 'react';
import { fireEvent, screen, act, render } from '@testing-library/react';
import LoginMenu from './LoginMenu';
import { mountAllProviders } from '../../__mocks__/MountComponent';

jest.mock('../../api/youtubeAPI.js', () => {
  const mock = require('../../__mocks__/mockYouTubeAPI');
  return { getVideos: mock.getVideos };
});
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/',
  }),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('<LoginMenu />', () => {
  test('Show avatar when the user is loged out', async () => {
    await act(async () => {
      render(<LoginMenu />, mountAllProviders());
    });

    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
  test('Open dropdown on click event', async () => {
    await act(async () => {
      render(<LoginMenu />, mountAllProviders());
    });

    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
  test('shows logout when user is loged in', async () => {
    await act(async () => {
      render(<LoginMenu />, mountAllProviders({ isLoggedIn: true }));
    });

    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });
  test('Logs out when click logout', async () => {
    await act(async () => {
      render(
        <LoginMenu />,
        mountAllProviders({ isLoggedIn: true, logout: () => {} })
      );
    });

    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    const logout = screen.getByText('Logout');
    fireEvent.click(logout);
    expect(screen.getByAltText('avatar')).toBeInTheDocument();
  });

  test('Show avatar when the user is loged out', async () => {
    await act(async () => {
      render(<LoginMenu />, mountAllProviders());
    });

    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
  test('Shows user image when user loged in', async () => {
    await act(async () => {
      render(
        <LoginMenu />,
        mountAllProviders({
          isLoggedIn: true,
          user: { name: 'Wizeline' },
        })
      );
    });
    expect(screen.getByAltText('Wizeline')).toBeInTheDocument();
  });
  test('closes dropdown after click outside', async () => {
    await act(async () => {
      render(<LoginMenu />, mountAllProviders({ isLoggedIn: false }));
    });

    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(screen.getByText('Login')).toBeInTheDocument();
    fireEvent.mouseDown(document.body);
    expect(screen.queryByText('Home')).not.toBeInTheDocument();
  });
});
