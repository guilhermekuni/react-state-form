import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import ClientForm from './pages/ClientForm';

const Routes = () => (
  <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/client/new" component={ClientForm} />
  </BrowserRouter>
);

export default Routes;