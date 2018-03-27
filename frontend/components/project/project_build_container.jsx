import { connect } from 'react-redux';
import ProjectBuild from './project_build';
import {
  fetchProject,
} from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  let project;

  if (state.entities.projects !== {}) {
    project = state.entities.projects[ownProps.match.params.projectId];
  } else {
    project = null;
  }

  return {
    location: ownProps.location,
    projectId: ownProps.match.params.projectId,
    project: project,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ProjectBuild);
