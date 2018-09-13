// import libraries
import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

// import images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaWrench } from 'react-icons/fa';


class Contact extends Component {

  render() {
    return (
      <div className="segment">
        <ScrollAnimation animateIn="fadeIn">
          <div className="innerSegment services__innerSegment">
            <h1 className="contact__header">Contact</h1>
            <div className="contact__headerUnderline"></div>
            <form className="contact__form">
              <input type='text' placeholder='name...' className='contact__name' autoComplete="foo"/>
              <input type='text' placeholder='email...' className='contact__email' autoComplete="foo"/>
              <textarea type='text' rows="8" placeholder='message...' className='contact__message'/>
              <button type='submit' className='contact__submit'>Send</button>
            </form>

          </div>
        </ScrollAnimation>
      </div>
      )}}

export default Contact
