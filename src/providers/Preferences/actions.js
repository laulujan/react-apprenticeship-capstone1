const ACTIONS = {
  TOGGLE_THEME: 'TOGGLE_THEME',
};

const toggleTheme = (dispatch) => () => {
  dispatch({ type: ACTIONS.TOGGLE_THEME });
};

export { ACTIONS, toggleTheme };
