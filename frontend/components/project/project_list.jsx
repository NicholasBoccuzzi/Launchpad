import React from 'react';
import { Link } from 'react-router-dom';
import ProjectListItem from './project_list_item';

class projectList extends React.Component {
  constructor(props) {
    super(props);
    this.noProjects = false;
    this.liveCount = 0;
    this.projectList = this.projectList.bind(this);
    this.displayProfilePageProjects = this.displayProfilePageProjects.bind(this);
    this.location = this.props.location.pathname.split("/");
    this.state = {
      loaded: false,
      cat: null,
      loc: null,
      ord: null
    };

    if (this.props.location.search !== "") {
      this.search = this.props.location.search.split("&");
    }


    this.showMe = this.showMe.bind(this);
    this.sortedBy = this.sortedBy.bind(this);
    this.fromWhere = this.fromWhere.bind(this);
    this.displayCategoryModal = this.displayCategoryModal.bind(this);
    this.displayCurrentCountry = this.displayCurrentCountry.bind(this);
    this.displayLocationModal = this.displayLocationModal.bind(this);
    this.displayDeactivateModal = this.displayDeactivateModal.bind(this);
    this.activeCategoryClass = this.activeCategoryClass.bind(this);
    this.urlCheck = this.urlCheck.bind(this);
    this.categoryClassCheck = this.categoryClassCheck.bind(this);
    this.locationClassCheck = this.locationClassCheck.bind(this);
    this.numProjectsCheck = this.numProjectsCheck.bind(this);
    this.noProjectsResponse = this.noProjectsResponse.bind(this);
    this.modalLocations = this.modalLocations.bind(this);
    this.checkForSearch = this.checkForSearch.bind(this);
    this.createSearchQuery = this.createSearchQuery.bind(this);
    this.locationClick = this.locationClick.bind(this);
    this.disectSearch = this.disectSearch.bind(this);
    this.onOrFrom = this.onOrFrom.bind(this);
    this.locationLiClass = this.locationLiClass.bind(this);
  }

  componentDidMount() {
    if (this.location[1] === ("discover")) {
      if (this.search) {
        let cat;
        let loc;

        for (var i = 0; i < this.search.length; i++) {
          if (i === 0) {
            this.search[i] = this.search[i].slice(1);
          }

          let cur = this.search[i].slice(0, 4);
          if (cur === "loc=") {
            loc = this.search[i].slice(4);
            this.setState({loc: loc});
          } else if (cur === "cat=") {
            cat = this.search[i].slice(4);
            this.setState({cat: cat});
          }
        }

        let searchQuery = {category: cat, location: loc};

        this.props.fetchProjects(searchQuery);
      } else {
        this.props.fetchProjects();
        this.setState({loaded: true});
      }
    } else if (this.location[1] === ("user")) {
      this.props.fetchUserProjects(this.props.user.id);
    }
  }

  createSearchQuery (nextProps) {
    this.search = nextProps.location.search.split("&");
    let cat;
    let loc;

    for (var i = 0; i < this.search.length; i++) {
      if (i === 0) {
        this.search[i] = this.search[i].slice(1);
      }

      let cur = this.search[i].slice(0, 4);
      if (cur === "loc=") {
        loc = this.search[i].slice(4);
      } else if (cur === "cat=") {
        cat = this.search[i].slice(4);
      }
    }

    let searchQuery = {category: cat, location: loc};
    return searchQuery;
  }

  checkForSearch() {
    if (this.search) {
      return this.search.join("&");
    } else {
      return "?";
    }
  }

  locationClick(location) {
    let cat;

    let searchQuery = {category: cat, location: location};

    if (location) {
      this.props.toggleLocationModal();
      this.props.fetchProjects(searchQuery);
    } else {
      this.props.toggleLocationModal();
      this.props.fetchProjects();
    }
  }

  disectSearch(nextProps) {
    let search = nextProps.location.search.split("&");

    for (var i = 0; i < search.length; i++) {
      if (i === 0) {
        search[i] = search[i].slice(1);
      }

      if (search[i].includes("loc=")) {
        this.setState({loc: search[i].slice(4)});
      } else if (search[i].includes("cat=")) {
        this.setState({cat: search[i].slice(4)});
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    this.noProjects = false;

    if (nextProps.userProjects){
      if (nextProps.userProjects[0].creator_id !== this.props.user.id) {
        this.props.fetchUserProjects(this.props.user.id);
      }
    }

    if (nextProps.location.search) {
      this.disectSearch(nextProps);
    }

    else {
      this.setState({loc: null});
      this.setState({cat: null});
    }

    if (nextProps.projects && nextProps.projects.length === 0) {
      this.noProjects = true;
    }
  }

  displayCurrentCountry() {
    if (this.state.loc) {
      return (this.state.loc);
    } else {
      return "Earth";
    }
  }

  locationLiClass (location, side) {
    if (location === "Earth") {
      location = null;
    }

    if (this.state.loc === location) {
      if (side) {
        return "pl-sn-loc-li-left pl-green";
      } else {
        return "pl-sn-loc-li-right pl-green";
      }
    } else {
      if (side) {
        return "pl-sn-loc-li-left";
      } else {
        return "pl-sn-loc-li-right";
      }
    }
  }

  modalLocations (area) {
    let locations = [
      "Australia",
      "Austria",
      "Belgium",
      "Canada",
      "Denmark",
      "France",
      "Germany",
      "Hong Kong",
      "Ireland",
      "Italy",
      "Japan",
      "Luxembourg",
      "Mexico",
      "New Zealand",
      "Norway",
      "Singapore",
      "Spain",
      "Sweden",
      "Switzerland",
      "the Netherlands",
      "the United Kingdom",
      "the United States"
    ];

    let broad = [
      "Earth",
      "the United States",
      "the United Kingdom",
      "Germany",
      "Japan"
    ];

    let close = [
      "the United States",
      "Canada",
      "Mexico",
    ];

    if (area === "broad") {

      let broadLocations = broad.map((location) => {

        if (location === "Earth") {
          return (
            <a
              className={this.locationLiClass(location)}
              href={`#${this.location.join("/")}`}
              onClick={() => {this.locationClick(location);}}
              >
              {location}
            </a>
          );
        } else if (location === "the United States"){
          location = "theUnitedStates";
          let display = "The United States";
          return (
            <a
              className={this.locationLiClass(location)}
              href={`#${this.location.join("/")}?loc=${location}`}
              onClick={() => {this.locationClick(location);}}>
              {display}
            </a>
          );
        } else if (location === "the United Kingdom"){
          location = "theUnitedKingdom";
          let display = "The United Kingdom";
          return (
            <a
              className={this.locationLiClass(location)}
              href={`#${this.location.join("/")}?loc=${location}`}
              onClick={() => {this.locationClick(location);}}>
              {display}
            </a>
          );
        } else {
          return (
            <a
              className={this.locationLiClass(location)}
              href={`#${this.location.join("/")}?loc=${location}`}
              onClick={() => {this.locationClick(location);}}>
              {location}
            </a>
          );
        }
      });

      return(
        <div className="pl-sn-loc-list">
          {broadLocations}
        </div>
      );
    } else if (area === "close") {

      let className;
      if (this.state.loc === location) {
        className = "pl-sn-loc-li-left pl-green";
      } else {
        "pl-sn-loc-li-left";
      }

      let closeLocations = close.map((location) => {


      if (location === "the United States"){
        location = "theUnitedStates";
        let display = "The United States";
        return (
          <a
            className={this.locationLiClass(location, "left")}
            href={`#${this.location.join("/")}?loc=${location}`}
            onClick={() => {this.locationClick(location);}}>
            {display}
          </a>
        );
      } else {

        return (
          <a
            className={this.locationLiClass(location, "left")}
            href={`#${this.location.join("/")}?loc=${location}`}
            onClick={() => {this.locationClick(location);}}>
            {location}
          </a>
        );
      }
    });


      return (
        <div className="pl-sn-loc-list">
          {closeLocations}
        </div>
      );
    }
  }

  noProjectsResponse () {
    if (this.noProjects) {
      return (
        <main>
          <div className="loading-no-projects">It doesn't appear that there are any projects in this category yet!</div>
          <br/> <br/>
          <a className="loading-no-projects no-proj-right" href="#/startproject">Click here to make one yourself!</a>
        </main>
      );
    }
  }

  numProjectsCheck(string) {
    if (this.props.projects.length > 2) {
      if (string) {
        return "flex-children";
      } else {
        return "project-index-container";
      }
    } else {
      if (string) {
        return "flex-children-low-proj";
      } else {
        return "project-index-container pl-hundred-width";
      }
    }
  }

  urlCheck (e) {
    if (this.activeCategory && this.activeCategory !== e.currentTarget.id) {
      this.props.fetchProjects(e.currentTarget.id);
    }

    this.props.updatePage();
  }

  displayDeactivateModal() {
    if (this.props.categoryModal) {
      return (
        <div
          className="pl-sn-invis-background"
          onClick={this.props.toggleCategoryModal}>
        </div>
      );
    } else if (this.props.locationModal) {
      return (
        <div
          className="pl-sn-invis-background"
          onClick={this.props.toggleLocationModal}>
        </div>
      );
    }
  }

  displayLocationModal() {
    if (this.props.locationModal) {
      return (
        <main className="pl-sn-location-modal-container">
          <section className="pl-sn-location-modal-top">
            <div className="pl-sn-loc-input-box">
              <input
                className="pl-sn-location-search"
                placeholder="Search by country ...">
              </input>
              <i className="fas fa-search pl-sn-search-icon"></i>
            </div>
            <div className="pl-sn-loc-flexed-row">
              <div>BROADER LOCATIONS</div>
              <div className="pl-sn-loc-header">NEARBY LOCATIONS</div>
            </div>
          </section>
          <section className="pl-sn-location-modal-bottom">
            <div className="pl-sn-loc-list">
              {this.modalLocations("broad")}
            </div>
            <div className="pl-sn-loc-list">
              {this.modalLocations("close")}
            </div>
          </section>
        </main>
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
    if (this.props.categoryModal) {
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
                  id="Art"
                  href="#/discover/category/Art"
                  className={this.activeCategoryClass("Art")}
                  onClick={this.urlCheck}
                  >
                  Art</a>
                <a
                  id="Comics"
                  href="#/discover/category/Comics"
                  className={this.activeCategoryClass("Comics")}
                  onClick={this.urlCheck}
                  >
                  Comics</a>
                <a
                  id="Crafts"
                  href="#/discover/category/Crafts"
                  className={this.activeCategoryClass("Crafts")}
                  onClick={this.urlCheck}
                  >
                  Crafts</a>
                <a
                  id="Dance"
                  href="#/discover/category/Dance"
                  className={this.activeCategoryClass("Dance")}
                  onClick={this.urlCheck}
                  >
                  Dance</a>
                <a
                  id="Design"
                  href="#/discover/category/Design"
                  className={this.activeCategoryClass("Design")}
                  onClick={this.urlCheck}
                  >
                  Design</a>
                <a
                  id="Fashion"
                  href="#/discover/category/Fashion"
                  className={this.activeCategoryClass("Fashion")}
                  onClick={this.urlCheck}
                  >
                  Fashion</a>
                <a
                  id="Film+Video"
                  href="#/discover/category/Film+Video"
                  className={this.activeCategoryClass("Film+Video")}
                  onClick={this.urlCheck}
                  >
                  Film & Video</a>
              </section>
              <section className="pl-section-whitespace">
              </section>
              <section className="pl-sn-modal-section">
                <a
                  id="Food"
                  href="#/discover/category/Food"
                  className={this.activeCategoryClass("Food")}
                  onClick={this.urlCheck}
                  >
                  Food</a>
                <a
                  id="Games"
                  href="#/discover/category/Games"
                  className={this.activeCategoryClass("Games")}
                  onClick={this.urlCheck}
                  >
                  Games</a>
                <a
                  id="Journalism"
                  href="#/discover/category/Journalism"
                  className={this.activeCategoryClass("Journalism")}
                  onClick={this.urlCheck}
                  >
                  Journalism</a>
                <a
                  id="Music"
                  href="#/discover/category/Music"
                  className={this.activeCategoryClass("Music")}
                  onClick={this.urlCheck}
                  >
                  Music</a>
                <a
                  id="Photography"
                  href="#/discover/category/Photography"
                  className={this.activeCategoryClass("Photography")}
                  onClick={this.urlCheck}
                  >
                  Photography</a>
                <a
                  id="Publishing"
                  href="#/discover/category/Publishing"
                  className={this.activeCategoryClass("Publishing")}
                  onClick={this.urlCheck}
                  >
                  Publishing</a>
                <a
                  id="Tech"
                  href="#/discover/category/Tech"
                  className={this.activeCategoryClass("Technology")}
                  onClick={this.urlCheck}
                  >
                  Technology</a>
                <a
                  id="Theater"
                  href="#/discover/category/Theater"
                  className={this.activeCategoryClass("Theater")}
                  onClick={this.urlCheck}
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

  categoryClassCheck (category) {
    if (this.props.categoryModal) {
      return "pl-sn-flex-row pl-sn-box pl-sn-active-box";
    } else {
      return "pl-sn-flex-row pl-sn-box";
    }
  }

  locationClassCheck () {
    if (this.props.locationModal) {
      return "pl-sn-flex-row pl-sn-box pl-sn-active-box";
    } else {
      return "pl-sn-flex-row pl-sn-box";
    }
  }

  showMe() {
    if (this.location[2] === "category") {
      return (
        <div className="pl-sn-flex-row pl-sn-box" onClick={this.props.toggleCategoryModal}>
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
            onClick={this.props.toggleCategoryModal}
            className={this.categoryClassCheck()}>
            <div>
              All &nbsp;
            </div>
            <i className="fas fa-caret-down pl-caret"></i>
            {this.displayCategoryModal()}
          </div>
      );
    }
  }

  onOrFrom() {
    if (this.state.loc) {
      return "from";
    } else {
      return "on";
    }
  }

  fromWhere() {
    return (
      <main className="pos-relative">
        <div className="pl-sn-flex-row">
          <div>
            {this.onOrFrom()} &nbsp;
          </div>
          <div className={this.locationClassCheck()}
            onClick={this.props.toggleLocationModal}>
            {this.displayCurrentCountry()}
            <i className="fas fa-caret-down pl-caret pl-mag"></i>
          </div>
        </div>
        {this.displayLocationModal()}
      </main>
    );
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
      let projectHeader;

      if (this.liveCount > 1) {
        projectHeader = "projects";
      } else {
        projectHeader = "project";
      }
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
        <ul className={this.numProjectsCheck()}>
          <div className="center">
            <div className="num-projects-container">
              <div className="discover-header-container">
                <h1 className="discover-header">
                  Explore <div className="discover-header green">
                  {this.liveCount} {projectHeader}
                </div>
                </h1>
              </div>
              <ul className={this.numProjectsCheck("flex")}>
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
            {this.noProjectsResponse()}
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
