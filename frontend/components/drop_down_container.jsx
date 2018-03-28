import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import DropDown from './drop_down';
import { toggleProfileDropDown, updatePage, loadCurrentUserInfo } from '../actions/ui_actions.js';
import { fetchCurrentUserProjects } from '../actions/project_actions.js';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  let currentUserProjects;

  if (state.entities.projects.currentUserProjects) {
    currentUserProjects = Object.values(
      state.entities.projects.currentUserProjects
    );
    if (currentUserProjects.length >= 5) {
      currentUserProjects = currentUserProjects.slice(
        currentUserProjects.length - 5,
        currentUserProjects.length
      );
    } else if (currentUserProjects.length === 4) {
      currentUserProjects = currentUserProjects.slice(
        currentUserProjects.length - 4,
        currentUserProjects.length
      );
    } else if (currentUserProjects.length === 3) {
      currentUserProjects = currentUserProjects.slice(
        currentUserProjects.length - 3,
        currentUserProjects.length
      );
    } else if (currentUserProjects.length === 2) {
      currentUserProjects = currentUserProjects.slice(
        currentUserProjects.length - 2,
        currentUserProjects.length
      );
    } else if (currentUserProjects.length === 1) {
      currentUserProjects = currentUserProjects.slice(
        currentUserProjects.length - 1,
        currentUserProjects.length
      );
    }
  }
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors,
    profileDropDownActive: state.ui.profileDropDownActive,
    currentUser: state.session.currentUser,
    updatedPage: state.ui.updatedPage,
    currentUserProjects: currentUserProjects,
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  toggleProfileDropDown: () => dispatch(toggleProfileDropDown()),
  // loadCurrentUserInfo: () => dispatch(loadCurrentUserInfo()),
  fetchCurrentUserProjects: (id) => dispatch(fetchCurrentUserProjects(id)),
  updatePage: (project) => dispatch(updatePage(project)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DropDown));
