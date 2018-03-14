import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Navbar from './nav_bar_container';
import CreateProjectNavBar from './create_project_nav_bar_container';
import Mainpage from './mainpage_container';
import SessionFormContainer from './session_form_container';
import ProjectList from './project/project_list_container';
import CreateProjectForm from './project/create_project_container';
import UpdateProjectForm from './project/update_project_container';
import ProfilePage from './user/profile_page_container';
import Footer from './footer';
import ProjectShow from './project/project_show_page_container';
import UnderConstruction from './underconstruction';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    exploreModalActive: state.ui.exploreModalActive
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    if (this.props.exploreModalActive) {
      return (
        <Route path='/'   component={Navbar}/>
      );
    } else {
      return (
        <div>
          <Switch>
            <Route path='/startproject' component={CreateProjectNavBar} exact/>
            <Route path='/'   component={Navbar}/>
          </Switch>

          <Route path="/user/:userId" component={ProfilePage} />
          <Route exact path="/underconstruction" component={UnderConstruction}/>
          <Route exact path="/projects/:projectId" component={ProjectShow}></Route>
          <Route exact path="/" component={Mainpage}></Route>
          <ProtectedRoute exact path="/startproject" component={CreateProjectForm} />
          <ProtectedRoute exact path="/projects/:projectId/edit" component={UpdateProjectForm}/>
          <Route path="/discover" component={ProjectList} />
          <AuthRoute path="/login" component={SessionFormContainer}/>
          <AuthRoute path="/signup" component={SessionFormContainer} />
          <Switch>
            <Route path='/startproject' exact/>
            <Route path='/'   component={Footer}/>
          </Switch>
        </div>
      );
    }
  }

}

export default withRouter(connect(mapStateToProps)(App));
