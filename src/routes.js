import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Join from './pages/join';
import Store from './pages/store';
import password from './pages/changePassword';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/join" component={Join} />
        <Route path="/store" component={Store} />
        <Route path="/store/:password+" component={password} />
      </Switch>
    </BrowserRouter>
  );
}
