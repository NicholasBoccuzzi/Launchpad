import { connect } from 'react-redux';
import ProjectCampaignRewardItem from './project_show_reward_item';
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCampaignRewardItem);
