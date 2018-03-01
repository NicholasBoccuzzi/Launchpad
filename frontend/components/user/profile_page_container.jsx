import { connect } from 'react-redux';
import ProfilePage from './profile_page';
import { fetchUser } from '../../actions/user_actions.js';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    location: ownProps.location,
    user: state.entities.users.user
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
