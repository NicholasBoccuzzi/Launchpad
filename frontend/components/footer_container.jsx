import { connect } from 'react-redux';
import footer from './footer';
import {
  fetchProjects
} from '../actions/project_actions';
import {
  updatePage
} from '../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {

  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects: (category) => dispatch(fetchProjects(category)),
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(footer);
