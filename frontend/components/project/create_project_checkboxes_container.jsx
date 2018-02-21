import { connect } from 'react-redux';
import CreateProjectCheckboxes from './create_project_checkboxes';
import {
  updateAge, updateCard, updateBank
} from '../../actions/ui_actions.js';


const mapStateToProps = (state) => {
  return {
    updatedAge: state.ui.ageVerified,
    updatedCard: state.ui.cardVerified,
    updatedBank: state.ui.bankVerified
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAge: () => dispatch(updateAge()),
    updateCard: () => dispatch(updateCard()),
    updateBank: () => dispatch(updateBank())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectCheckboxes);
