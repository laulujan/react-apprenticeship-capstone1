import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import HomePage from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import NotFound from '../../pages/NotFound/NotFound';
import Private from '../Private/Private';
import Favorites from '../../pages/Favorites/Favorites';
import VideoDetails from '../../pages/VideoDetails/VideoDetails';
import Layout from '../Layout/Layout';

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
          <Route exact path="/login">
            <Login />
          </Route>
          <Private exact path="/favorites">
            <Favorites />
          </Private>
          <Private exact path="/favorites/:id">
            <VideoDetails />
          </Private>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
