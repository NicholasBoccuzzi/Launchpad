import React from 'react';
import { Link } from 'react-router-dom';

class ProjectListItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    return (
      <li className="list-item-container" key={this.props.project.id}>
        <img className="list-item-image" src={this.props.project.image}/>
        <h3 className="project-title">{this.props.project.title}</h3>
        <Link to={`project/${this.props.project.id}`}>
          <h3>{this.props.project.summary}</h3>
        </Link>
      </li>
    );
  }
}

export default ProjectListItem;
