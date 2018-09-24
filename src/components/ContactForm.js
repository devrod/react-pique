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
            <h1 className="contact__header">Contact</h1>
            <div className="contact__headerUnderline" />
            <form className="contact__form">
              <input
                type="text"
                placeholder="name..."
                className="contact__name"
                autoComplete="foo"
              />
              <input
                type="text"
                placeholder="email..."
                className="contact__email"
                autoComplete="foo"
              />
              <textarea
                type="text"
                rows="8"
                placeholder="message..."
                className="contact__message"
              />
              <button type="submit" className="contact__submit">
                Send
              </button>
            </form>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default ContactForm;
