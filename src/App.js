import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import SignUpAndlogin from "./containers/SignUpAndLogin/SignUpAndLogin"
import Timeline from "./containers/Timeline/Timeline"
import PrivateRoute from './components/privateRoute/PrivateRoute';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={SignUpAndlogin} />
          <PrivateRoute path="/timeline" component={Timeline} />
          <Redirect to="/" />
        </Switch>
      </Router>
  );
}

export default App;
