// import images
import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

// import images
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEnvelope } from "react-icons/fa";

// import stylesheets
import "../stylesheets/TwoOptions.css";

class TwoOptions extends Component {
  render() {
    return (
      <div className="segment twoOptions">
        <ScrollAnimation animateIn="fadeIn">
          <h1 className="header">Get In Touch</h1>
          <div className="header__underline" />
          <div className="innerSegment twoOptions__innerSegment">
            <div className="twoOptions__left">
              <h3 className="twoOptions__innerHeader">Phone</h3>
              <div className="header__underline twoOptions__innerUnderline" />
              <p className="twoOptions__text">
                Give us a call today to begin the process of us building you a
                website.
              </p>
              <button className="twoOptions__btn">CALL US</button>
            </div>
            <div className="twoOptions__right">
              <h3 className="twoOptions__innerHeader">Email </h3>
              <div className="header__underline header__underline__light twoOptions__innerUnderline" />
              <p className="twoOptions__text">
                Email us to get any further information about our website
                building process.
              </p>
              <button className="twoOptions__btn">EMAIL US</button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default TwoOptions;

// <div className="contact__wrapper">
//   <div className="contact__box" onClick={() => this.props.showPopup('Phone')}>
//     <div className="contact__iconWrapper">
//       <div className="contact__iconCircle">
//         <FontAwesomeIcon icon="mobile-alt" className="contact__icon" />
//       </div>
//     </div>
//     <p className="contact__boxsub">027 6359 269</p>
//   </div>
//   <div className="contact__box" onClick={() => this.props.showPopup('Email')}>
//     <div className="contact__iconWrapper">
//       <div className="contact__iconCircle">
//         <FaEnvelope className="contact__icon"/>
//       </div>
//     </div>
//     <p className="contact__boxsub">UproarWebDesign@gmail.com</p>
//   </div>
// </div>
