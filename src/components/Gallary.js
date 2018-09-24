// import libraries
import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Title from "react-vanilla-tilt";

// import images
import codesnippets from "../images/codesnippets.png";
import spellingAnalyser from "../images/spellingAnalyser.png";
import typingPracticer from "../images/typingPracticer.png";
import speedReader from "../images/speedReader.png";
import portfolio from "../images/portfolio.png";
import todo from "../images/todo.png";

// import stylesheets
import "../stylesheets/Gallary.css";

class Gallary extends Component {
  render() {
    return (
      <div className="segment portfolio">
        <ScrollAnimation animateIn="fadeIn">
          <div className="innerSegment gallary__innerSegment">
            <h1 className="header">Projects</h1>
            <div className="header__underline" />
            <div className="port__wrapper">
              <Title
                className="port__img__container"
                style={{ margin: 0, marginBottom: "30px", padding: 0 }}
              >
                <img src={codesnippets} className="port__img" alt="website" />
                <h4 className="port__img__label">Code Snippets</h4>
              </Title>
              <Title
                className="port__img__container"
                style={{ margin: 0, marginBottom: "30px", padding: 0 }}
              >
                <img
                  src={spellingAnalyser}
                  className="port__img"
                  alt="website"
                />
                <h4 className="port__img__label">Code Snippets</h4>
              </Title>
              <Title
                className="port__img__container"
                style={{ margin: 0, marginBottom: "30px", padding: 0 }}
              >
                <img
                  src={typingPracticer}
                  className="port__img"
                  alt="website"
                />
                <h4 className="port__img__label">Code Snippets</h4>
              </Title>

              <Title
                className="port__img__container"
                style={{ margin: 0, marginBottom: "30px", padding: 0 }}
              >
                <img src={speedReader} className="port__img" alt="website" />
                <h4 className="port__img__label">Code Snippets</h4>
              </Title>
              <Title
                className="port__img__container"
                style={{ margin: 0, marginBottom: "30px", padding: 0 }}
              >
                <img src={portfolio} className="port__img" alt="website" />
                <h4 className="port__img__label">Code Snippets</h4>
              </Title>
              <Title
                className="port__img__container"
                style={{ margin: 0, marginBottom: "30px", padding: 0 }}
              >
                <img src={todo} className="port__img" alt="website" />
                <h4 className="port__img__label">Code Snippets</h4>
              </Title>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Gallary;

// <div className="port__img__container">
//   <img src={codesnippets} className="port__img" alt="website">
//   </img>
//   <div className="port__img__cover">
//     <h4 className="port__img__label">Code Snippets</h4>
//   </div>
// </div>
// <div className="port__img__container">
//   <img src={spellingAnalyser} className="port__img" alt="website">
//   </img>
//   <div className="port__img__cover">
//     <h4 className="port__img__label">Spelling Analyser</h4>
//   </div>
// </div>
// <div className="port__img__container">
//   <img src={typingPracticer} className="port__img" alt="website">
//   </img>
//   <div className="port__img__cover">
//     <h4 className="port__img__label">Typing Practicer</h4>
//   </div>
// </div>
// <div className="port__img__container">
//   <img src={speedReader} className="port__img" alt="website">
//   </img>
//   <div className="port__img__cover">
//     <h4 className="port__img__label">Speed Reader</h4>
//   </div>
// </div>
// <div className="port__img__container">
//   <img src={portfolio} className="port__img" alt="website">
//   </img>
//   <div className="port__img__cover">
//     <h4 className="port__img__label">Portfolio Site</h4>
//   </div>
// </div>
// <div className="port__img__container">
//   <img src={todo} className="port__img" alt="website">
//   </img>
//   <div className="port__img__cover">
//     <h4 className="port__img__label">Todo App</h4>
//   </div>
// </div>
