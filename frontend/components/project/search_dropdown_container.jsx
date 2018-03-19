import { connect } from 'react-redux';
import SearchDropdown from './search_dropdown';
import {
  fetchProjects,
} from '../../actions/project_actions';
import {
  toggleLocationModal,
  updatePage
} from '../../actions/ui_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    location: ownProps.location,
    locationModal: state.ui.plLocationModalActive,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects: (category) => dispatch(fetchProjects(category)),
    updatePage: () => dispatch(updatePage()),
    toggleLocationModal: () => dispatch(toggleLocationModal()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SearchDropdown);
