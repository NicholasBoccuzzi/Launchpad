import { connect } from 'react-redux';
import {
  toggleLocationModal,
  toggleCategoryModal,
} from '../../actions/ui_actions';


const mapStateToProps = (state, ownProps) => {

  return {
    location: ownProps.location,
    categoryModal: state.ui.plCategoryModalActive,
    locationModal: state.ui.plLocationModalActive
  };
};
