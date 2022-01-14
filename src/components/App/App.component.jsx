import React, { useState, useEffect } from 'react';
import Router from '../Router/Router';
import VideoProvider from '../../providers/Video/Video.provider';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../Layout/theme';
import PreferencesProvider from '../../providers/Preferences/Preferences.provider';
import { usePreferences } from '../../providers/Preferences/Preferences.provider';

import { initGoogle } from '../../api/gapi';

function App() {
  const [loadDependencies, setLoadDependencies] = useState(false);
  const { theme } = usePreferences();

  useEffect(() => {
    const connectToGapi = async () => {
      try {
        window.gapi.client.youtube.search;
      } catch (e) {
        await initGoogle().then(() => {
          setLoadDependencies(true);
        });
      }
    };
    connectToGapi();
  }, []);
  return (
    <div>
      {loadDependencies ? (
        <VideoProvider>
          <PreferencesProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              <Router />
            </ThemeProvider>
          </PreferencesProvider>
        </VideoProvider>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default App;
