import { connect } from 'react-redux';
import ProjectStory from './project_story';
import { updatePage } from '../../actions/ui_actions.js';


const mapStateToProps = (state) => {
  return {
    updatedPage: state.ui.updatedPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
        updatePage: () => dispatch(updatePage())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectStory);
