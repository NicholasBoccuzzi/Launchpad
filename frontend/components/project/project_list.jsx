import React from 'react';
import { Link } from 'react-router-dom';
import ProjectListItem from './project_list_item';
import FontAwesome from 'react-fontawesome';

class projectList extends React.Component {
  constructor(props) {
    super(props);
    this.liveCount = 0;
    this.projectList = this.projectList.bind(this);
    this.displayProfilePageProjects = this.displayProfilePageProjects.bind(this);
    this.location = this.props.location.pathname.split("/");

    if (this.location[3]) {
      this.activeCategory = this.location[3];
    }

    this.showMe = this.showMe.bind(this);
    this.sortedBy = this.sortedBy.bind(this);
    this.fromWhere = this.fromWhere.bind(this);
    this.activateCategoryDropdown = this.activateCategoryDropdown.bind(this);
    this.deactivateCategoryDropdown = this.deactivateCategoryDropdown.bind(this);
    this.categoryDropDownActive = false;
    this.displayCategoryModal = this.displayCategoryModal.bind(this);
    this.displayDeactivateModal = this.displayDeactivateModal.bind(this);
    this.activeCategoryClass = this.activeCategoryClass.bind(this);
    this.loadingText = this.loadingText.bind(this);
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

  loadingText () {
    return "fas fa-circle-o-notch fa-spin";
  }

  activateCategoryDropdown() {
    this.categoryDropDownActive = true;
    this.props.updatePage();
  }

  deactivateCategoryDropdown() {
    this.categoryDropDownActive = false;
    this.props.updatePage();
  }

  displayDeactivateModal() {
    if (this.categoryDropDownActive) {
      return (
        <div
          className="pl-sn-invis-background"
          onClick={this.deactivateCategoryDropdown}>
        </div>
      );
    }
  }

  activeCategoryClass (category) {
    if (this.location[2] === "category" && this.activeCategory === category) {
      return "pl-sn-modal-section-li pl-green";
    } else if (this.location[1] === "discover" && !this.location[2] && category === null) {
      return "pl-sn-modal-section-li pl-green";
    } else {
      return "pl-sn-modal-section-li";
    }
  }

  displayCategoryModal() {
    if (this.categoryDropDownActive) {
      return (
        <main className="pl-sn-category-modal">
          <div className="pl-sn-category-modal-container">
            <div className="pl-sn-modal-title">
              CATEGORIES
            </div>
            <div className="pl-sn-modal-sections">
              <section className="pl-section-whitespace">
              </section>
              <section className="pl-sn-modal-section">
                <a
                  href="#/discover"
                  className={this.activeCategoryClass(null)}
                  >
                  All Categories</a>
                <a
                  href="#/discover/category/Art"
                  className={this.activeCategoryClass("Art")}
                  >
                  Art</a>
                <a
                  href="#/discover/category/Comics"
                  className={this.activeCategoryClass("Comics")}
                  >
                  Comics</a>
                <a
                  href="#/discover/category/Crafts"
                  className={this.activeCategoryClass("Crafts")}
                  >
                  Crafts</a>
                <a
                  href="#/discover/category/Dance"
                  className={this.activeCategoryClass("Dance")}
                  >
                  Dance</a>
                <a
                  href="#/discover/category/Design"
                  className={this.activeCategoryClass("Design")}
                  >
                  Design</a>
                <a
                  href="#/discover/category/Fashion"
                  className={this.activeCategoryClass("Fashion")}
                  >
                  Fashion</a>
                <a
                  href="#/discover/category/Film+Video"
                  className={this.activeCategoryClass("Film+Video")}
                  >
                  Film & Video</a>
              </section>
              <section className="pl-section-whitespace">
              </section>
              <section className="pl-sn-modal-section">
                <a
                  href="#/discover/category/Food"
                  className={this.activeCategoryClass("Food")}
                  >
                  Food</a>
                <a
                  href="#/discover/category/Games"
                  className={this.activeCategoryClass("Games")}
                  >
                  Games</a>
                <a
                  href="#/discover/category/Journalism"
                  className={this.activeCategoryClass("Journalism")}
                  >
                  Journalism</a>
                <a
                  href="#/discover/category/Music"
                  className={this.activeCategoryClass("Music")}
                  >
                  Music</a>
                <a
                  href="#/discover/category/Photography"
                  className={this.activeCategoryClass("Photography")}
                  >
                  Photography</a>
                <a
                  href="#/discover/category/Publishing"
                  className={this.activeCategoryClass("Publishing")}
                  >
                  Publishing</a>
                <a
                  href="#/discover/category/Technology"
                  className={this.activeCategoryClass("Technology")}
                  >
                  Technology</a>
                <a
                  href="#/discover/category/Theater"
                  className={this.activeCategoryClass("Theater")}
                  >
                  Theater</a>
              </section>
            </div>
          </div>
        </main>
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

  classNameCheck (category) {
    if (this.categoryDropDownActive) {
      return "pl-sn-flex-row pl-sn-box pl-sn-active-box";
    } else {
      return "pl-sn-flex-row pl-sn-box";
    }
  }

  showMe() {
    if (this.location[2] === "category") {
      return (
        <div className="pl-sn-flex-row pl-sn-box" onClick={this.activateCategoryDropdown}>
          {this.location[3]}
            {this.displayCategoryModal()}
            <a href="#/discover" className="pl-fa-container">
              <i className="fas fa-times pl-caret"></i>
            </a>
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
          <div
            onClick={this.activateCategoryDropdown}
            className={this.classNameCheck()}>
            <div>
              All &nbsp;
            </div>
            <i className="fas fa-caret-down pl-caret"></i>
            {this.displayCategoryModal()}
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
        {this.displayDeactivateModal()}
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
      return (
        <main>
          <section className="loading-screen">
            <div className="loading-container">
              <div className="loading-rocket-fire">
                <div className="loading-rocket">
                  <i className="fas fa-rocket"
                    data-fa-transform="rotate-315"></i>
                </div>
                <div className="loading-fire">
                  <i className="fab fa-gripfire"
                    data-fa-transform="rotate-180"></i>
                </div>
              </div>
            </div>
          </section>
          <section className="loading-screen-whitespace">

          </section>
        </main>
      );
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
