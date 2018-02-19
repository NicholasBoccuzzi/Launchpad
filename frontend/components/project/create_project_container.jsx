import { connect } from 'react-redux';
import CreateProjectForm from './create_project';
import {
  createProject
} from '../../actions/project_actions';
import {
  toggleCreateProjectModal,
  toggleCategoryChoices,
  switchTabs
} from '../../actions/ui_actions.js';


const mapStateToProps = (state, { location }) => {
  const curPath = location.pathname.slice(1);
  return {
    location: curPath,
    currentUser: state.session.currentUser,
    projectCreateUpdateModalActive: state.ui.projectCreateUpdateModalActive,
    switchedTabs: state.ui.switchedTabs,
    categoryChoicesActive: state.ui.categoryChoicesActive,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleCreateProjectModal: () => dispatch(toggleCreateProjectModal()),
    toggleCategoryChoices: () => dispatch(toggleCategoryChoices()),
    switchTabs: () => dispatch(switchTabs()),
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectForm);
