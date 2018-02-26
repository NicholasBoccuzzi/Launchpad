import React from 'react';
import { Link } from 'react-router-dom';
import DropDown from './drop_down_container';

class CreateProjectNavbar extends React.Component {
  constructor (props) {
    super(props);
    this.isSession = this.isSession.bind(this);
    this.displayDrowDown = this.displayDrowDown.bind(this);
    this.activeBorder = false;
    this.profileIcon = document.getElementById("cp-icon");
  }

  activeBorder() {
    if (this.activeBorder) {

      this.activeBorder = false;
    } else {

      this.activeBorder = true;
    }
  }

  isSession () {

    if (this.props.currentUser) {
      return(
        <div id="cp-icon" className="cp-icon" onClick={this.activeBorder}>
          <div className="cp-nav-button cp-profile-button" onClick={this.props.toggleProfileDropDown}>
            <img className="profile-icon cp-icon" src={this.props.currentUser.image}>
            </img>
          </div>
        </div>
      );
    }
  }

  displayDrowDown () {
    if (this.props.profileDropDownActive) {
      return <DropDown location={this.props.location.pathname}/>;
    }
  }


  render () {

    return (
      <nav className="cp-main-nav">

          <div className="centered-cp-nav">
            <div className="centered-cp-nav-list">
              <div></div>
              <a href="#" className="title-link cp-centered-title">LAUNCHPAD</a>
              {this.isSession()}
            </div>
            {this.displayDrowDown()}
          </div>


      </nav>
    );
  }
}





// Explore in first button
// Launch a project in second project
// Search and <i className="fa fa-search" aria-hidden="true"></i> in third button


export default CreateProjectNavbar;
