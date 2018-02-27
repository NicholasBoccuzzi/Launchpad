import { connect } from 'react-redux';
import ProfilePage from './profile_page';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    location: ownProps.location,
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
