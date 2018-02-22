import { connect } from 'react-redux';
import CreateProjectForm from './create_project';
import {
  createProject
} from '../../actions/project_actions';
import {
  toggleCreateProjectModal,
  toggleCategoryChoices,
  toggleCountryChoices,
  switchTabs,
  updatePage,
  updateAge
} from '../../actions/ui_actions.js';


const mapStateToProps = (state, { location }) => {
  const curPath = location.pathname.slice(1);
  return {
    location: curPath,
    currentUser: state.session.currentUser,
    projectCreateUpdateModalActive: state.ui.projectCreateUpdateModalActive,
    switchedTabs: state.ui.switchedTabs,
    categoryChoicesActive: state.ui.categoryChoicesActive,
    countryChoicesActive: state.ui.countryChoicesActive,
    updatedPage: state.ui.updatedPage,
    updatedAge: state.ui.ageVerified,
    updatedCard: state.ui.cardVerified,
    updatedBank: state.ui.bankVerified
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleCreateProjectModal: () => dispatch(toggleCreateProjectModal()),
    toggleCategoryChoices: () => dispatch(toggleCategoryChoices()),
    toggleCountryChoices: () => dispatch(toggleCountryChoices()),
    switchTabs: () => dispatch(switchTabs()),
    createProject: (project) => dispatch(createProject(project)),
    updatePage: () => dispatch(updatePage()),
    updateAge: () => dispatch(updateAge())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectForm);
