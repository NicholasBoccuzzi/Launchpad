import React from 'react';
import { Link } from 'react-router-dom';

class projectList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  projectList () {

    if (this.props.projects.length > 0) {
      const mappedProjectList = this.props.projects.map((project) => {
        return (
        <li key={project.id}>
          <h3 className="project-title">{project.title}</h3>
          <Link to={`project/${project.id}`}><h3>{project.summary}</h3></Link>
        </li>
        );
      });

    return (
      <ul>
        {mappedProjectList}
      </ul>
      );
    } else {
      return <h1> hi </h1>;
    }
  }


  render () {    
    return (
    <div>
      {this.projectList()}
    </div>
  );
  }
}

export default projectList;
