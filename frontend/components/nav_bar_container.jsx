import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import Navbar from './nav_bar';
import {
  toggleProfileDropDown,
  activateExploreModal,
  deactivateExploreModal
} from '../actions/ui_actions.js';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    profileDropDownActive: state.ui.profileDropDownActive,
    exploreModalActive: state.ui.exploreModalActive
  };
};

const mapDispatchToProps = dispatch => ({
  activateExploreModal: () => dispatch(activateExploreModal()),
  toggleProfileDropDown: () => dispatch(toggleProfileDropDown()),
  deactivateExploreModal: () => dispatch(deactivateExploreModal()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
