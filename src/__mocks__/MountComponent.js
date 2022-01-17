import React from 'react';
import { Router, Route, MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Layout from '../components/Layout';
import VideoProvider from '../providers/Video/Video.provider';
import PreferencesProvider from '../providers/Preferences/Preferences.provider';
import ThemedApp from '../components/ThemedApp/ThemedApp';
import { mock } from './mockYouTubeAPI';
import { ThemeProvider } from 'styled-components';
import { AuthContext } from '../providers/Auth/Auth.context';
import { VideoContext } from '../providers/Video/Video.context';

function mount(component, path = '/') {
  return render(
    <VideoProvider>
      <PreferencesProvider>
        <ThemedApp>
          <MemoryRouter initialEntries={[path]}>{component}</MemoryRouter>
        </ThemedApp>
      </PreferencesProvider>
    </VideoProvider>
  );
}

function mountComponentWithRouter(component, history, path) {
  mock();
  return render(
    <VideoProvider>
      <Layout>
        <Router history={history}>
          <Route path={path}>{component}</Route>
        </Router>
      </Layout>
    </VideoProvider>
  );
}

function mountThemeProvider() {
  const mock = require('./mockTheme');

  return {
    wrapper: ({ children }) => (
      <PreferencesProvider theme={mock.getMockedTheme}>
        <ThemeProvider theme={mock.getMockedTheme}>{children}</ThemeProvider>
      </PreferencesProvider>
    ),
  };
}

function mountThemeAndVideoProvider(
  video = {},
  videos = [],
  relatedVideos = []
) {
  const mock = require('./mockTheme');

  return {
    wrapper: ({ children }) => (
      <VideoProvider
        video={video}
        videos={videos}
        relatedVideos={relatedVideos}
        fetchRelatedVideos={mock.getMockedTheme}
      >
        <PreferencesProvider theme={mock.getMockedTheme}>
          <ThemeProvider theme={mock.getMockedTheme}>{children}</ThemeProvider>
        </PreferencesProvider>
      </VideoProvider>
    ),
  };
}

function mountAllProviders(authprops = {}, videoProps = {}, themeProps = null) {
  if (themeProps === null) {
    const mock = require('./mockTheme');
    themeProps = mock.getMockedTheme;
  }

  return {
    wrapper: ({ children }) => (
      <AuthContext.Provider value={authprops}>
        <VideoContext.Provider value={videoProps}>
          <PreferencesProvider theme={themeProps}>
            <ThemeProvider theme={themeProps}>{children}</ThemeProvider>
          </PreferencesProvider>
        </VideoContext.Provider>
      </AuthContext.Provider>
    ),
  };
}
export {
  mount,
  mountComponentWithRouter,
  mountThemeProvider,
  mountThemeAndVideoProvider,
  mountAllProviders
};
