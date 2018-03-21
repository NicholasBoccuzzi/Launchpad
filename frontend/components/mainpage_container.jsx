import { connect } from 'react-redux';
import { clearSessionErrors} from '../actions/session_actions';
import {
  fetchProjects,
  fetchProject
} from '../actions/project_actions';
import {
  updatePage
} from '../actions/ui_actions';

import Main from './mainpage';

const mapStateToProps = state => {
  return {
    projects: Object.values(state.entities.projects)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
    updatePage: () => dispatch(updatePage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
