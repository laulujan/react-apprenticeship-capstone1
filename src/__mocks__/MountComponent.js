import React from 'react';
import { Router, Route, MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Layout from '../components/Layout';
import VideoProvider from '../providers/Video/Video.provider';
import PreferencesProvider from '../providers/Preferences/Preferences.provider';
import ThemedApp from '../components/ThemedApp/ThemedApp';
import { mock } from './mockYouTubeAPI';
import { ThemeProvider } from 'styled-components';

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

export {
  mount,
  mountComponentWithRouter,
  mountThemeProvider,
  mountThemeAndVideoProvider,
};
