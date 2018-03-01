import React from 'react';
import onClickOutside from 'react-onclickoutside';
import { Link } from 'react-router-dom';


class DropDown extends React.Component {
  constructor (props) {
    super(props);

    this.dropDownContent = this.dropDownContent.bind(this);
    this.displayMyProjects = this.displayMyProjects.bind(this);
    this.switchProjects = this.switchProjects.bind(this);
    this.loadUserInfo = this.loadUserInfo.bind(this);
  }

  componentDidMount() {
    let projectImages = this.props.fetchCurrentUserProjects(this.props.currentUser.id);
  }

  componentWillReceiveProps(nextProps) {
  }


  handleClickOutside (e) {
    this.props.toggleProfileDropDown();
  }

  loadUserInfo() {
    this.props.toggleProfileDropDown();
    // this.props.loadCurrentUserInfo();
  }

  switchProjects () {
    this.props.toggleProfileDropDown();
    this.props.updatePage();
  }

  displayMyStuff() {
    if (this.props.currentUser) {
      let url = `#/user/${this.props.currentUser.id}`;

      return (
        <ul className="dd-my-blank-container">
          <a href={url} className="dd-link small-text" onClick={this.loadUserInfo}>
            Profile
          </a>
        </ul>
      );
    }
  }

  displayMyProjects() {
    if (this.props.currentUser && this.props.currentUserProjects) {
      let projects = this.props.currentUser.projects.slice(
        this.props.currentUser.projects.length - 5,
        this.props.currentUser.projects.length
      );




      let result = [];

      for (var i =  projects.length - 1; i >= 0; i--) {
        let url = `#/projects/${this.props.currentUserProjects[i].id}/edit`;

        result.push (
          <div className="dd-projects-li-container">
            <a href={url} className="dd-projects-li-image-container" onClick={this.switchProjects}>
              <img className="dd-projects-li-image"
                src={`${this.props.currentUserProjects[i].image}`}></img>
            </a>

            <div className="dd-projects-li-title">
              <a href={url} className="dd-projects-li-image-container dd-link"
                onClick={this.switchProjects}>
                {`${projects[i].title}`}
              </a>
            </div>
          </div>
        );
      }

      return result;
    }
  }

  dropDownContent() {

    if (this.props.location.pathname === "/startproject") {
      return (
        <main className="start-project-modal-container">
          <div className="animated fadeIn start-project-modal">
            <div>
              <div className="cp-modal-options">
                Profile
              </div>
              <div className="cp-modal-options">
                My projects
              </div>
              <div className="cp-modal-options">
                Account
              </div>
              <div className="cp-modal-options"
                onClick={this.props.logout}>
                Logout
              </div>
            </div>
          </div>

        </main>
      );
    } else {
      if (this.props.currentUser) {
        return (
          <main className="current-user-dropdown">
            <div className="profile-dropdown-header">
              <h2 className="dd-welcome"> Welcome, {this.props.currentUser.username}! </h2>
            </div>
            <div className="dd-sections">
              <section className="dd-user-info dd-bold">
                <h1 className="dd-section-header">MY STUFF</h1>
                {this.displayMyStuff()}
              </section>
              <section className="dd-settings dd-bold">
                <h1 className="dd-section-header">SETTINGS</h1>
              </section>
              <section className="dd-backed-projects dd-bold">
                <h1 className="dd-section-header">BACKED PROJECTS</h1>
              </section>
              <section className="dd-my-projects dd-bold">
                <h1 className="dd-section-header">MY PROJECTS</h1>
                <div className="dd-my-blank-container">
                  {this.displayMyProjects()}
                <div className="dd-view-all">
                  <a href={`/user/${this.props.currentUser.id}/projects`} className="dd-view-all">
                    View all
                  </a>
                </div>
                </div>
              </section>
            </div>
            <div className="logout-dropdown-box">
              <button onClick={() => { return (
                  this.props.toggleProfileDropDown(),
                  this.props.logout()
                );
              }}
              className="logout-dropdown">Log out
            </button>

          </div>
        </main>
      );
      }
    }
  }


  render () {
    return (
      <div>
        {this.dropDownContent()}
      </div>
    );
  }
}

export default onClickOutside(DropDown);
