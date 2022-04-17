import React from 'react';


import whiteLogo from '../../assets/white-logo.svg'
import whiteArrow from '../../assets/icons/white-icon-arrow.svg'


const Footer = () => {
    return (
      <footer className="section footer">
          <div className='footer__container-desktop'>

            <div className='footer-links'>
                <div className='footer__logo'>
                    <a><img src={ whiteLogo } /></a>
                </div>

                <div className='footer__navlinks'>
                    <ul className='navlinks__items'>
                        <li className='navlinks__item'><a>Portfolio</a></li>
                        <li className='navlinks__item'><a>About Us</a></li>
                        <li className='navlinks__item'><a>Contact</a></li>
                    </ul>
                </div>
            </div>

            <div className='footer__cta'>
                <a href="/">
                    <button className='primary-btn'>
                        <p>See Our Portfolio</p>
                        <img className='white-arrow' src={whiteArrow} />
                    </button>
                </a>
            </div>
          </div>




          <div className='footer__container-mobile'>

            <div className='footer__logo'>
                <a><img src={ whiteLogo } /></a>
            </div>

            <div className='footer-links'>
                <div className='footer__navlinks'>
                    <ul className='navlinks__items'>
                        <li className='navlinks__item'><a>Portfolio</a></li>
                        <li className='navlinks__item'><a>About Us</a></li>
                        <li className='navlinks__item'><a>Contact</a></li>
                    </ul>
                </div>

                <div className='footer__cta'>
                    <a href="/">
                        <button className='primary-btn'>
                            <p>See Our Portfolio</p>
                            <img className='white-arrow' src={whiteArrow} />
                        </button>
                    </a>
                </div>
            </div>

          </div>
      </footer>
    )
}
  
export default Footer;