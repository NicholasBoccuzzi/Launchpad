import { connect } from 'react-redux';
import RewardsTabItem from './rewards_tab_item';
import { toggleRewardsModal, updatePage } from '../../actions/ui_actions.js';


const mapStateToProps = (state) => {
  return {
    rewardsModalActive: state.ui.rewardsModalActive
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleRewardsModal: () => dispatch(toggleRewardsModal()),
    updatePage: () => dispatch(updatePage())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RewardsTabItem);
