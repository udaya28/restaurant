import React from 'react';
import './header.styles.css';
export const Header = () => (
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary ">
    <div>
      <a className="navbar-brand " href="{#}">
        Restaurant
      </a>
      
    </div>
    <div>
    <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <a className="nav-link" href="{#}">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="{#}">
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="{#}">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="{#}">
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
