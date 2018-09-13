// import libraries
import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

// import images
import codesnippets from'../images/codesnippets.png';
import spellingAnalyser from'../images/spellingAnalyser.png';
import typingPracticer from'../images/typingPracticer.png';
import speedReader from'../images/speedReader.png';
import portfolio from'../images/portfolio.png';
import todo from'../images/todo.png';

// import stylesheets
import '../stylesheets/picGrid.css';


class PicGrid extends Component {

  render() {
    return (
      <div className="segment portfolio">
        <ScrollAnimation animateIn="fadeIn">
          <div className="innerSegment">
            <h1 className="header">Portfolio</h1>
            <div className="header__underline"></div>
             <div className="port__wrapper">
              <div className="port__img__container">
                <img src={codesnippets} className="port__img" alt="website">
                </img>
                <div className="port__img__cover">
                  <h4 className="port__img__label">Code Snippets</h4>
                </div>
              </div>
              <div className="port__img__container">
                <img src={spellingAnalyser} className="port__img" alt="website">
                </img>
                <div className="port__img__cover">
                  <h4 className="port__img__label">Spelling Analyser</h4>
                </div>
              </div>
              <div className="port__img__container">
                <img src={typingPracticer} className="port__img" alt="website">
                </img>
                <div className="port__img__cover">
                  <h4 className="port__img__label">Typing Practicer</h4>
                </div>
              </div>
              <div className="port__img__container">
                <img src={speedReader} className="port__img" alt="website">
                </img>
                <div className="port__img__cover">
                  <h4 className="port__img__label">Speed Reader</h4>
                </div>
              </div>
              <div className="port__img__container">
                <img src={portfolio} className="port__img" alt="website">
                </img>
                <div className="port__img__cover">
                  <h4 className="port__img__label">Portfolio Site</h4>
                </div>
              </div>
              <div className="port__img__container">
                <img src={todo} className="port__img" alt="website">
                </img>
                <div className="port__img__cover">
                  <h4 className="port__img__label">Todo App</h4>
                </div>
              </div>

            </div>
          </div>

        </ScrollAnimation>
      </div>
      )}}

export default PicGrid
