import loginApi from '../../api/loginAPI';

const ACTIONS = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  LOGGED: 'LOGGED',
  ERROR: 'ERROR',
};

const loginUser = (dispatch) => async (username, password) => {
  dispatch({ type: ACTIONS.LOGIN });

  try {
    const user = await loginApi(username, password);

    dispatch({
      type: ACTIONS.LOGGED,
      payload: { user },
    });
    return user;
  } catch (error) {
    dispatch({
      type: ACTIONS.ERROR,
      payload: { error: error.message },
    });
    return null;
  }
};

const logoutUser = (dispatch) => () => {
  dispatch({ type: ACTIONS.LOGOUT });
};

export { ACTIONS, loginUser, logoutUser };
