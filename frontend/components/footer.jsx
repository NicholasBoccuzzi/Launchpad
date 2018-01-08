import React from 'react';
import { Link } from 'react-router-dom';


const footer = () => (
  <main className="footer-container">
    <div className="footer-block-top">
      <div className="footer-project-categories">
        <ul className="footer-project-categories-container">
          <li className="footer-project-li">
            <Link className="footer-nav-button" to="#">Arts</Link>
          </li>
          <li className="footer-project-li">
            <Link className="footer-nav-button" to="#">Comics & Illustration</Link>
          </li>
          <li className="footer-project-li">
            <Link className="footer-nav-button" to="#">Design & Tech</Link>
          </li>
          <li className="footer-project-li">
            <Link className="footer-nav-button" to="#">Film</Link>
          </li>
          <li className="footer-project-li">
            <Link className="footer-nav-button" to="#">Food & Craft</Link>
          </li>
          <li className="footer-project-li">
            <Link className="footer-nav-button" to="#">Games</Link>
          </li>
          <li className="footer-project-li">
            <Link className="footer-nav-button" to="#">Music</Link>
          </li>
          <li className="footer-project-li">
            <Link className="footer-nav-button" to="#">Publishing</Link>
            </li>
        </ul>
      </div>
    </div>
    <div className="footer-info-container">
      <ul className="footer-info-ul">
        <h3 className="footer-info-title">
          ABOUT
        </h3>
        <li><Link className="footer-info-button" to="#">About us</Link></li>
        <li><Link className="footer-info-button" to="#">Our charter</Link></li>
        <li><Link className="footer-info-button" to="#">Stats</Link></li>
        <li><Link className="footer-info-button" to="#">Press</Link></li>
        <li><Link className="footer-info-button" to="#">Jobs</Link></li>
      </ul>
      <ul className="footer-info-ul">
        <h3 className="footer-info-title">
          HELP
        </h3>
        <li><Link className="footer-info-button" to="#">Help Center</Link></li>
        <li><Link className="footer-info-button" to="#">Support</Link></li>
        <li><Link className="footer-info-button" to="#">Our Rules</Link></li>
        <li><Link className="footer-info-button" to="#">Creator Handbook</Link></li>
        <li><Link className="footer-info-button" to="#">Campus</Link></li>
      </ul>
      <ul className="footer-info-ul">
        <h3 className="footer-info-title">
          HELLO
        </h3>
        <li><Link className="footer-info-button" to="#">Launchpad Blog</Link></li>
        <li><Link className="footer-info-button" to="#">Engineering Blog</Link></li>
        <li><Link className="footer-info-button" to="#">Newsletters</Link></li>
      </ul>
      <ul className="footer-info-ul">
        <h3 className="footer-info-title">
          MORE FROM LAUNCHPAD
        </h3>
        <li><Link className="footer-info-button" to="#">App Academy</Link></li>
        <li><Link className="footer-info-button" to="#">Github</Link></li>
        <li><Link className="footer-info-button" to="#">LinkedIn</Link></li>
      </ul>
    </div>
    <div className="footer-trademark">
      <div className="footer-trademark-container">
        <h3 className="footer-trademark-title">L</h3><div className="footer-trademark-text">Launchpad, FAKE &copy; 2018</div>
      </div>
    </div>
    <div className="footer-bottom">
      <ul className="footer-terms-container">
        <li><Link className="footer-terms-button" to="#">Trust and Safety</Link></li>
        <li><Link className="footer-terms-button" to="#">Terms of Use</Link></li>
        <li><Link className="footer-terms-button" to="#">Privacy Policy</Link></li>
        <li><Link className="footer-terms-button" to="#">Cookie Policy</Link></li>
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
