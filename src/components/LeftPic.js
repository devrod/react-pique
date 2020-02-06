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
                <h1 className="about__header">Aristippi Vetere</h1>
                <p className="about__sub">
                Tubulum fuisse, qua illum, cuius is condemnatus est rogatione, P. Nam si beatus umquam fuisset, beatam vitam usque ad illum a Cyro extructum rogum pertulisset. 
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
