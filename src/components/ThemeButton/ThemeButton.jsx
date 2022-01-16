import React from 'react';
import { ThemeButton, LightIcon, DarkIcon } from './ThemeButton.styled';
import { usePreferences } from '../../providers/Preferences/Preferences.provider';

const ToggleTheme = () => {
  const { isDarkThemeOn, toggleTheme } = usePreferences();

  return (
    <div data-testid="theme-button">
      <ThemeButton onClick={toggleTheme}>
        {isDarkThemeOn ? (
          <LightIcon title="light_theme" />
        ) : (
          <DarkIcon title="dark_theme" />
        )}
      </ThemeButton>
    </div>
  );
};

export default ToggleTheme;
