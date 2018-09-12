// import libraries
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';

// import stylesheets
import '../stylesheets/App.css';
import "../../node_modules/animate.css/animate.min.css";

// import components
import Nav  from './Nav'
import Landing  from './Landing'
import Cards  from './Cards'
import Quote  from './Quote'
import LeftPic  from './LeftPic'
import FourGrid  from './FourGrid'
import PicGrid  from './PicGrid'
import ThreeIcons  from './ThreeIcons'
import Footer  from './Footer'
import Contact  from './Contact'
import Popup  from './Popup'

// import images
import { FaWrench, FaCode, FaCloud, FaEnvelope } from 'react-icons/fa';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilRuler, faMobileAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
library.add(faPencilRuler, faLaptopCode, faMobileAlt, faMapMarkerAlt)



class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      menu: false,
      isMobile: false,
      position: 'home',
      popup: false
    }

    this.closeMenu = this.closeMenu.bind(this)
    this.updatePosition = this.updatePosition.bind(this)
    this.showPopup = this.showPopup.bind(this)
    this.closePopup = this.closePopup.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
    window.addEventListener('click', this.closeMenu);
    this.handleWindowResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
    window.addEventListener('click', this.closeMenu);
  }

  handleWindowResize = () => {
    this.setState({
      isMobile: window.innerWidth < 1050,
      menu: false
    });
  }

  updatePosition(position) {
    this.setState({
      position: position
    });
  }


  closeMenu(event) {
    if (event.target.id === 'hamburger') {
      this.setState(prevState => ({
        menu: !prevState.menu
      }))
    } else {
      this.setState({
        menu: false
      })
    }
    if (event.target.id === 'popupBackground' || event.target.id === 'popupCloseBtn') {
      this.setState({
        popup: false
      })
    }
  }

  showPopup(name) {
    this.setState({
      popup: name
    })
  }

  closePopup() {
    console.log('close')
    this.setState(prevState => {
      popup: false
    })
  }


  render() {
    return (
      <Router>
       <div>
       {/* all pages */}
        <Route path='/' render={props =>
           <div>
            <Nav  closeMenu={this.closeMenu}
                  isMobile={this.state.isMobile}
                  menu={this.state.menu}
                  updatePosition={this.updatePosition} position={this.state.position}/>

            { this.state.popup && (
              <Popup  popup={this.state.popup}
                      closePopup={this.closePopup} />
            )}

          </div>
        } />
        {/* Home page */}
        <Route exact path='/'  render={props =>
          <div>
            <Landing  menu={this.state.menu}
                      updatePosition={this.updatePosition}/>
            <Cards showPopup={this.showPopup}/>
            <Quote />
            <LeftPic />
            <FourGrid />
            <PicGrid />
            <ThreeIcons showPopup={this.showPopup}
                        closePopup={this.closePopup}/>
          </div>
        } />

        {/* About page */}
        <Route path='/about' exact render={props =>
          <div>
            <LeftPic />
            <FourGrid />
            <PicGrid />
            <ThreeIcons showPopup={this.showPopup}
                        closePopup={this.closePopup}/>
          </div>
        } />

        {/* Contact page */}
        <Route path='/contact' exact render={props =>
          <div>
            <Contact />
            <ThreeIcons showPopup={this.showPopup}
                        closePopup={this.closePopup}/>
          </div>
        } />

        {/* All pages */}
        <Route path='/' render={props =>
          <Footer />
        } />

       </div>
      </Router>

    );
  }
}

export default App;
