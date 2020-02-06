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
            &copy; In quibus doctissimi illi veteres inesse quiddam caeleste. 
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
