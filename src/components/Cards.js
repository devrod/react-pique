// import libraries
import React, { Component } from "react";

// import images
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaWrench } from "react-icons/fa";

// import stylesheets
import "../stylesheets/cards.css";

class Cards extends Component {
  render() {
    return (
      <div className="segment services">
        <div className="innerSegment services__innerSegment">
          <div className="services__wrapper">
            <div
              className="services__box"
              onClick={() => this.props.showPopup("Website Design")}
            >
              <div className="services__iconCircle">
                <FontAwesomeIcon
                  icon="pencil-ruler"
                  className="services__icon services__colour1"
                />
              </div>
              <div className="services__boxTitle">QUIBUS DE VERITATE</div>
              <div className="services__boxsub">
              Quod quidem iam fit etiam in Academia. Numquam hoc ita defendit.
              </div>
            </div>
            <div
              className="services__box"
              onClick={() => this.props.showPopup("Website Development")}
            >
              <div className="services__iconCircle">
                <FontAwesomeIcon
                  icon="laptop-code"
                  className="services__icon services__colour2"
                />
              </div>
              <div className="services__boxTitle">IPSUM DOLOR</div>
              <div className="services__boxsub">
              Sed emolumenta communia esse dicuntur, recte autem facta et peccata non habentur communia.
              </div>
            </div>
            <div
              className="services__box"
              onClick={() => this.props.showPopup("Website Maintanence")}
            >
              <div className="services__iconCircle">
                <FaWrench className="services__icon services__colour3" />
              </div>
              <div className="services__boxTitle">MAGNO ALIQUO</div>
              <div className="services__boxsub">
              Nam, ut paulo ante docui, augendae voluptatis finis est doloris omnis amotio. 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
