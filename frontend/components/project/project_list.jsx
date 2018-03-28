import React from 'react';
import { Link } from 'react-router-dom';
import ProjectListItem from './project_list_item';
import SearchDropdown from './search_dropdown_container';
import SearchOrderModal from './search_order_dropdown';

class projectList extends React.Component {
  constructor(props) {
    super(props);
    this.noProjects = false;
    this.liveCount = 0;
    this.projectList = this.projectList.bind(this);
    this.displayProfilePageProjects = this.displayProfilePageProjects.bind(this);
    this.location = this.props.location.pathname.split("/");
    this.loaded = false;
    this.state = {
      loaded: false,
      cat: null,
      loc: null,
      ord: null,
      currentSearch: "",
    };

    if (this.props.location.search !== "") {
      this.search = this.props.location.search.split("&");
    }


    this.showMe = this.showMe.bind(this);
    this.sortedBy = this.sortedBy.bind(this);
    this.fromWhere = this.fromWhere.bind(this);
    this.displayCategoryModal = this.displayCategoryModal.bind(this);
    this.displayCurrentCountry = this.displayCurrentCountry.bind(this);
    this.displayCurrentOrder = this.displayCurrentOrder.bind(this);
    this.displayLocationModal = this.displayLocationModal.bind(this);
    this.displayLocationSearch = this.displayLocationSearch.bind(this);
    this.displayDeactivateModal = this.displayDeactivateModal.bind(this);
    this.activeCategoryClass = this.activeCategoryClass.bind(this);
    this.categoryClassCheck = this.categoryClassCheck.bind(this);
    this.locationClassCheck = this.locationClassCheck.bind(this);
    this.orderClassCheck = this.orderClassCheck.bind(this);
    this.numProjectsCheck = this.numProjectsCheck.bind(this);
    this.noProjectsResponse = this.noProjectsResponse.bind(this);
    this.modalLocations = this.modalLocations.bind(this);
    this.searchUrlFromLoc = this.searchUrlFromLoc.bind(this);
    this.searchUrlFromCat = this.searchUrlFromCat.bind(this);
    this.createSearchQuery = this.createSearchQuery.bind(this);
    this.locationClick = this.locationClick.bind(this);
    this.categoryClick = this.categoryClick.bind(this);
    this.disectSearch = this.disectSearch.bind(this);
    this.onOrFrom = this.onOrFrom.bind(this);
    this.locationLiClass = this.locationLiClass.bind(this);
    this.updateLocationInput = this.updateLocationInput.bind(this);
    this.displayOrderModal = this.displayOrderModal.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.location[1] === ("discover")) {
      if (this.search) {
        let cat;
        let loc;
        let ord;

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
          } else if (cur === "ord=") {
            ord = this.search[i].slice(4);
          }
        }

        let searchQuery = {category: cat, location: loc, order: ord};

        this.props.fetchProjects(searchQuery);
        this.setState({loaded: true});
      } else {
        this.props.fetchProjects();
        this.setState({loaded: true});
      }
    } else if (this.location[1] === ("user")) {
      this.props.fetchUserProjects(this.props.user.id);
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
    } else {
      this.search = null;
      this.setState({loc: null});
      this.setState({cat: null});
      this.setState({ord: null});
    }

    if (nextProps.projects) {
      this.loaded = true;
    }

    if (nextProps.projects && nextProps.projects.length === 0) {
      this.noProjects = true;
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

  searchUrlFromLoc(bool) {
    if (this.search) {
      if (this.search[0].includes("cat") && bool) {
        return `?${this.search[0]}&`;
      } else {
        return `?`;
      }
    } else {
      return `?`;
    }
  }

  searchUrlFromCat(category) {
    if (category === "All Categories") {
      if (this.state.loc) {
        return `?loc=${this.state.loc}`;
      } else {
        return "";
      }
    } else {
      if (this.state.loc) {
        return `?cat=${category}&loc=${this.state.loc}`;
      } else {
        return `?cat=${category}`;
      }
    }
  }

  locationClick(location) {
    let cat;
    if (this.search) {
      if (this.search[0].includes('cat')) {
        cat = this.search[0].slice(4);
      } else {
        cat = null;
      }
    } else {
      cat = null;
    }

    let searchQuery = {category: cat, location: location};
    this.props.toggleLocationModal();

    if (location || cat) {
      this.props.fetchProjects(searchQuery);
    } else {
      this.props.fetchProjects();
    }
  }

  categoryClick(category) {
    if (category === "All Categories") {
      category = null;
    }

    this.setState({cat: category});

    let loc;
    if (this.state.loc === "") {
      loc = null;
    } else {
      loc = this.state.loc;
    }


    let searchQuery = {category: category, location: loc};

    this.props.toggleCategoryModal();

    if (category || loc) {
      this.props.fetchProjects(searchQuery);
    } else {
      this.props.fetchProjects();
    }
  }

  currentCategory() {
    if (this.search) {
      if (this.search[0].includes("cat=")) {
        return this.search[0].slice(4);
      } else {
        return "All";
      }
    } else {
      return "All";
    }
  }

  disectSearch(nextProps) {
    this.search = nextProps.location.search.split("&");

    for (var i = 0; i < this.search.length; i++) {
      if (i === 0) {
        this.search[i] = this.search[i].slice(1);
      }

      if (this.search[i].includes("loc=")) {
        this.setState({loc: this.search[i].slice(4)});
      }

      if (this.search[i].includes("cat=")) {
        this.setState({cat: this.search[i].slice(4)});
      }

      if (this.search[i].includes("ord=")) {
        let oldOrd = this.state.ord;
        this.setState({ord: this.search[i].slice(4)});
        if (oldOrd !== this.search[i].slice(4)) {
          this.props.fetchProjects({category: this.state.cat, location: this.state.loc, order: this.state.ord});
        }
      }

      if (this.state.cat && !nextProps.location.search.includes("cat=")) {
        this.setState({cat: null});
      }

      if (this.state.loc && !nextProps.location.search.includes("loc=")) {
        this.setState({loc: null});
      }

      if (this.state.loc && !nextProps.location.search.includes("ord=")) {
        this.setState({ord: null});
      }
    }
  }


  displayCurrentCountry() {
    if (this.search) {
      let i = this.search.length - 1;

      if (this.search[i] && this.search[i].includes("loc=")) {
        return this.search[i].slice(4);
      } else {
        return "Earth";
      }
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
              key="Earth"
              className={this.locationLiClass(location)}
              href={`#${this.location.join("/")}${this.searchUrlFromLoc()}`}
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
              key="theUnitedStates"
              className={this.locationLiClass(location)}
              href={`#${this.location.join("/")}${this.searchUrlFromLoc(true)}loc=${location}`}
              onClick={() => {this.locationClick(location);}}>
              {display}
            </a>
          );
        } else if (location === "the United Kingdom"){
          location = "theUnitedKingdom";
          let display = "The United Kingdom";
          return (
            <a
              key="theUnitedKingdom"
              className={this.locationLiClass(location)}
              href={`#${this.location.join("/")}${this.searchUrlFromLoc(true)}loc=${location}`}
              onClick={() => {this.locationClick(location);}}>
              {display}
            </a>
          );
        } else {
          return (
            <a
              key={location}
              className={this.locationLiClass(location)}
              href={`#${this.location.join("/")}${this.searchUrlFromLoc(true)}loc=${location}`}
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
            key={location}
            className={this.locationLiClass(location, "left")}
            href={`#${this.location.join("/")}${this.searchUrlFromLoc(true)}loc=${location}`}
            onClick={() => {this.locationClick(location);}}>
            {display}
          </a>
        );
      } else {

        return (
          <a
            key={location}
            className={this.locationLiClass(location, "left")}
            href={`#${this.location.join("/")}${this.searchUrlFromLoc(true)}loc=${location}`}
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

  modalCategories (side) {
    if (side === "left") {
      let leftCategories = [
        "All Categories", "Art", "Comics", "Crafts", "Dance", "Design", "Fashion", "Film+Video",
      ];
      let result = leftCategories.map((category) => {

        return (
          <a key={category}
            id={category}
            href={`#${this.location.join("/")}${this.searchUrlFromCat(category)}`}
            className={this.activeCategoryClass(category)}
            onClick={() => {this.categoryClick(category);}}>
            {category}
          </a>
        );
      });

      return result;
    } else {
      let rightCategories = [
        "Food", "Games", "Journalism", "Music", "Photogrphy", "Publishing", "Tech", "Theater"
      ];
      let result = rightCategories.map((category) => {

        return (
          <a key={category}
            id={category}
            href={`#${this.location.join("/")}${this.searchUrlFromCat(category)}`}
            className={this.activeCategoryClass(category)}
            onClick={() => {this.categoryClick(category);}}>
            {category}
          </a>
        );
      });

      return result;
    }
  }

  noProjectsResponse () {
    if (this.noProjects) {
      return (
        <main>
          <div className="loading-no-projects">It doesn't appear that any projects fit this criteria yet!</div>
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
    } else if (this.props.searchOrderModalActive) {
      return (
        <div
          className="pl-sn-invis-background"
          onClick={this.props.toggleSearchOrderModal}>
        </div>
      );
    }
  }

  updateLocationInput(e) {
    this.setState({currentSearch: e.currentTarget.value});

    if (e.currentTarget.value.length >= 3 && !this.props.locationsSearchModalActive) {
      this.props.toggleLocationsSearchModal();
    } else if (e.currentTarget.value.length < 3 && this.props.locationsSearchModalActive){
      this.props.toggleLocationsSearchModal();
    }
  }

  displayLocationSearch() {
    if (this.props.locationsSearchModalActive) {
      return (
        <SearchDropdown
          location={this.props.location}
          currentSearch={this.state.currentSearch}
          locationClick={this.locationClick.bind(this)}
          searchUrlFromLoc={this.searchUrlFromLoc.bind(this)}
          />
      );
    }
  }

  displayOrderModal() {
    if (this.props.searchOrderModalActive) {
      let active;
      if (this.state.active) {
        active = this.state.active;
      } else {
        active = "";
      }

      return (
        <SearchOrderModal
          location={this.props.location}
          search={this.search}
          toggleSearchOrderModal={this.props.toggleSearchOrderModal}
          updatePage={this.props.updatePage}
          currentOrd={this.state.ord}/>
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
                placeholder="Search by country ..."
                value={this.state.currentSearch}
                onChange={this.updateLocationInput}>
              </input>
              <i className="fas fa-search pl-sn-search-icon"></i>
              {this.displayLocationSearch()}
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
    if (this.search && this.search[0].includes(category) && category !== null) {
      return "pl-sn-modal-section-li pl-green";
   } else if (this.search && !this.search[0].includes("cat") && category === "All Categories") {
      return "pl-sn-modal-section-li pl-green";
   } else if (!this.search && category === "All Categories") {
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
                {this.modalCategories("left")}
              </section>
              <section className="pl-section-whitespace">
              </section>
              <section className="pl-sn-modal-section">
                {this.modalCategories("right")}
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

  orderClassCheck() {
    if (this.props.searchOrderModalActive) {
      return "pl-sn-flex-row pl-sn-box pl-sn-active-box";
    } else {
      return "pl-sn-flex-row pl-sn-box";
    }
  }

  showMe() {
      return (
      <main className="pos-relative">
        <div className={this.categoryClassCheck()}>
          <div className="pl-category-button"
            onClick={this.props.toggleCategoryModal}>
          </div>
          <div >
            {this.currentCategory()}
          </div>
          <i className="fas fa-caret-down pl-caret pl-category-margin"></i>
        </div>
        {this.displayCategoryModal()}
      </main>
    );
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
      <main className="pos-relative pl-sn-flex-row">
        <div className="pl-sn-flex-row">
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

  displayCurrentOrder() {
    if (this.state.ord && this.state.ord !== "Magic") {
      return this.state.ord;
    } else {
      return "Magic";
    }
  }

  sortedBy () {

    return (
    <main className="pos-relative">
      <div className="pl-sn-flex-row" onClick={this.props.toggleSearchOrderModal}>
        <div className={this.orderClassCheck()}>
          {this.displayCurrentOrder()}
          <i className="fas fa-caret-down pl-caret pl-mag"></i>
        </div>
      </div>
      {this.displayOrderModal()}
    </main>
    );
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
              <div>
                {this.onOrFrom()} &nbsp;
              </div>
              {this.fromWhere()}
              <div>
                &nbsp; sorted by &nbsp;
              </div>
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
      if (this.loaded === false) {
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
      } else {
        return (
          <div>
            {this.renderSearchNav()}
            {this.projectList()}
          </div>
        );
      }
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
