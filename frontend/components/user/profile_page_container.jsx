import { connect } from 'react-redux';
import ProfilePage from './profile_page';
import { fetchUser } from '../../actions/user_actions.js';
import { updatePage } from '../../actions/ui_actions.js';
import { withRouter } from 'react-router-dom';




const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    location: ownProps.location,
    user: state.entities.users.user,
    loadCurrentUserInfo: state.ui.loadCurrentUserInfo
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  updatePage: () => dispatch(updatePage())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage));
