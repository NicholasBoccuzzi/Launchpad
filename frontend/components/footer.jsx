import React from 'react';
import { Link } from 'react-router-dom';


const footer = () => (
  <main className="footer-container">
    <div className="footer-block-top">
      <div className="footer-project-categories">
        <ul className="footer-project-categories-container">
          <li className="footer-project-li">
            <Link className="footer-nav-button" to="/underconstruction">Arts</Link>
          </li>
          <li className="footer-project-li">
            <Link className="footer-nav-button" to="/underconstruction">Comics & Illustration</Link>
          </li>
          <li className="footer-project-li">
            <Link className="footer-nav-button" to="/underconstruction">Design & Tech</Link>
          </li>
          <li className="footer-project-li">
            <Link className="footer-nav-button" to="/underconstruction">Film</Link>
          </li>
          <li className="footer-project-li">
            <Link className="footer-nav-button" to="/underconstruction">Food & Craft</Link>
          </li>
          <li className="footer-project-li">
            <Link className="footer-nav-button" to="/underconstruction">Games</Link>
          </li>
          <li className="footer-project-li">
            <Link className="footer-nav-button" to="/underconstruction">Music</Link>
          </li>
          <li className="footer-project-li">
            <Link className="footer-nav-button" to="/underconstruction">Publishing</Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-info-container">
      <ul className="footer-info-ul">
        <h3 className="footer-info-title">
          ABOUT
        </h3>
        <li><a className="footer-info-button" href="http://www.NicholasBoccuzzi.com">About us</a></li>
        <li><a className="footer-info-button" href="http://www.NicholasBoccuzzi.com/#one">Our charter</a></li>
        <li><a className="footer-info-button" href="http://www.NicholasBoccuzzi.com/#three">Stats</a></li>
        <li><a className="footer-info-button" href="http://www.NicholasBoccuzzi.com/#two">Press</a></li>
        <li><a className="footer-info-button" href="https://www.soul-cycle.com/instructors/10199/nicky%20b./">Jobs</a></li>
      </ul>
      <ul className="footer-info-ul">
        <h3 className="footer-info-title">
          HELP
        </h3>
        <li><Link className="footer-info-button" to="/underconstruction">Help Center</Link></li>
        <li><Link className="footer-info-button" to="/underconstruction">Support</Link></li>
        <li><Link className="footer-info-button" to="/underconstruction">Our Rules</Link></li>
        <li><Link className="footer-info-button" to="/underconstruction">Creator Handbook</Link></li>
        <li><Link className="footer-info-button" to="/underconstruction">Campus</Link></li>
      </ul>
      <ul className="footer-info-ul">
        <h3 className="footer-info-title">
          HELLO
        </h3>
        <li><Link className="footer-info-button" to="/underconstruction">Launchpad Blog</Link></li>
        <li><Link className="footer-info-button" to="/underconstruction">Engineering Blog</Link></li>
        <li><Link className="footer-info-button" to="/underconstruction">Newsletters</Link></li>
      </ul>
      <ul className="footer-info-ul">
        <h3 className="footer-info-title">
          MORE FROM LAUNCHPAD
        </h3>
        <li><a className="footer-info-button" to="https://www.appacademy.io/">App Academy</a></li>
        <li><a className="footer-info-button" href="https://github.com/NicholasBoccuzzi/Launchpad">Github</a></li>
        <li><a className="footer-info-button" href="https://www.linkedin.com/in/nicholas-r-boccuzzi/">LinkedIn</a></li>
      </ul>
    </div>
    <div className="footer-trademark">
      <div className="footer-trademark-container">
        <h3 className="footer-trademark-title">L</h3><div className="footer-trademark-text">Launchpad, FAKE &copy; 2018</div>
      </div>
    </div>
    <div className="footer-bottom">
      <ul className="footer-terms-container">
        <li><Link className="footer-terms-button" to="/underconstruction">Trust and Safety</Link></li>
        <li><Link className="footer-terms-button" to="/underconstruction">Terms of Use</Link></li>
        <li><Link className="footer-terms-button" to="/underconstruction">Privacy Policy</Link></li>
        <li><Link className="footer-terms-button" to="/underconstruction">Cookie Policy</Link></li>
      </ul>
    </div>
  </main>
);


export default footer;

// <li><Link className="footer-nav-button" to="#">Arts</Link>&nbsp;&nbsp;</li>
// <li><Link className="footer-nav-button" to="#">Comics & Illustration</Link>&nbsp;&nbsp;</li>
// <li><Link className="footer-nav-button" to="#">Design & Tech</Link>&nbsp;&nbsp;</li>
// <li><Link className="footer-nav-button" to="#">Film</Link>&nbsp;&nbsp;</li>
// <li><Link className="footer-nav-button" to="#">Food & Craft</Link>&nbsp;&nbsp;</li>
// <li><Link className="footer-nav-button" to="#">Games</Link>&nbsp;&nbsp;</li>
// <li><Link className="footer-nav-button" to="#">Music</Link>&nbsp;&nbsp;</li>
// <li><Link className="footer-nav-button" to="#">Publishing</Link>&nbsp;&nbsp;</li>
