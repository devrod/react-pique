// import libraries
import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

// import images
import AboutUsSVG from "../images/aboutus.svg";

// import stylesheets
import "../stylesheets/leftPic.css";

class LeftPic extends Component {
  render() {
    return (
      <div className="segment about">
        <ScrollAnimation animateIn="fadeIn">
          <div className="innerSegment about__segment">
            <img
              src={AboutUsSVG}
              className="about__Img"
              alt="buildings, paintbrush, code, and lightbulb"
            />

            <div className="rightPanel">
              <div className="text__container">
                <h1 className="about__header">About Pique</h1>
                <p className="about__sub">
                  Founded in 2018 to provide clients with modern and intuitive
                  websites. We are based in Dunedin, New Zealand.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default LeftPic;
