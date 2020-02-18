import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grommet } from 'grommet';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home/Home.js';
import Profile from './components/Profile/Profile';
import CandidateList from './components/Organizations/CandidateList';

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
          <Route exact path='/profile/candidates'>
            <CandidateList />
          </Route>
        </Switch>
      </header>
    </Grommet>
  );
}

export default App;
