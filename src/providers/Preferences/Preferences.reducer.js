import { ACTIONS } from './Preferences.actions';
import { lightTheme, darkTheme } from '../../components/Layout/theme';

export const initialState = {
  isDarkThemeOn: false,
  theme: lightTheme,
};

export function PreferencesReducer(state, action) {
  const { type } = action;

  let isDarkThemeOn = !state.isDarkThemeOn;

  switch (type) {
    case ACTIONS.TOGGLE_THEME:
      return {
        ...state,
        isDarkThemeOn: isDarkThemeOn,
        theme: isDarkThemeOn ? darkTheme : lightTheme,
      };
    default:
      throw new Error(`Invalid action "${type}"`);
  }
}
