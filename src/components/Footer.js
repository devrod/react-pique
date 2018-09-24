// import libraries
import React, { Component } from "react";

// import stylesheets
import "../stylesheets/footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="segment footer">
        <div className="innerSegment">
          <p className="footer__text">
            &copy; Copyright Pique Web Design 2018. All Rights Reserved.
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
