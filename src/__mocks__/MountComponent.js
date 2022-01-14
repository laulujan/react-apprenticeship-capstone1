import React from 'react';
import { Router, Route, MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Layout from '../components/Layout';
import VideoProvider from '../providers/Video/Video.provider';
import { mock } from './mockYouTubeAPI';
import { ThemeProvider } from 'styled-components';
import theme from '../components/Layout/theme';

function mount(component, path = '/') {
  return render(
    <VideoProvider>
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={[path]}>{component}</MemoryRouter>
      </ThemeProvider>
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

export { mount, mountComponentWithRouter };
