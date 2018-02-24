import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import DropDown from './drop_down';
import { toggleProfileDropDown } from '../actions/ui_actions.js';
import { fetchCurrentUserProjects } from '../actions/project_actions.js';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors,
    profileDropDownActive: state.ui.profileDropDownActive,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  toggleProfileDropDown: () => dispatch(toggleProfileDropDown()),
  fetchCurrentUserProjects: (id) => dispatch(fetchCurrentUserProjects(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropDown);
