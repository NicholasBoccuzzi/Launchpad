import { connect } from 'react-redux';
import UpdateProjectForm from './update_project';
import {
  updateProject
} from '../../actions/project_actions';
import { toggleCreateProjectModal } from '../../actions/ui_actions.js';
import {
  fetchProject,
} from '../../actions/project_actions';


const mapStateToProps = (state, { location }) => {
  const curPath = location.pathname.slice(1);
  return {
    location: curPath,
    currentUser: state.session.currentUser,
    createProjectModalActive: state.ui.createProjectModalActive,
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
