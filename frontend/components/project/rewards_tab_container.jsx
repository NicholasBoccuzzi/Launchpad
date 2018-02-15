import { connect } from 'react-redux';
import RewardsTab from './rewards_tab';
import { checkRewardCount } from '../../actions/ui_actions.js';


const mapStateToProps = (state) => {
  return {
    rewardCount: state.ui.rewardCount,
    loadedRewards: state.ui.loadedRewards
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkRewardCount: () => dispatch(checkRewardCount())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RewardsTab);
