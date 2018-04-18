import { connect } from 'react-redux';
import { updatePage } from '../../actions/project_actions';

const mapStateToProps = (state) => {
  return {
    updatedPage: state.ui.updatedPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePage: () => dispatch(updatePage()),
  };
};
