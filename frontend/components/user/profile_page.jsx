import React from 'react';
import { Link } from 'react-router-dom';
import ProjectList from '../project/project_list_container';

class profilePage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentTab: "Created"
    };

    this.refreshed = false;
    this.renderTopInfo = this.renderTopInfo.bind(this);
    this.editProfileButton = this.editProfileButton.bind(this);
    this.profileNumber = parseInt(this.props.location.pathname.split("/")[2]);
    this.renderProfileImage = this.renderProfileImage.bind(this);
    this.renderProfileName = this.renderProfileName.bind(this);
    this.renderUserSmallInfo = this.renderUserSmallInfo.bind(this);
    this.checkForLocation = this.checkForLocation.bind(this);
    this.checkJoinDate = this.checkJoinDate.bind(this);
    this.selectMonth = this.selectMonth.bind(this);
    this.currentTab = this.currentTab.bind(this);
    this.switchLocalTab = this.switchLocalTab.bind(this);
    this.tabs = this.tabs.bind(this);
    this.displayBio = this.displayBio.bind(this);
    this.displayWebsites = this.displayWebsites.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.profileNumber);
  }

  displayBio() {
    if (this.props.user && this.props.user.biography) {
      return (
        <div>
          {this.props.user.biography}
        </div>
      );
    } else {
      return (
        <main>
          <div className="pro-more-info">
            Let people know more about you.
          </div>

          <a href="#/">
            Add a biography
          </a>
        </main>
      );
    }
  }

  displayWebsites() {
    if (this.props.user && this.props.user.websites) {
      return (
        <div>
          {this.props.user.websites}
        </div>
      );
    } else {
      return (
        <main>
          <a href="#/">
            Add websites
          </a>
        </main>
      );
    }
  }

  currentTab () {
    if (this.state.currentTab === "Created" && this.props.user) {
      return (
        <ProjectList location={this.props.location} user={this.props.user} currentTab={this.state.currentTab}/>
      );
    } else {
      return (
          <main className="pro-small-border">
            <div className="pro-about-margins">
              <section className="pro-about-flexed">
                <div className="pro-about-text pro-about-header">Biography</div>
                <div className="pro-about-bio pro-about-bottom-margin">{this.displayBio()}</div>
              </section>
              <section className="pro-about-flexed pro-about-top-margin">
                <div className="pro-about-text pro-about-header">Websites</div>
                <div className="pro-about-bio">{this.displayWebsites()}</div>
              </section>
            </div>
          </main>
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    let correctNum = parseInt(nextProps.location.pathname.split("/")[2]);

    if (this.props.user) {
      if (correctNum !== this.props.user.id || this.refreshed === false) {
        this.refreshed = true;
        this.props.fetchUser(parseInt(correctNum));
      }
    } else if (this.props.loadCurrentUserInfo) {
      this.props.fetchUser(parseInt(correctNum));
    }
  }

  componentWillUnmount () {
    this.refreshed = false;
  }

  tabs () {
    return (
      <main className="pro-tabs-container">
        <div
          className="pro-tab"
          id="About"
          onClick={this.switchLocalTab}
          >
          <div>
            About
          </div>
        </div>
        <div
          className="pro-tab pro-selected-tab"
          id="Created"
          onClick={this.switchLocalTab}
          >
          <div>
            Created
          </div>
          <div className="pro-tab-num">
            {this.props.user.projects.length}
          </div>
        </div>
        <div
          className="pro-tab"
          id="Comments"
          onClick={this.switchLocalTab}
          >
          <div>
            Comments
          </div>
        </div>
      </main>
    );
  }

   switchLocalTab (e) {
     let selected = document.getElementsByClassName("pro-selected-tab");
     selected[0].classList.remove("pro-selected-tab");
     e.currentTarget.classList.add("pro-selected-tab");
     this.setState({currentTab: e.currentTarget.id});
     this.props.updatePage();
   }

  selectMonth(string) {
    if (string === "01") {
      return "Jan";
    } else if (string === "02") {
      return "Feb";
    } else if (string === "03") {
      return "Mar";
    } else if (string === "04") {
      return "Apr";
    } else if (string === "05") {
      return "May";
    } else if (string === "06") {
      return "Jun";
    } else if (string === "07") {
      return "Jul";
    } else if (string === "08") {
      return "Aug";
    } else if (string === "09") {
      return "Sep";
    } else if (string === "10") {
      return "Oct";
    } else if (string === "11") {
      return "Nov";
    } else if (string === "12") {
      return "Dec";
    }
  }


  editProfileButton () {
    if (
      parseInt(
        this.props.location.pathname.split("/")[2]) ===  this.props.currentUser.id
      ) {
      return (
        <div className="pro-edit-and-share">
          <a href="" className="pro-share-profile-link">
            Share your profile
          </a>

          <a href="" className="pro-edit-profile-link">
            Edit your profile
          </a>
        </div>
      );
    } else {
      return (
        <div className="pro-no-edit"></div>
      );
    }
  }


  renderProfileImage () {
    if (this.props.user) {
      return (
        <img className="pro-top-image" src={this.props.user.image}></img>
      );
    }
  }

  renderProfileName () {
    if (this.props.user) {
      return (
        this.props.user.username.charAt(0).toUpperCase() + this.props.user.username.slice(1)
      );
    }
  }

  renderUserSmallInfo() {
    if (this.props.user) {
      return (
        <div className="pro-user-small-info">
          Created {this.props.user.projects.length} projects &nbsp;·
          {this.checkForLocation()}
          {this.checkJoinDate()}
        </div>
      );
    }
  }

  checkJoinDate() {
    if (this.props.user) {
      let month = this.props.user.joindate[5] + this.props.user.joindate[6];
      return(
        <div>
          ·&nbsp; Joined {this.selectMonth(month)} {this.props.user.joindate.slice(0,4)}
        </div>
      );
    }

  }

  checkForLocation () {
    if (this.props.user) {
      if (this.props.user.location) {
        return (
          <div>
              &nbsp; {this.props.user.location} &nbsp;
          </div>
        );
      } else {
        return (
          <div>
            Click here to set your location
          </div>
        );
      }
    }
  }

  renderTopInfo () {

    return(
      <main className="pro-top-info-container">
        {this.editProfileButton()}
        <section className="pro-top-center">
          <div className="pro-top-image-container">
            {this.renderProfileImage()}
          </div>
          <div className="pro-top-name">
            {this.renderProfileName()}
          </div>
          <div className="pro-top-info">
            {this.renderUserSmallInfo()}
          </div>
        </section>
      </main>
    );
  }

  render () {

    if (this.props.user) {
      return (
        <div className="pro-content-container">
          <section className="pro-top-color">
            {this.renderTopInfo()}
          </section>
          <section>
            {this.tabs()}
          </section>
          <section>
            {this.currentTab()}
          </section>
        </div>
      );
    } else {
      return (
        <div className="pro-content-container">
          LOADING
          <i className="fas fa-circle-o-notch pro-loading"></i>
        </div>
      );
    }
  }
}

export default profilePage;
