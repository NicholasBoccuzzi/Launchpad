import { connect } from 'react-redux';
import projectList from './project_list';
import {
  fetchProjects,
  fetchUserProjects
} from '../../actions/project_actions';
import {
  updatePage
} from '../../actions/ui_actions';


const mapStateToProps = (state, ownProps) => {
  let userProjects;
  let projects;

  if (state.entities.projects && ownProps.location.pathname.includes("discover")) {
    projects = Object.values(state.entities.projects);
  } else if (state.entities.projects.userProjects) {
    userProjects = Object.values(state.entities.projects.userProjects);
  }

  return {
    location: ownProps.location,
    projects: projects,
    userProjects: userProjects
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects: (category) => dispatch(fetchProjects(category)),
    fetchUserProjects: (id) => dispatch(fetchUserProjects(id)),
    updatePage: () => dispatch(updatePage())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(projectList);
