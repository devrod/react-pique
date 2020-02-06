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
            <h1 className="title__header">LOREM IPSUM DOLOR</h1>
            <h6 className="title__sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </h6>
            <Link to="/quadam" className="title__btn">
            QUADAM
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
