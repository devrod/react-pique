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
              <div className="services__boxTitle">WEBSITE DESIGN</div>
              <div className="services__boxsub">
                We design beautiful mordern websites that match your brand
                aesthetics.
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
              <div className="services__boxTitle">WEBSITE DEVELOPMENT</div>
              <div className="services__boxsub">
                We build fast websites with state of the art functionality and
                user experience.
              </div>
            </div>
            <div
              className="services__box"
              onClick={() => this.props.showPopup("Website Maintanence")}
            >
              <div className="services__iconCircle">
                <FaWrench className="services__icon services__colour3" />
              </div>
              <div className="services__boxTitle">WEBSITE MAINTANENCE</div>
              <div className="services__boxsub">
                We can main your website to keep it up to date in every aspect.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
