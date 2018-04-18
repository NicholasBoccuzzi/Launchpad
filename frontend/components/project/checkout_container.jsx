import { connect } from 'react-redux';
import CheckoutPage from './checkout';
import { updatePage } from '../../actions/ui_actions';
import { fetchProject } from '../../actions/project_actions';

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
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(CheckoutPage);
