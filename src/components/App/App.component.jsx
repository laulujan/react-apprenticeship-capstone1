import React, { useState, useEffect } from 'react';
import Router from '../Router/Router';
import VideoProvider from '../../providers/Video/Video.provider';
import { ThemeProvider } from 'styled-components';
import theme from '../Layout/theme';

import { initGoogle } from '../../api/gapi';

function App() {
  const [loadDependencies, setLoadDependencies] = useState(false);

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
          <ThemeProvider theme={theme}>
            <Router />
          </ThemeProvider>
        </VideoProvider>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default App;
