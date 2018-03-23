import { connect } from 'react-redux';
import RewardsTabItem from './rewards_tab_item';
import { toggleRewardsModal } from '../../actions/ui_actions.js';


const mapStateToProps = (state) => {
  return {
    rewardsModalActive: state.ui.rewardsModalActive
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleRewardsModal: () => dispatch(toggleRewardsModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RewardsTabItem);
