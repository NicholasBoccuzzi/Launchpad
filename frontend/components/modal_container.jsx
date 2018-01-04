import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import Modal from './modal';
import { toggleErrorModal } from '../actions/ui_actions.js';

const mapStateToProps = state => {
  return {
    errors: state.errors,
    errorModalActive: state.ui.errorModalActive
  };
};

const mapDispatchToProps = dispatch => ({
  toggleErrorModal: () => dispatch(toggleErrorModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
