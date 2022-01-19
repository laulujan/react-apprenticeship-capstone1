import React from 'react';
import PreferencesProvider from '../providers/Preferences/provider';
import { ThemeProvider } from 'styled-components';
import { AuthContext } from '../providers/Auth/context';
import { VideoContext } from '../providers/Video/context';

function mountAllProviders(authprops = {}, videoProps = {}, themeProps = null) {
  if (themeProps === null) {
    const mock = require('./mockTheme');
    themeProps = mock.getMockedTheme;
  }

  return {
    wrapper: ({ children }) => (
      <AuthContext.Provider value={authprops}>
        <VideoContext.Provider value={videoProps}>
          <PreferencesProvider theme={themeProps} isDarkThemeOn={false}>
            <ThemeProvider theme={themeProps}>{children}</ThemeProvider>
          </PreferencesProvider>
        </VideoContext.Provider>
      </AuthContext.Provider>
    ),
  };
}
export { mountAllProviders };
