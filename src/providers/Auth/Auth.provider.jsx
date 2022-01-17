import React, { useReducer, useContext } from 'react';

import { loginUser, logoutUser } from './Auth.actions';
import { authReducer, initialState } from './Auth.reducer';
import { AuthContext } from './Auth.context';

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const value = {
    loading: state.loading,
    user: state.user,
    error: state.error,
    login: loginUser(dispatch),
    logout: logoutUser(dispatch),
    isLoggedIn: Boolean(state.user),
  };

  return <AuthContext.Provider {...props} value={value} />;
}

export { useAuth };
export default AuthProvider;
