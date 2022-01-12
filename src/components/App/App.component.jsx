import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import VideoProvider from '../../providers/Video/Video.provider';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import VideoDetails from '../../pages/VideoDetails/VideoDetails';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';
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
        <BrowserRouter>
          <AuthProvider>
            <VideoProvider>
              <Layout>
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route exact path="/login">
                    <LoginPage />
                  </Route>
                  <Route exact path="/video/:id">
                    <VideoDetails />
                  </Route>
                  <Private exact path="/secret">
                    <SecretPage />
                  </Private>
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </Layout>
            </VideoProvider>
          </AuthProvider>
        </BrowserRouter>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default App;
