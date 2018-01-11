import { connect } from 'react-redux';
import UpdateProjectForm from './update_project';
import {
  updateProject
} from '../../actions/project_actions';
import { toggleCreateProjectModal } from '../../actions/ui_actions.js';
import {
  fetchProject,
} from '../../actions/project_actions';


const mapStateToProps = (state, ownProps) => {
  let project;
  if (!state.entities.propjects) {
    project = state.entities.projects[ownProps.match.params.projectId];
  } else {
    project = null;
  }

  return {
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
    toggleCreateProjectModal: () => dispatch(toggleCreateProjectModal()),
    updateProject: (project) => dispatch(updateProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProjectForm);
