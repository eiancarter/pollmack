import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grommet, Anchor, Box, Header } from "grommet";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home/Home.js';
import Profile from './components/Profile/Profile';
import CandidateList from './components/Organizations/CandidateList';
import ProfileAvatar from './components/Profile/ProfileAvatar';

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
        <Header style={{ width:"100%" }} background="brand" pad="small">
          <Anchor style={{color:"white"}} label="pollmack" href="/profile" />
          <Anchor style={{color:"white"}} label="profile" href="/profile" />
          <Anchor style={{color:"white"}} label="search candidates" href="/profile/candidates" />
          <Anchor href="/profile">
            <ProfileAvatar />
          </Anchor>
        </Header>
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
