import React, { useState } from 'react';
import { ThemeButton, LightIcon, DarkIcon } from './ThemeButton.styled';

const ToggleTheme = () => {
  const [isDarkThemeOn, setIsDarkThemeOn] = useState(false);

  const handleClick = () => {
    setIsDarkThemeOn(!isDarkThemeOn);
  };

  return (
    <div>
      <ThemeButton onClick={handleClick}>
        {isDarkThemeOn ? <LightIcon /> : <DarkIcon />}
      </ThemeButton>
    </div>
  );
};

export default ToggleTheme;
