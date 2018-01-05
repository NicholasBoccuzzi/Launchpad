import { connect } from 'react-redux';
import projectList from './project_list';
import {
  fetchProjects,
} from '../../actions/project_actions';


const mapStateToProps = state => {
  return {
    projects: Object.values(state.entities.projects)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(projectList);
