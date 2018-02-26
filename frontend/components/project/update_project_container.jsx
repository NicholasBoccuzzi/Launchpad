import { connect } from 'react-redux';
import UpdateProjectForm from './update_project';
import {
  updateProject
} from '../../actions/project_actions';
import {
  toggleUpdateProjectModal,
  switchTabs
} from '../../actions/ui_actions.js';
import {
  fetchProject,
} from '../../actions/project_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  let project;
  if (state.entities.projects) {
    project = state.entities.projects[ownProps.match.params.projectId];
  } else {
    project = null;
  }

  return {
    switchedTabs: state.ui.switchedTabs,
    location: ownProps.location,
    projectId: ownProps.match.params.projectId,
    currentUser: state.session.currentUser,
    projectCreateUpdateModalActive: state.ui.projectCreateUpdateModalActive,
    project: project
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
    toggleUpdateProjectModal: () => dispatch(toggleUpdateProjectModal()),
    updateProject: (project) => dispatch(updateProject(project)),
    switchTabs: () => dispatch(switchTabs())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateProjectForm));
