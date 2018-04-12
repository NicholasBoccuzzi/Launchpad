import { connect } from 'react-redux';
import RewardsTab from './rewards_tab';
import { checkRewardCount, toggleRewardsModal } from '../../actions/ui_actions.js';


const mapStateToProps = (state) => {
  return {
    rewardCount: state.ui.rewardCount,
    loadedRewards: state.ui.loadedRewards,
    rewardsModalActive: state.ui.rewardsModalActive,
    reward: state.errors.reward,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkRewardCount: () => dispatch(checkRewardCount()),
    toggleRewardsModal: () => dispatch(toggleRewardsModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RewardsTab);
