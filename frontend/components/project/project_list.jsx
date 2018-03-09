import React from 'react';
import { Link } from 'react-router-dom';
import ProjectListItem from './project_list_item';

class projectList extends React.Component {
  constructor(props) {
    super(props);
    this.liveCount = 0;
    this.projectList = this.projectList.bind(this);
    this.displayProfilePageProjects = this.displayProfilePageProjects.bind(this);
  }

  componentDidMount() {
    let location = this.props.location.pathname.split("/");

    if (location[1] === ("discover")) {
      if (location[2] === "category") {
        this.props.fetchProjects(location[3]);
      } else {
        this.props.fetchProjects();
      }
    } else if (location[1] === ("user")) {
      this.props.fetchUserProjects(this.props.user.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userProjects){
      if (nextProps.userProjects[0].creator_id !== this.props.user.id) {
        this.props.fetchUserProjects(this.props.user.id);
      }
    }
  }

  displayProfilePageProjects() {
    if (
      this.props.location.pathname.includes("user")
      && this.props.currentTab === "Created"
      && this.props.userProjects
    ){

      let mappedProjectList = this.props.userProjects.map((project) => {
        return (
          <ProjectListItem key={project.id} project={project} />
        );
      });

      return (
        <div className="pro-project-list pro-projects-border">
          <div className="pro-projects-center flex-children">
            {mappedProjectList}
          </div>
        </div>
      );
    }
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
      this.liveCount = this.props.projects.length;
      const mappedProjectList = this.props.projects.map((project) => {
        if (!project.live) {
          this.liveCount -= 1;
        } else {
          return (
            <ProjectListItem key={project.id} project={project} />
          );
        }
      });

    return (
      <div className="pl-flex-center">
        <ul className="project-index-container">
          <div className="center">
            <div className="num-projects-container">
              <div className="discover-header-container">
                <h1 className="discover-header">
                  Explore <div className="discover-header green">
                  {this.liveCount} projects
                </div>
                </h1>
              </div>
              <ul className="flex-children">
                {mappedProjectList.reverse()}
              </ul>
            </div>
          </div>
        </ul>
      </div>
      );
    } else if (this.props.user) {
      const mappedProjectList = this.props.user.projects.map((project) => {
        return (
          <ProjectListItem key={project.id} project={project} />
        );
      });

    } else {
      return <h1> Loading Projects </h1>;
    }
  }


  render () {
    if (this.props.location.pathname.includes("discover")) {
      return (
        <div>
          {this.renderSearchNav()}
          {this.projectList()}
        </div>
      );
    } else if (this.props.location.pathname.includes("user")) {
      return (
        <div>
          {this.displayProfilePageProjects()}
        </div>
      );
    }
  }
}

export default projectList;
