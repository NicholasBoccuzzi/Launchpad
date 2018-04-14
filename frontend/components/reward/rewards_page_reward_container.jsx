import { connect } from 'react-redux';
import RewardsPageReward from './rewards_page_reward';
import { updatePage } from '../../actions/ui_actions.js';


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

export default connect(mapStateToProps, mapDispatchToProps)(RewardsPageReward);
