// import libraries
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// import stylesheets
import "../stylesheets/nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="container">
          <NavLink
            className="nav__logo"
            exact
            to="/"
            activeClassName="nav__active"
          >
            <div className="nav__logoImg" />
            <p className="nav__logoText">LOREM</p>
          </NavLink>
          <a className="nav__hamburger" onClick={this.props.toggleMobileMenu}>
            &#9776;
          </a>
          <div
            className={
              this.props.mobileMenu
                ? "nav__linkContainer"
                : "nav__linkContainer nav__hideMobileMenu"
            }
          >
            <p className="nav__closeBtn" onClick={this.props.toggleMobileMenu}>
              x
            </p>
            <div className="nav__linkContainerInner">
              <NavLink
                className="nav__link"
                exact
                to=""
                activeClassName="nav__active"
                onClick={() => this.props.closeMobileMenu()}
              >
                <p className="nav__text">Alter</p>
                <div className="nav__underline" />
              </NavLink>
              <NavLink
                className="nav__link"
                exact
                to="/legem"
                activeClassName="nav__active"
                onClick={() => this.props.closeMobileMenu()}
              >
                <p className="nav__text">Legem</p>
                <div className="nav__underline" />
              </NavLink>
              <NavLink
                className="nav__link"
                exact
                to="/quadam"
                activeClassName="nav__active"
                onClick={() => this.props.closeMobileMenu()}
              >
                <p className="nav__text">Quadam</p>
                <div className="nav__underline" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
