import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Navbar from './nav_bar_container';
import SessionFormContainer from './session_form_container';
import ProjectList from './project/project_list_container.jsx';

const App = () => (
  <div>
    <Navbar />

    <Route exact path="/" component={ProjectList} />
    <AuthRoute path="/login" component={SessionFormContainer}/>
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
