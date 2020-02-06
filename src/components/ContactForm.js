// import libraries
import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

// import stylesheets
import "../stylesheets/ContactForm.css";

class ContactForm extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="segment">
        <ScrollAnimation animateIn="fadeIn">
          <div className="innerSegment services__innerSegment">
            <h1 className="contact__header">Quadam</h1>
            <div className="contact__headerUnderline" />
            <form className="contact__form">
              <input
                type="text"
                placeholder="studuerit..."
                className="contact__name"
                autoComplete="foo"
              />
              <input
                type="text"
                placeholder="naturam..."
                className="contact__email"
                autoComplete="foo"
              />
              <textarea
                type="text"
                rows="8"
                placeholder="voluptatem..."
                className="contact__message"
              />
              <button type="submit" className="contact__submit">
              Statu
              </button>
            </form>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default ContactForm;
