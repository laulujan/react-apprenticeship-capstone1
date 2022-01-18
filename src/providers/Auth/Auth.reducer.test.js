import { authReducer } from './Auth.reducer';
import { ACTIONS } from './Auth.actions';

const { LOGIN, LOGOUT, LOGGED, ERROR } = ACTIONS;

describe('Reducer function test', () => {
  test('should set loadding when login action is dispatched', () => {
    const userState = {
      loading: false,
      user: null,
      error: false,
    };

    const action = {
      type: LOGIN,
      payload: {
        loading: true,
        user: null,
        error: false,
      },
    };

    const updatedState = authReducer(userState, action);
    expect(updatedState.loading).toEqual(true);
  });
  test('should set user when logged action is dispatched', () => {
    const userState = {
      loading: false,
      user: null,
      error: false,
    };

    const action = {
      type: LOGGED,
      payload: {
        loading: false,
        user: { name: 'test' },
        error: false,
      },
    };

    const updatedState = authReducer(userState, action);
    expect(updatedState.user.name).toEqual('test');
  });
  test('should delete user  when logout action is dispatched', () => {
    const userState = {
      loading: false,
      user: { name: 'test' },
      error: false,
    };

    const action = {
      type: LOGOUT,
      payload: {
        loading: false,
        user: null,
        error: false,
      },
    };

    const updatedState = authReducer(userState, action);
    expect(updatedState.user).toBe(null);
  });
  test('should set error when error action is dispatched', () => {
    const userState = {
      loading: false,
      user: null,
      error: false,
    };

    const action = {
      type: ERROR,
      payload: {
        loading: false,
        user: null,
        error: true,
      },
    };

    const updatedState = authReducer(userState, action);
    expect(updatedState.error).toBe(true);
  });
});
