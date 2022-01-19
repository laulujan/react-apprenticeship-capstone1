import React, { useReducer, createContext, useContext } from 'react';

import { PreferencesReducer, initialState } from './reducer';
import { toggleTheme } from './actions';

const PreferencesContext = createContext(null);

function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error(
      `Can't use "usePreferences" without an PreferencesProvider!`
    );
  }
  return context;
}

const PreferencesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PreferencesReducer, initialState);

  const value = {
    isDarkThemeOn: state.isDarkThemeOn,
    theme: state.theme,
    toggleTheme: toggleTheme(dispatch),
  };

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
};

export { usePreferences };
export default PreferencesProvider;
