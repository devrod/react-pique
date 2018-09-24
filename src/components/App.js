// import libraries
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

// import stylesheets
import "../stylesheets/app.css";
import "../../node_modules/animate.css/animate.min.css";

// import components
import Nav from "./Nav";
import Landing from "./Landing";
import Cards from "./Cards";
import Quote from "./Quote";
import LeftPic from "./LeftPic";
import RightPic from "./RightPic";
import FourGrid from "./FourGrid";
import Gallary from "./Gallary";
import TwoOptions from "./TwoOptions";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import Popup from "./Popup";

// import images
import ScreensSvg from "../images/screens.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPencilRuler,
  faMobileAlt,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
library.add(faPencilRuler, faLaptopCode, faMobileAlt, faMapMarkerAlt);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      isMobile: false,
      position: "home",
      popup: false,
      mobileMenu: false
    };

    this.closeMenu = this.closeMenu.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.showPopup = this.showPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.closeMobileMenu = this.closeMobileMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
    window.addEventListener("click", this.closeMenu);
    this.handleWindowResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.addEventListener("click", this.closeMenu);
  }

  handleWindowResize = () => {
    this.setState({
      isMobile: window.innerWidth < 1050,
      menu: false
    });
  };

  updatePosition(position) {
    this.setState({
      position: position
    });
  }

  closeMenu(event) {
    if (event.target.id === "hamburger") {
      this.setState(prevState => ({
        menu: !prevState.menu
      }));
    } else {
      this.setState({
        menu: false
      });
    }
    if (
      event.target.id === "popupBackground" ||
      event.target.id === "popupCloseBtn"
    ) {
      this.setState({
        popup: false
      });
    }
  }

  showPopup(name) {
    this.setState({
      popup: name
    });
  }

  closePopup() {
    console.log("close");
    this.setState({
      popup: false
    });
  }

  toggleMobileMenu() {
    console.log("toggleMobileMenu");
    this.setState(prevState => ({
      mobileMenu: !prevState.mobileMenu
    }));
  }

  closeMobileMenu(number) {
    this.setState({
      mobileMenu: false
    });
  }

  render() {
    return (
      <Router>
        <div>
          {/* all pages */}
          <Route
            path="/pique"
            render={props => (
              <div>
                <Nav
                  mobileMenu={this.state.mobileMenu}
                  toggleMobileMenu={this.toggleMobileMenu}
                  closeMobileMenu={this.closeMobileMenu}
                />

                {/* popup */}
                {this.state.popup && (
                  <Popup
                    popup={this.state.popup}
                    closePopup={this.closePopup}
                  />
                )}
              </div>
            )}
          />
          {/* Home page */}
          <Route
            exact
            path="/pique"
            render={props => (
              <div>
                <div className="pique">
                  <div className="container">
                    <div className="title__box">
                      <h1 className="title__header">PIQUE WEB DESIGN</h1>
                      <h6 className="title__sub">
                        Inovative, fast websites built specifically for your
                        needs.
                      </h6>
                      <Link to="/pique/contact" className="title__btn">
                        CONTACT
                      </Link>
                    </div>
                    <div className="landingImgContainer">
                      <img src={ScreensSvg} className="landingImg" />
                    </div>
                  </div>
                </div>

                <Cards showPopup={this.showPopup} />
                <Quote />
                <LeftPic />
                <RightPic />
                <Gallary />

                <TwoOptions
                  showPopup={this.showPopup}
                  closePopup={this.closePopup}
                />
              </div>
            )}
          />

          {/* About page */}
          <Route
            path="/pique/about"
            exact
            render={props => (
              <div>
                <LeftPic />
                <FourGrid />
                <Gallary />
                <TwoOptions
                  showPopup={this.showPopup}
                  closePopup={this.closePopup}
                />
              </div>
            )}
          />

          {/* Contact page */}
          <Route
            path="/pique/contact"
            exact
            render={props => (
              <div>
                <ContactForm />
                <TwoOptions
                  showPopup={this.showPopup}
                  closePopup={this.closePopup}
                />
              </div>
            )}
          />

          {/* All pages */}
          <Route
            path="/pique/"
            render={props => (
              <div>
                <Footer />
              </div>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
