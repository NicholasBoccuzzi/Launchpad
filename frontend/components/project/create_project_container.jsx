import { connect } from 'react-redux';
import CreateProjectForm from './create_project';
import {
  createProject
} from '../../actions/project_actions';
import { toggleCreateProjectModal, switchTabs } from '../../actions/ui_actions.js';


const mapStateToProps = (state, { location }) => {
  const curPath = location.pathname.slice(1);
  debugger
  return {
    location: curPath,
    currentUser: state.session.currentUser,
    projectCreateUpdateModalActive: state.ui.projectCreateUpdateModalActive,
    switchedTabs: state.ui.switchedTabs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleCreateProjectModal: () => dispatch(toggleCreateProjectModal()),
    switchTabs: () => dispatch(switchTabs()),
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectForm);
