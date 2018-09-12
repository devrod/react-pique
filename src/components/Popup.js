// import libraries
import React, { Component } from 'react';

class Popup extends Component {

  render() {
    return (
    <div className="popup" id="popupBackground">
      <div className="popup__inner">
        <p className="popup__close" id="popupCloseBtn" onClick={() => this.props.closePopup()}>X</p>
        <div className="popup__content">
          <h3 className="popup__header">{this.props.popup}</h3>
          <div className="header__underline"></div>
          {this.props.popup === 'Phone' && (
            <div>
              <h5 className="popup__subheader">Give us a call today to with any questions you may have about how we can help you.</h5>
              <h1 className="popup__main">0800 122 456</h1>
            </div>
          )}
          {this.props.popup === 'Email' && (
            <div>
              <h5 className="popup__subheader">Send us an email and we will get back to you as soon as posssible.</h5>
              <h1 className="popup__main__email">UproarWebDesign@gmail.com</h1>
            </div>
          )}
          {this.props.popup === 'Location' && (
            <div>
              <h5 className="popup__subheader">We are happy to arrange a meeting to discuss the potential benefits we can offer you or your business.</h5>
              <h1 className="popup__main__location">Dunedin, New Zealand</h1>
            </div>
          )}
          {this.props.popup == 'Website Design' && (
            <div>
              <h5 className="popup__subheader">Our priority when designing websites is to make them not only beatiful but  intuitive for the user.</h5>
              <h5 className="popup__subheader">Our website designs provide clear paths to facilitate optimal outcomes for our clients and there users.</h5>
            </div>
          )}
          {this.props.popup === 'Website Development' && (
            <div>
              <h5 className="popup__subheader">The Websites that we build are fast, secure, and responsive to the user. To achieve this we use the lastest technologies and protocols.</h5>
              <h5 className="popup__subheader">If you see funcationality on other sites that you like, we can add it your site.</h5>
            </div>
          )}
          {this.props.popup === 'Website Maintanence' && (
            <div>
              <h5 className="popup__subheader">Our websites are built in a clear and well-thoughtout way. This allows future maintanence to be simple and easy.</h5>
              <h5 className="popup__subheader">You can easily update your site in the future or if you would like us to continue looking after it, we are more than happy to.</h5>
            </div>
          )}
        </div>
      </div>
    </div>

  )}
}

export default Popup
