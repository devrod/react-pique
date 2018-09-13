// import libraries
import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom'

// import images
import PeopleSVG from '../images/people.svg';

// import stylesheets
import '../stylesheets/leftPic.css';

class LeftPic extends Component {
  render() {
    return (
      <div className="segment about">
        <ScrollAnimation animateIn="fadeIn">
          <div className="innerSegment about__segment">

            <img src={PeopleSVG} className="about__Img" alt="isometric of people"/>

            <div className="rightPanel">
              <div className="text__container">
                <h1 className="about__header">About Uproar</h1>
                <p className="about__sub">Founded in 2018 to provide client with modern and intuitive websites. We are based in Dunedin, New Zealand.</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      )}}

export default LeftPic
