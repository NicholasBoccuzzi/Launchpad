import React from 'react';
import SessionFormContainer from './session_form_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Navbar from './nav_bar_container';

const App = () => (
  <div>
    <Navbar />

    <AuthRoute path="/login" component={SessionFormContainer}/>
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
