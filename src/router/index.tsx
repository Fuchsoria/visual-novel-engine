import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Novel from '../pages/Novel';

export default function Router() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/">
            <Novel />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}
