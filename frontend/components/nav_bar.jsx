import React from 'react';
import { Link } from 'react-router-dom';
import DropDown from './drop_down_container';

class Navbar extends React.Component {
  constructor () {
    super();
    this.isSession = this.isSession.bind(this);
    this.displayDrowDown = this.displayDrowDown.bind(this);
  }


  isSession () {

    if (this.props.currentUser) {
      return <button onClick={this.props.toggleProfileDropDown} to="#"
            className="nav-button main-profile-button"> 
          </button>;
      } else {
        return <Link className="nav-button" to="/login">login</Link>;
      }
  }

  displayDrowDown () {
    if (this.props.profileDropDownActive) {
      return <DropDown class={"current-user-dropdown"}/>;
    }
  }


  render () {

    return (
      <nav className="main-nav">
        <section className="top-nav-left">
          <button className="nav-button" to="#"></button>
          <a href="#" className="new-project nav-button"></a>
        </section>
        <section className="top-nav-middle">
          <a href="#" className="title-link">LAUNCHPAD</a>
        </section>
        {this.displayDrowDown()}
        <section className="top-nav-right">
          <button className="nav-button search-button">
          </button>
          {this.isSession()}
        </section>
      </nav>
    );
  }
}





// Explore in first button
// Launch a project in second project
// Search and <i className="fa fa-search" aria-hidden="true"></i> in third button


export default Navbar;
