import React from 'react';
import { Link } from 'react-router-dom';
import ProjectListItem from './project_list_item';

class projectList extends React.Component {
  constructor(props) {
    super(props);
    this.liveCount = 0;
    this.projectList = this.projectList.bind(this);
    this.displayProfilePageProjects = this.displayProfilePageProjects.bind(this);
    this.location = this.props.location.pathname.split("/");
    this.showMe = this.showMe.bind(this);
    this.sortedBy = this.sortedBy.bind(this);
    this.fromWhere = this.fromWhere.bind(this);
    this.toggleCategoryDropdown = this.toggleCategoryDropdown.bind(this);
    this.categoryDropDownActive = false;
    this.displayCategoryModal = this.displayCategoryModal.bind(this);
  }

  componentDidMount() {
    if (this.location[1] === ("discover")) {
      if (this.location[2] === "category") {
        this.props.fetchProjects(this.location[3]);
      } else {
        this.props.fetchProjects();
      }
    } else if (this.location[1] === ("user")) {
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

  toggleCategoryDropdown() {
    this.categoryDropDownActive = !this.categoryDropDownActive;
    this.props.updatePage();
  }

  displayCategoryModal() {
    if (this.categoryDropDownActive) {
      return (
        <div className="pl-sn-category-modal-container">
          Hello
        </div>
      );
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

  showMe() {
    if (this.location[2] === "category") {
      return (
        <div className="pl-sn-flex-row pl-sn-box">
          {this.location[3]}
          <i className="fas fa-times pl-caret"></i>
        </div>
      );
  } else if (this.location[2] === "advanced") {
      return (
        <div className="pl-sn-flex-row">
          <div>
            from &nbsp;
          </div>
          <div className="pl-sn-flex-row pl-sn-box">
            "Everywhere"
            <i className="fas fa-caret-down pl-caret"></i>
          </div>
        </div>
      );
    } else {
        return (
          <div className="pl-sn-flex-row pl-sn-box">
            <div onClick={this.toggleCategoryDropdown}>
              All &nbsp;
            </div>
            <i className="fas fa-caret-down pl-caret"></i>
          </div>
      );
    }
  }

  fromWhere() {
    if (this.location[2] === "advanced") {
      return (
        <div className="pl-sn-flex-row">
          <div>
            from &nbsp;
          </div>
          <div className="pl-sn-flex-row pl-sn-box">
            "Everywhere"
            <i className="fas fa-caret-down pl-caret"></i>
          </div>
        </div>
      );
    } else {
      return (
        <div className="pl-sn-flex-row">
          <div>
            on &nbsp;
          </div>
          <div className="pl-sn-flex-row pl-sn-box">
            Earth
            <i className="fas fa-caret-down pl-caret pl-mag"></i>
          </div>
        </div>
      );
    }
  }

  sortedBy () {
    if (this.location[2] === "advanced") {
      return (
        <div className="pl-sn-flex-row">
          <div>
            sorted by &nbsp;
          </div>
          <div className="pl-sn-flex-row pl-sn-box">
            Magic
            <i className="fas fa-caret-down pl-caret"></i>
          </div>
        </div>
      );
    } else {
      return (
        <div className="pl-sn-flex-row">
          <div>
             &nbsp; sorted by &nbsp;
          </div>
          <div className="pl-sn-flex-row pl-sn-box">
            Magic
            <i className="fas fa-caret-down pl-caret pl-mag"></i>
          </div>
        </div>
      );
    }
  }

  renderSearchNav () {
    // to change when search is implemented
    return (
      <nav className="pl-search-nav">
        <main className="pl-sn-container">
          <div className="pl-sn-centered">
            <main className="pl-sn-flex-row">
              <div>
                Show me &nbsp;
              </div>
              {this.showMe()}
              <div>
                &nbsp; projects &nbsp;
              </div>
              {this.fromWhere()}
              {this.sortedBy()}
            </main>
          </div>
        </main>
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
