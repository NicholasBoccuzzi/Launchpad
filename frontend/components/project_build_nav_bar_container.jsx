import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import ProjectBuildNavBar from './project_build_nav_bar';
import { toggleProfileDropDown } from '../actions/ui_actions.js';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    profileDropDownActive: state.ui.profileDropDownActive
  };
};

const mapDispatchToProps = dispatch => ({
  toggleProfileDropDown: () => dispatch(toggleProfileDropDown()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectBuildNavBar);
