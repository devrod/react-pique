// import images
import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

// import stylesheets
import '../stylesheets/quote.css';

class Cards extends Component {

  render() {
    return (
      <div className="segment quote__segment">
        <ScrollAnimation animateIn="fadeIn">
          <div className="innerSegment">
            <h1 className="header header-light">Modern Websites</h1>
            <div className="header__underline header__underline__light"></div>
            <p className="quote__sub">Too often websites lose track of the reasons they were build. Here at Uproar we build sites that provide users with seemless and effortless experiences so they keep coming back. We utilise the lastest technolgies and design principles to engage and excite the users.</p>
          </div>
        </ScrollAnimation>
      </div>
      )}}

export default Cards
