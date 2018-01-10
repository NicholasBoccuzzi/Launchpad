import React from 'react';
import { Link } from 'react-router-dom';
import ProjectListItem from './project_list_item';

class projectList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  renderSearchNav () {
    // to change when search is implemented
    return (
      <nav className="search-nav">

      </nav>
    );
  }

  projectList () {

    if (this.props.projects.length > 0) {
      const mappedProjectList = this.props.projects.map((project) => {
        return (
          <ProjectListItem key={project.id} project={project} />
        );
      });

    return (
      <ul className="project-index-container">
        <div className="num-projects-container">
          <div className="discover-header-container">
            <h1 className="discover-header">
              Explore <div className="discover-header green">
              {this.props.projects.length} projects
            </div>
          </h1>
          </div>
        </div>
        <ul className="flex-children">
          {mappedProjectList}
        </ul>
      </ul>
      );
    } else {
      return <h1> hi </h1>;
    }
  }


  render () {

    return (
    <div>
      {this.renderSearchNav()}
      {this.projectList()}
    </div>
  );
  }
}

export default projectList;
