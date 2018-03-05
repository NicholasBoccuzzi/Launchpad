import React from 'react';
import { Link } from 'react-router-dom';
import DropDown from './drop_down_container';
import Modal from './modal_container';

class Navbar extends React.Component {
  constructor () {
    super();
    this.isSession = this.isSession.bind(this);
    this.displayDrowDown = this.displayDrowDown.bind(this);
    this.displayExploreModal = this.displayExploreModal.bind(this);
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

  displayExploreModal () {
    if (this.props.exploreModalActive) {
      return <Modal explore={true}/>;
    }
  }

  toggleExploreModal () {

  }


// explore should end up at {"/discover"}

  render () {

    return (
      <div>
        <nav className="main-nav">
          <section className="top-nav-left">
            <div className="nav-button right" onClick={this.activateExploreModal}>Explore</div>
            <a className="nav-button" href={"#/startproject"}>Start a project</a>
          </section>
          <section className="top-nav-middle">
            <a href="#" className="title-link">LAUNCHPAD</a>
          </section>
          <section className="top-nav-right">
            {this.isSession()}
          </section>
        </nav>
        {this.displayDrowDown()}
        {this.displayExploreModal()}
      </div>
    );
  }
}





// Explore in first button
// Launch a project in second project
// Search and <i className="fa fa-search" aria-hidden="true"></i> in third button


export default Navbar;
