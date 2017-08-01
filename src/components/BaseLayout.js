import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-toggleable-md navbar-light" style={{backgroundColor:"#e3f2fd"}}>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink activeClassName="selected" to="/">BankShot</NavLink>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink activeClassName="selected" className="nav-link" to="/" >Home </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="selected" className="nav-link" to="/users" >Users</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="selected" className="nav-link" to="" >Disabled</NavLink>
              </li>
            </ul>

            </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
