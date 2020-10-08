import React from 'react';
import './header.styles.css';
export const Header = () => (
  <nav className="navbar navbar-expand-md navbar-light bg-light fix-top">
    <a className="navbar-brand" href="{}">
    <span class="material-icons">room_service</span>
    </a>
    
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse right" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="{}">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="{}">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="{}">
            Gallery
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="{}">
            Recipes
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="{}">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
