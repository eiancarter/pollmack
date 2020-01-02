import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grommet } from 'grommet';

import Home from './components/Home/Home.js';
import Profile from './components/Profile/Profile';
import OrganizationsList from './components/Organizations/OrganizationList';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} className="App">
      <header className="App-header">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
          <Route exact path='/profile/organizations'>
            <OrganizationsList />
          </Route>
          <Route path='/profile/organizations/:id'>
            {/* <OrganizationCard /> */}
          </Route>
        </Switch>
      </header>
    </Grommet>
  );
}

export default App;
