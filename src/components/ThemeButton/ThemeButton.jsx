import React from 'react';
import { ThemeButton, LightIcon, DarkIcon } from './ThemeButton.styled';
import { usePreferences } from '../../providers/Preferences/Preferences.provider';

const ToggleTheme = () => {
  const { isDarkThemeOn, toggleTheme } = usePreferences();

  return (
    <div>
      <ThemeButton onClick={toggleTheme}>
        {isDarkThemeOn ? (
          <LightIcon alt="light theme" />
        ) : (
          <DarkIcon alt="dark theme" />
        )}
      </ThemeButton>
    </div>
  );
};

export default ToggleTheme;
