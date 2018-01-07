import React from 'react';
import { Link } from 'react-router-dom';


const footer = () => (
  <main className="footer-container">
    <div className="footer-block-top">
      <ul className="footer-project-categories">
        <li><Link className="footer-nav-button" to="#">Arts</Link></li>
        <li><Link className="footer-nav-button" to="#">Comics & Illustration</Link></li>
        <li><Link className="footer-nav-button" to="#">Design & Tech</Link></li>
        <li><Link className="footer-nav-button" to="#">Film</Link></li>
        <li><Link className="footer-nav-button" to="#">Food & Craft</Link></li>
        <li><Link className="footer-nav-button" to="#">Games</Link></li>
        <li><Link className="footer-nav-button" to="#">Music</Link></li>
        <li><Link className="footer-nav-button" to="#">Publishing</Link></li>
      </ul>
    </div>
    <div>

    </div>
    <div>

    </div>
  </main>
);


export default footer;
