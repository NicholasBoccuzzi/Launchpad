import { connect } from 'react-redux';
import RewardsPage from './rewards_page';
import {
  fetchProject,
} from '../../actions/project_actions';
import {
  updatePage
} from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  let projectId = ownProps.location.pathname.split("/")[2];
  return {
    location: ownProps.location.pathname,
    currentUser: state.session.currentUser,
    projectId: projectId,
    project: state.entities.projects[projectId],
    updatedPage: state.ui.updatedPage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
    updatePage: () => dispatch(updatePage())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RewardsPage);
