import React from 'react';
import { Link } from 'react-router-dom';


const footer = () => (
  <main className="footer-container">
    <div className="footer-block-top">
      <ul className="footer-project-categories">
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
    <div>

    </div>
    <div>

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
