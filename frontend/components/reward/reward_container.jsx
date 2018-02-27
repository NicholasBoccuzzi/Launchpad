import { connect } from 'react-redux';
import Reward from './reward';
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

export default connect(mapStateToProps, mapDispatchToProps)(Reward);
