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
import Footer from './footer';

const App = () => (
  <div>
    <Navbar />

    <Route exact path="/discover" component={ProjectList} />
    <AuthRoute path="/login" component={SessionFormContainer}/>
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <Footer />
  </div>
);

export default App;
