import React from 'react';
import { Link } from 'react-router-dom';


const isSession = (currentUser) => {

  if (currentUser) {
    return <Link to="#" className="nav-button"> { currentUser.username } </Link>;
  } else {
    return <Link className="nav-button" to="/login">login</Link>;
  }
};

const Navbar = ({currentUser}) => (
  <nav className="main-nav">
    <section className="top-nav-left">
      <button className="nav-button" to="#">Explore</button>
      <a href="#" className="new-project">Launch a project</a>
    </section>
    <section className="top-nav-middle">
      <a href="#"className="title-link">LAUNCHPAD</a>
    </section>
    <section className="top-nav-right">
      <button className="nav-button">Search</button>
      {isSession(currentUser)}
    </section>
  </nav>
);

export default Navbar;
