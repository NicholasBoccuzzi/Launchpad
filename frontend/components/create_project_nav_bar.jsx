import React from 'react';
import { Link } from 'react-router-dom';
import DropDown from './drop_down_container';

class CreateProjectNavbar extends React.Component {
  constructor () {
    super();
    this.isSession = this.isSession.bind(this);
    this.displayDrowDown = this.displayDrowDown.bind(this);
  }


  isSession () {

    if (this.props.currentUser) {
      return(
        <div>
          <button className="nav-button search-button-loggined-in">
          </button>
          <div className="nav-button main-profile-button" onClick={this.props.toggleProfileDropDown}>
            <img className="profile-icon" src={this.props.currentUser.image}>
            </img>
          </div>
        </div>
      );
      } else {
        return (
          <div>
            <button className="nav-button search-button-no-login">
            </button>
            <Link className="nav-button left" to="/login">Sign In</Link>
          </div>
        );
      }
  }

  displayDrowDown () {
    if (this.props.profileDropDownActive) {
      return <DropDown />;
    }
  }


  render () {

    return (
      <nav className="main-nav">
        <section className="top-nav-left">
        </section>
        <section className="top-nav-middle">
          <a href="#" className="title-link">LAUNCHPAD</a>
        </section>
        {this.displayDrowDown()}
        <section className="top-nav-right">
          {this.isSession()}
        </section>
      </nav>
    );
  }
}





// Explore in first button
// Launch a project in second project
// Search and <i className="fa fa-search" aria-hidden="true"></i> in third button


export default CreateProjectNavbar;
