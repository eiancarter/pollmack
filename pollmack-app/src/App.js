import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grommet } from 'grommet';

import Home from './components/Home/Home.js';

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
          <Route path='/profile'>
            {/* <Profile /> */}
          </Route>
          <Route path='/profile/organizations'>
            {/* <OrganizationsList /> */}
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
