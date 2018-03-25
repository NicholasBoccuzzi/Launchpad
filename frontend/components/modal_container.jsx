import { connect } from 'react-redux';
import Modal from './modal';
import { toggleErrorModal } from '../actions/ui_actions.js';
import { clearSessionErrors} from '../actions/session_actions';
import {
  toggleCreateProjectModal,
  deactivateExploreModal
} from '../actions/ui_actions.js';
import { createProject, updateProject } from '../actions/project_actions';
import { createReward } from '../actions/reward_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    errorModalActive: state.ui.errorModalActive,
    projectCreateUpdateModalActive: state.ui.projectCreateUpdateModalActive,
  };
};

const mapDispatchToProps = dispatch => ({
  createReward: (reward) => dispatch(createReward(reward)),
  updateProject: (project, id) => dispatch(updateProject(project, id)),
  createProject: (project) => dispatch(createProject(project)),
  toggleErrorModal: () => dispatch(toggleErrorModal()),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal));
