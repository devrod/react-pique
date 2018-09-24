// import libraries
import React, { Component } from "react";
import { Link } from "react-router-dom";

// import images
import CompSVG from "../images/comp.svg";

// import stylesheets
import "../stylesheets/landing.css";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: false
    };
  }

  showLanding() {
    this.setState({
      fadeIn: true
    });
  }

  render() {
    return (
      <div>
        <div className="landing">
          <div className="landing__leftBg" />
          <div className="landing__leftBg__side" />
        </div>
        <div
          className={
            this.state.fadeIn
              ? "title__container fadeLandingIn"
              : "title__container"
          }
        >
          <div
            className={
              this.props.menu
                ? "container landing__container landingContainerFaded"
                : "container landing__container"
            }
          >
            <img
              src={CompSVG}
              className={
                this.state.fadeIn ? "landingImg fadeImgIn" : "landingImg"
              }
              alt="computer and peripherals"
              onLoad={this.showLanding.bind(this)}
            />
            <div className="title__box">
              <h1 className="title" onClick={() => console.log(this.props)}>
                PIQUE WEB DESIGN
              </h1>
              <h6 className="title__sub">
                Inovative, fast websites built specifically for your needs.
              </h6>
              <Link
                to="/pique/contact"
                className="title__btn"
                onClick={() => this.props.updatePosition("contact")}
              >
                Contact
              </Link>
              <Link
                to="/pique/about"
                className="title__btn__empty"
                onClick={() => this.props.updatePosition("about")}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
