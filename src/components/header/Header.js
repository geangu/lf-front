import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

library.add(faCreditCard);

class Header extends Component {
  render() {
    return (<header>
      <div className="bg-dark collapse" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">Gerardo Andres Gutierrez Rodriguez</h4>
              <p className="text-muted">@geangu</p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li><a href="https://www.linkedin.com/in/geangu/" target="_blank" rel="noopener noreferrer" className="text-white">LinkedIn</a></li>
                <li><a href="https://www.github.com/geangu/" target="_blank" rel="noopener noreferrer" className="text-white">GitHub</a></li>
                <li><a href="mailto:geangu@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <a href="/" rel="noopener noreferrer" className="navbar-brand d-flex align-items-center">
            <FontAwesomeIcon icon="credit-card" /> <span className="menu-title">LendingFront</span>
          </a>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarHeader"
            aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>);
  }
}

export default Header;