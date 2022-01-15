import React, { useState, useEffect } from 'react';
import VideoProvider from '../../providers/Video/Video.provider';
import PreferencesProvider from '../../providers/Preferences/Preferences.provider';
import ThemedApp from '../ThemedApp/ThemedApp';

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
          <PreferencesProvider>
            <ThemedApp />
          </PreferencesProvider>
        </VideoProvider>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default App;
