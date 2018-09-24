// import libraries
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPencilRuler,
  faMobileAlt,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
library.add(faPencilRuler, faLaptopCode, faMobileAlt, faMapMarkerAlt);

// App Component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      popup: false,
      mobileMenu: false
    };

    this.closePopup = this.closePopup.bind(this);
    this.showPopup = this.showPopup.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.closeMobileMenu = this.closeMobileMenu.bind(this);
  }

  // lifecylce methods
  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
    window.addEventListener("click", this.closePopup);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.addEventListener("click", this.closePopup);
  }

  // Popup Methods
  closePopup(event) {
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

  // Menu methods
  handleWindowResize = () => {
    this.setState({
      isMobile: window.innerWidth < 1050
    });
  };

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

  // Render
  render() {
    return (
      <Router>
        <div>
          {/* all pages */}
          <Route
            path="/react-pique"
            render={props => (
              <div>
                <Nav
                  mobileMenu={this.state.mobileMenu}
                  toggleMobileMenu={this.toggleMobileMenu}
                  closeMobileMenu={this.closeMobileMenu}
                />

                {/* popup */}
                {this.state.popup && <Popup popup={this.state.popup} />}
              </div>
            )}
          />

          {/* Home page */}
          <Route
            exact
            path="/react-pique"
            render={props => (
              <div>
                <Landing />
                <Cards showPopup={this.showPopup} />
                <Quote />
                <LeftPic />
                <RightPic />
                <Gallary />
                <TwoOptions showPopup={this.showPopup} />
              </div>
            )}
          />

          {/* About page */}
          <Route
            path="/react-pique/about"
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
            path="/react-pique/contact"
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
            path="/react-pique/"
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
