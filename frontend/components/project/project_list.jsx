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

    debugger
    
    if (this.props.projects.length > 0) {
      const mappedProjectList = this.props.projects.map((project) => {
        return (
        <li>
          <h3 className="project-title">{project.title}</h3>
          <h3 className="project-summary">{project.summary}</h3>
          <Link to={`project/${project.id}`}>Learn More</Link>
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
