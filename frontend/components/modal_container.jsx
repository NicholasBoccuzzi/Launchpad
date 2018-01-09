import { connect } from 'react-redux';
import Modal from './modal';
import { toggleErrorModal } from '../actions/ui_actions.js';
import { clearSessionErrors} from '../actions/session_actions';
import { toggleCreateProjectModal } from '../actions/ui_actions.js';
import { createProject } from '../actions/project_actions';
const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    errorModalActive: state.ui.errorModalActive,
    createProjectModalActive: state.ui.createProjectModalActive
  };
};

const mapDispatchToProps = dispatch => ({
  createProject: (project) => dispatch(createProject(project)),
  toggleErrorModal: () => dispatch(toggleErrorModal()),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
