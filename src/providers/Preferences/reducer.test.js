import { PreferencesReducer } from './reducer';
import { ACTIONS } from './actions';
import { lightTheme, darkTheme } from '../../components/Layout/theme';

const { TOGGLE_THEME } = ACTIONS;

describe('Reducer function test', () => {
  test('should set dark theme on', () => {
    const userState = {
      isDarkThemeOn: false,
      theme: lightTheme,
    };

    const action = {
      type: TOGGLE_THEME,
      payload: {
        isDarkThemeOn: true,
        theme: darkTheme,
      },
    };

    const updatedState = PreferencesReducer(userState, action);
    expect(updatedState.isDarkThemeOn).toEqual(true);
    expect(updatedState.theme).toEqual(darkTheme);
  });
});
