import { connect } from 'react-redux';
import projectList from './project_list';
import {
  fetchProjects,
  fetchUserProjects
} from '../../actions/project_actions';


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
    fetchProjects: () => dispatch(fetchProjects()),
    fetchUserProjects: (id) => dispatch(fetchUserProjects(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(projectList);
