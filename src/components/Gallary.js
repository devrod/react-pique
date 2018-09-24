// import libraries
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Tilt from "react-vanilla-tilt";

// import images
import codesnippets from "../images/codesnippets.png";
import spellingAnalyser from "../images/spellingAnalyser.png";
import typingPracticer from "../images/typingPracticer.png";
import speedReader from "../images/speedReader.png";
import portfolio from "../images/portfolio.png";
import todo from "../images/todo.png";

// import stylesheets
import "../stylesheets/Gallary.css";

const Gallary = () => {
  return (
    <div className="segment portfolio">
      <ScrollAnimation animateIn="fadeIn">
        <div className="innerSegment gallary__innerSegment">
          <h1 className="header">Projects</h1>
          <div className="header__underline" />
          <div className="port__wrapper">
            <Tilt
              className="port__img__container"
              style={{ margin: 0, marginBottom: "30px", padding: 0 }}
            >
              <img src={codesnippets} className="port__img" alt="website" />
              <h4 className="port__img__label">Code Snippets</h4>
            </Tilt>
            <Tilt
              className="port__img__container"
              style={{ margin: 0, marginBottom: "30px", padding: 0 }}
            >
              <img src={spellingAnalyser} className="port__img" alt="website" />
              <h4 className="port__img__label">Spelling Analyser</h4>
            </Tilt>
            <Tilt
              className="port__img__container"
              style={{ margin: 0, marginBottom: "30px", padding: 0 }}
            >
              <img src={typingPracticer} className="port__img" alt="website" />
              <h4 className="port__img__label">Typing Practicer</h4>
            </Tilt>

            <Tilt
              className="port__img__container"
              style={{ margin: 0, marginBottom: "30px", padding: 0 }}
            >
              <img src={speedReader} className="port__img" alt="website" />
              <h4 className="port__img__label">Speed Reader</h4>
            </Tilt>
            <Tilt
              className="port__img__container"
              style={{ margin: 0, marginBottom: "30px", padding: 0 }}
            >
              <img src={portfolio} className="port__img" alt="website" />
              <h4 className="port__img__label">Portfolio</h4>
            </Tilt>
            <Tilt
              className="port__img__container"
              style={{ margin: 0, marginBottom: "30px", padding: 0 }}
            >
              <img src={todo} className="port__img" alt="website" />
              <h4 className="port__img__label">Todo App</h4>
            </Tilt>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Gallary;
