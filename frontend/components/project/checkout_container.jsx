import { connect } from 'react-redux';
import CheckoutPage from './checkout';
import { updatePage } from '../../actions/ui_actions';
import { fetchProject, updateProject } from '../../actions/project_actions';
import { createBacking } from '../../actions/backing_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    location: ownProps.location.pathname,
    search: ownProps.location.search.split("&"),
    currentUser: state.session.currentUser,
    updatedPage: state.ui.updatedPage,
    project: state.entities.projects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePage: () => dispatch(updatePage()),
    fetchProject: (id) => dispatch(fetchProject(id)),
    updateProject: (project, id) => dispatch(updateProject(project, id)),
    createBacking: (backing) => dispatch(createBacking(backing))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(CheckoutPage);
