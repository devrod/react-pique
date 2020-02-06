// import images
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

// import stylesheets
import "../stylesheets/quote.css";

const Quote = () => {
  return (
    <div className="segment quote__segment">
      <ScrollAnimation animateIn="fadeIn">
        <div className="innerSegment">
          <h1 className="header">Paulum Regem</h1>
          <div className="header__underline" />
          <p className="quote__sub">Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit? 
          A villa enim, credo, et: Si ibi te esse scissem, ad te ipse venissem. Paulum, cum regem Persem captum adduceret, eodem flumine invectio? Deque his rebus satis multa in nostris de re publica libris sunt dicta a Laelio.
          </p>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Quote;
