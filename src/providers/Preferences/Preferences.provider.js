import React, { useReducer, createContext, useContext } from 'react';

import { PreferencesReducer, initialState } from './Preferences.reducer';
import { toggleTheme } from './Preferences.actions';

const PreferencesContext = createContext(null);

function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error(`Can't use "usePreferences" without an PreferencesProvider!`);
  }
  return context;
}


const PreferencesProvider = ({ children }) => {
  const { user } = useAuth();

  const [state, dispatch] = useReducer(
    PreferencesReducer,
    initialState,
  );
  function isFavorite(video) {
    return state.favorites.find((favorite) => favorite.id === video.id);
  }

  useEffect(() => {
    const userStorageKey = getUserStorageKey(user);

    if (!user) {
      storage.set(userStorageKey, {
        isLightThemeOn: state.isLightThemeOn,
      });
      return;
    }

    storage.set(userStorageKey, {
      isLightThemeOn: state.isLightThemeOn,
      favorites: state.favorites,
    });
  }, [user, state.isLightThemeOn, state.favorites]);

  const value = {
    isDarkThemeOn: state.isLightThemeOn,
    theme: state.theme,
    invertTheme: doInvertTheme(dispatch),
    favorites: state.favorites,
    isFavorite,
    addFavorite: addFavorite(dispatch),
    removeFavorite: removeFavorite(dispatch),
  };

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
};

export { usePreferences };
export default PreferencesProvider;