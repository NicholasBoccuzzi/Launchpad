import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Navbar from './nav_bar_container';
import Mainpage from './mainpage_container';
import SessionFormContainer from './session_form_container';
import ProjectList from './project/project_list_container';
import CreateProjectForm from './project/create_project_container';
import Footer from './footer';

const App = () => (
  <div>
    <Navbar />

    <Route exact path="/" component={Mainpage}></Route>
    <ProtectedRoute exact path="/startproject" component={CreateProjectForm} />
    <Route exact path="/discover" component={ProjectList} />
    <AuthRoute path="/login" component={SessionFormContainer}/>
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <Footer />
  </div>
);

export default App;
