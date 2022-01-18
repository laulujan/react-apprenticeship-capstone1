import React from 'react';
import Login from './Login';
import { screen, act, render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { mountAllProviders } from '../../__mocks__/MountComponent';

describe('<Login />', () => {
  let authProps = {
    login: jest.fn(),
    setPassword: jest.fn(),
  };

  test('Shows input for username and password and buttons', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={[`/login`]}>
          <Login />
        </MemoryRouter>,
        mountAllProviders({}, authProps)
      );
    });

    expect(screen.getByLabelText('User')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getAllByRole('button').length).toBe(2);
  });
  test('Inputs allows to change value', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={[`/login`]}>
          <Login />
        </MemoryRouter>,
        mountAllProviders({}, authProps)
      );
    });
    const user = screen.getByLabelText('User');
    const password = screen.getByLabelText('Password');

    fireEvent.change(user, { target: { value: 'wizeline' } });
    fireEvent.change(password, { target: { value: 'Rocks!' } });

    expect(user.value).toBe('wizeline');
    expect(password.value).toBe('Rocks!');
  });

  test('Should call login function on click login', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={[`/login`]}>
          <Login />
        </MemoryRouter>,
        mountAllProviders(authProps)
      );
    });
    const user = screen.getByLabelText('User');
    const password = screen.getByLabelText('Password');
    const loginBtn = screen.getByText('Login');

    fireEvent.change(user, { target: { value: 'wizeline' } });
    fireEvent.change(password, { target: { value: 'Rocks!' } });
    fireEvent.click(loginBtn);

    expect(authProps.login).toHaveBeenCalled();
  });
});
