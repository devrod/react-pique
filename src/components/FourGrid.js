// import libraries
import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

// import images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaCode, FaCloud } from 'react-icons/fa';

// import stylesheets
import '../stylesheets/fourGrid.css';


class FourGrid extends Component {
  render() {
    return (
      <div className="segment offer">
        <ScrollAnimation animateIn="fadeIn">
          <div className="innerSegment offer__innerSegment">
            <h1 className="header header-light">What We Offer</h1>
            <div className="header__underline header__underline__light"></div>
            <div className="offer__wrapper">

              <div className="offer__column">
                <div className="offer__box">
                  <div className="offer__icon__container">
                    <FontAwesomeIcon icon="pencil-ruler" className="offer__icon" />
                  </div>
                  <div className="offer__text">
                    <h4 className="offer__title">CUSTOM DESIGN</h4>
                    <p className="offer__subtitle">Make your site unique to stand out. We can build you a custom made site specifically tailored to your needs, and expressly designed to suit your brand.</p>
                  </div>
                </div>
                <div className="offer__box">
                  <div className="offer__icon__container">
                    <FaCode className="offer__icon"/>
                  </div>
                  <div className="offer__text">
                    <h4 className="offer__title">PERFORMANCE DEVELOPMENT</h4>
                    <p className="offer__subtitle">Optimise your site for speed. We build sites with the latest technologies to ensue your site is fast and responsive for clients. We also use best practice code to eliminate bugs now and in the future.</p>
                  </div>
                </div>
              </div>
              <div className="offer__column">
                <div className="offer__box clearBoth">
                  <div className="offer__icon__container">
                    <FontAwesomeIcon icon="mobile-alt" className="offer__icon" />
                  </div>
                  <div className="offer__text">
                    <h4 className="offer__title">MOBILE FRIENDLY</h4>
                    <p className="offer__subtitle">Reach your users effectively on mobile. We build our site with mobile users in mind. Our responive layouts make certain users can quickly and easily navigate your site.</p>
                  </div>
                </div>
                <div className="offer__box">
                  <div className="offer__icon__container">
                    <FaCloud className="offer__icon"/>
                  </div>
                  <div className="offer__text">
                    <h4 className="offer__title">WEB HOSTING</h4>
                    <p className="offer__subtitle">{"Deploy your site quickly and securaly with cloud hosting. Cloud hosting means you can easily scale as business grows and is more reliable as it isn't affected by local power disruptions."}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </ScrollAnimation>
      </div>
      )}}

export default FourGrid
