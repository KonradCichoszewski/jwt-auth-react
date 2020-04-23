import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import AuthenticatedComponent from './AuthenticatedComponent';
import Login from './Login';
import Protected from './Protected';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} />
        <Route exact path='/' component={Home} />
        <AuthenticatedComponent>
          <Route exact path='/protected' component={Protected} />
        </AuthenticatedComponent>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
