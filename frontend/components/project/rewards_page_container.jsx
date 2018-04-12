import { connect } from 'react-redux';
import RewardsPage from './rewards_page';
import {
  fetchProject,
} from '../../actions/project_actions';


const mapStateToProps = (state, ownProps) => {
  let projectId = ownProps.location.pathname.split("/")[2];
  return {
    location: ownProps.location.pathname,
    currentUser: state.session.currentUser,
    projectId: projectId,
    project: state.entities.projects[projectId],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RewardsPage);
