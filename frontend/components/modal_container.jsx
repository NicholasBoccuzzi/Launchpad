import { connect } from 'react-redux';
import Modal from './modal';
import { toggleErrorModal } from '../actions/ui_actions.js';
import { clearSessionErrors} from '../actions/session_actions';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    errorModalActive: state.ui.errorModalActive
  };
};

const mapDispatchToProps = dispatch => ({
  toggleErrorModal: () => dispatch(toggleErrorModal()),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
