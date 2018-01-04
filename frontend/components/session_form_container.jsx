import { connect } from 'react-redux';

import { login, logout, signup, clearSessionErrors} from '../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state, { location }) => {
  const formType = location.pathname.slice(1);
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType: formType
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
