import React from 'react';
import onClickOutside from 'react-onclickoutside';


class DropDown extends React.Component {
  constructor (props) {
    super(props);
  }


  handleClickOutside (e) {
    this.props.toggleProfileDropDown();
  }

  dropDownContent() {

    if (this.props.location === "/startproject") {
      return (
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
              </section>
              <section className="dd-settings dd-bold">
                <h1 className="dd-section-header">SETTINGS</h1>
              </section>
              <section className="dd-backed-projects dd-bold">
                <h1 className="dd-section-header">BACKED PROJECTS</h1>
              </section>
              <section className="dd-my-projects dd-bold">
                <h1 className="dd-section-header">MY PROJECTS</h1>
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
