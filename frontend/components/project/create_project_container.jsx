import { connect } from 'react-redux';
import CreateProjectForm from './create_project';
import {
  createProject
} from '../../actions/project_actions';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectForm);
