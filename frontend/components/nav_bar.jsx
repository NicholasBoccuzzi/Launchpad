import React from 'react';
import { Link } from 'react-router-dom';


const isSession = (currentUser, logout) => {

  if (currentUser) {
    return <button onClick={() => logout()} to="#" className="nav-button"> { currentUser.username } </button>;
  } else {
    return <Link className="nav-button" to="/login">login</Link>;
  }
};

// Explore in first button
// Launch a project in second project
// Search and <i className="fa fa-search" aria-hidden="true"></i> in third button
const Navbar = ({currentUser, logout}) => (
  <nav className="main-nav">
    <section className="top-nav-left">
      <button className="nav-button" to="#"></button>
      <a href="#" className="new-project nav-button"></a>
    </section>
    <section className="top-nav-middle">
      <a href="#" className="title-link">LAUNCHPAD</a>
    </section>
    <section className="top-nav-right">
      <button className="nav-button search-button">
      </button>
      {isSession(currentUser, logout)}
    </section>
  </nav>
);

export default Navbar;
