// import images
import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

// import stylesheets
import "../stylesheets/TwoOptions.css";

class TwoOptions extends Component {
  render() {
    return (
      <div className="segment twoOptions">
        <ScrollAnimation animateIn="fadeIn">
          <h1 className="header">Hoc Natura Vide</h1>
          <div className="header__underline" />
          <div className="innerSegment twoOptions__innerSegment">
            <div className="twoOptions__left">
              <h3 className="twoOptions__innerHeader">Salvam</h3>
              <div className="header__underline twoOptions__innerUnderline" />
              <p className="twoOptions__text">
              Nam et ille apud Trabeam voluptatem animi nimiam laetitiam dicit eandem.
              </p>
              <button
                className="twoOptions__btn"
                onClick={() => this.props.showPopup("Iucundi")}
              >
                IUCUNDI
              </button>
            </div>
            <div className="twoOptions__right">
              <h3 className="twoOptions__innerHeader">Nam et</h3>
              <div className="header__underline header__underline__light twoOptions__innerUnderline" />
              <p className="twoOptions__text">
              Mihi quidem Homerus huius modi quiddam vidisse videatur in iis, quae de Sirenum cantibu.
              </p>
              <button
                className="twoOptions__btn"
                onClick={() => this.props.showPopup("Recte")}
              >
                RECTE
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default TwoOptions;
