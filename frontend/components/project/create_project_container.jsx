import { connect } from 'react-redux';
import CreateProjectForm from './create_project';
import {
  createProject
} from '../../actions/project_actions';
import { toggleCreateProjectModal } from '../../actions/ui_actions.js';


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
    toggleCreateProjectModal: () => dispatch(toggleCreateProjectModal()),
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectForm);
