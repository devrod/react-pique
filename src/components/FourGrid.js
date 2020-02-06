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
            <h1 className="header">Sed Non Alienum</h1>
            <div className="header__underline"></div>
            <div className="offer__wrapper">

              <div className="offer__column">
                <div className="offer__box">
                  <div className="offer__icon__container">
                    <FontAwesomeIcon icon="pencil-ruler" className="offer__icon icon1" />
                  </div>
                  <div className="offer__text">
                    <h4 className="offer__title">PLUS SEMPER</h4>
                    <p className="offer__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil enim arbitror esse magna laude dignum, quod te praetermissurum credam aut mortis aut doloris metu.</p>
                  </div>
                </div>
                <div className="offer__box">
                  <div className="offer__icon__container">
                    <FaCode className="offer__icon  icon2"/>
                  </div>
                  <div className="offer__text">
                    <h4 className="offer__title">HUIC ANTEPONA</h4>
                    <p className="offer__subtitle">Quid interest, nisi quod ego res notas notis verbis appello, illi nomina nova quaerunt, quibus idem dicant? Quid interest, nisi quod ego res notas notis verbis.</p>
                  </div>
                </div>
              </div>
              <div className="offer__column">
                <div className="offer__box clearBoth">
                  <div className="offer__icon__container">
                    <FontAwesomeIcon icon="mobile-alt" className="offer__icon  icon3" />
                  </div>
                  <div className="offer__text">
                    <h4 className="offer__title">FAMA GLORIOSUM</h4>
                    <p className="offer__subtitle"> Quocirca intellegi necesse est in ipsis rebus, quae discuntur et cognoscuntur, invitamenta inesse, quibus ad discendum cognoscendumque moveamur.</p>
                  </div>
                </div>
                <div className="offer__box">
                  <div className="offer__icon__container">
                    <FaCloud className="offer__icon  icon4"/>
                  </div>
                  <div className="offer__text">
                    <h4 className="offer__title">ROGES ENIM</h4>
                    <p className="offer__subtitle">"Deploy your site quickly and securaly with cloud hosting. Cloud hosting means you can easily scale as business grows and is more reliable as it isn't affected by local power disruptions."</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </ScrollAnimation>
      </div>
      )}}

export default FourGrid
