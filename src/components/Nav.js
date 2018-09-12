// import libraries
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'


class Nav extends Component {

  render() {
    return (
      <div className="box">
        <div className="container">
          <Link to='/' className="nav__logoTitle" onClick={() => this.props.updatePosition('home')}>
            <div className="iconPlaceholder"></div>
            <h4 className="nav__title" onClick={() => console.log(this.props.path)}>UPROAR</h4>
          </Link>
          <div className="nav__linkContainer" ref="navLinkContainer">
            <div className="nav__hamburger">
              <p className="nav__text" id="hamburger">&#9776;</p>
              <div className="nav__underline"></div>
            </div>
            {((!this.props.isMobile) || (this.props.menu && this.props.isMobile)) && (
            <div className={this.props.position === 'home' ? "nav__dropDown" : 'nav__dropDown__alt'}>
              <NavLink className="nav__link" exact to="/" activeClassName="nav__active" onClick={() => this.props.updatePosition('home')}>
                <p className="nav__text">Home</p>
                <div className="nav__underline"></div>
              </NavLink>
              <NavLink className="nav__link" to="/about" activeClassName="nav__active" onClick={() => this.props.updatePosition('about')}>
                <p className="nav__text">About</p>
                <div className="nav__underline"></div>
              </NavLink>
              <NavLink className="nav__link" to="/contact" activeClassName="nav__active" onClick={() => this.props.updatePosition('contact')}>
                <p className="nav__text">Contact</p>
                <div className="nav__underline"></div>
              </NavLink>
            </div>
          )}
          </div>
        </div>
        <div className="nav__darkBg__left">
        </div>
        <div className="nav__darkBg">
        </div>
      </div>
      )}}

export default Nav
