// import libraries
import React, { Component } from "react";
import { Link } from "react-router-dom";

// import images
import ScreensSvg from "../images/screens.svg";

// import stylesheets
import "../stylesheets/landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="pique">
        <div className="container">
          <div className="title__box">
            <h1 className="title__header">PIQUE WEB DESIGN</h1>
            <h6 className="title__sub">
              Inovative, fast websites built specifically for your needs.
            </h6>
            <Link to="/pique/contact" className="title__btn">
              CONTACT
            </Link>
          </div>
          <div className="landingImgContainer">
            <img
              src={ScreensSvg}
              className="landingImg"
              alt="computer, ipad and iphone"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
