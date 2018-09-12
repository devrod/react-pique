// import images
import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

// import images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaEnvelope } from 'react-icons/fa';


class ThreeIcons extends Component {

  render() {
    return (
      <div className="segment contact">
      <ScrollAnimation animateIn="fadeIn">
        <h1 className="header header-light">Get In Touch</h1>
        <div className="header__underline header__underline__light"></div>
        <div className="innerSegment">
          <div className="contact__wrapper">
            <div className="contact__box" onClick={() => this.props.showPopup('Phone')}>
              <div className="contact__iconWrapper">
                <div className="contact__iconCircle">
                  <FontAwesomeIcon icon="mobile-alt" className="contact__icon" />
                </div>
              </div>
              <p className="contact__boxsub">027 6359 269</p>
            </div>
            <div className="contact__box" onClick={() => this.props.showPopup('Email')}>
              <div className="contact__iconWrapper">
                <div className="contact__iconCircle">
                  <FaEnvelope className="contact__icon"/>
                </div>
              </div>
              <p className="contact__boxsub">UproarWebDesign@gmail.com</p>
            </div>
            <div className="contact__box" onClick={() => this.props.showPopup('Location')}>
              <div className="contact__iconWrapper">
                <div className="contact__iconCircle" >
                  <FontAwesomeIcon icon="map-marker-alt" className="contact__icon" />
                </div>
              </div>
              <p className="contact__boxsub">Dunedin, New Zealand</p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
      )}}

export default ThreeIcons
