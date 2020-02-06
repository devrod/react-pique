// import libraries
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Tilt from "react-vanilla-tilt";

// import images
// Icons from Buddha Vectors by Vecteezy: https://www.vecteezy.com/free-vector/buddha
import icon1 from "../images/icon1.svg";
import icon2 from "../images/icon2.svg";
import icon3 from "../images/icon3.svg";
import icon4 from "../images/icon4.svg";
import icon5 from "../images/icon5.svg";
import icon6 from "../images/icon6.svg";

// import stylesheets
import "../stylesheets/Gallary.css";

const Gallary = () => {
  return (
    <div className="segment portfolio">
      <ScrollAnimation animateIn="fadeIn">
        <div className="innerSegment gallary__innerSegment">
          <h1 className="header">Introduci</h1>
          <div className="header__underline" />
          <div className="port__wrapper">
            <Tilt
              className="port__img__container"
              style={{ margin: 0, marginBottom: "30px", padding: 0 }}
            >
              <img src={icon1} className="port__img" alt="website" />
              <h4 className="port__img__label">Quasi Vero</h4>
            </Tilt>
            <Tilt
              className="port__img__container"
              style={{ margin: 0, marginBottom: "30px", padding: 0 }}
            >
              <img src={icon2} className="port__img" alt="website" />
              <h4 className="port__img__label">Inquit Perpetua</h4>
            </Tilt>
            <Tilt
              className="port__img__container"
              style={{ margin: 0, marginBottom: "30px", padding: 0 }}
            >
              <img src={icon3} className="port__img" alt="website" />
              <h4 className="port__img__label">Oratio Rhetorum</h4>
            </Tilt>

            <Tilt
              className="port__img__container"
              style={{ margin: 0, marginBottom: "30px", padding: 0 }}
            >
              <img src={icon4} className="port__img" alt="website" />
              <h4 className="port__img__label">Speed Reader</h4>
            </Tilt>
            <Tilt
              className="port__img__container"
              style={{ margin: 0, marginBottom: "30px", padding: 0 }}
            >
              <img src={icon5} className="port__img" alt="website" />
              <h4 className="port__img__label">Solum Non</h4>
            </Tilt>
            <Tilt
              className="port__img__container"
              style={{ margin: 0, marginBottom: "30px", padding: 0 }}
            >
              <img src={icon6} className="port__img" alt="website" />
              <h4 className="port__img__label">Eodem Nomine</h4>
            </Tilt>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Gallary;
