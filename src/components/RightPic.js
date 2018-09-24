// import libraries
import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

// import images
import UxSVG from '../images/ux.svg';

// import stylesheets
import '../stylesheets/rightPic.css';

class RightPic extends Component {
  render() {
    return (
      <div className="segment rightPic">
        <ScrollAnimation animateIn="fadeIn">
          <div className="innerSegment rightPic__segment">
            <img src={UxSVG} className="rightPic__Img" alt="buildings, paintbrush, code, and lightbulb"/>

            <div className="rightPic__leftPanel">
              <div className="rightPic__textContainer">
                <h1 className="rightPic__header">Increase User Experience</h1>
                <p className="rightPic__sub">Make your website come alive with features that keep your users coming back for more.</p>
              </div>

            </div>
          </div>
        </ScrollAnimation>
      </div>
      )}}

export default RightPic
