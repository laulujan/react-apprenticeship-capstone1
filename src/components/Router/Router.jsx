import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import HomePage from '../../pages/Home/Home.page';
import NotFound from '../../pages/NotFound';
import VideoDetails from '../../pages/VideoDetails/VideoDetails';
import Layout from '../Layout';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/video/:id">
            <VideoDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
