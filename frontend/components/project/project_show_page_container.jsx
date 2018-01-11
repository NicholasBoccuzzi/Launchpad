import { connect } from 'react-redux';
import ProjectShow from './project_show_page';
import {
  fetchProject,
} from '../../actions/project_actions';


const mapStateToProps = state => {
  const projectNum = location.hash.slice(11);
  return {
    currentUser: state.session.currentUser,
    project: state.entities.projects[projectNum],
    projectNum: projectNum
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);
