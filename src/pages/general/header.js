import React from 'react';


/* Assets */
import logo from '../../assets/logo.svg'
import hamburgerMenu from '../../assets/icons/icon-hamburger.svg'
import closeMenu from '../../assets/icons/icon-close.svg'



const Header = () => {
    return (
      <header className='section header'>
          <div className='header__container'>
            <div className='header__logo'>
                <a><img src={ logo } /></a>
            </div>

            <div className='header__navlinks'>
                <ul className='navlinks__items'>
                    <li className='navlinks__item'><a>Portfolio</a></li>
                    <li className='navlinks__item'><a>About Us</a></li>
                    <li className='navlinks__item'><a>Contact</a></li>
                </ul>
            </div>

            <div className='mobile__header-navlinks'>
                <div className='header-navlinks__wrapper'>
                    <ul className='navlinks__items'>
                        <li className='navlinks__item'><a>Portfolio</a></li>
                        <li className='navlinks__item'><a>About Us</a></li>
                        <li className='navlinks__item'><a>Contact</a></li>
                    </ul>
                </div>
            </div>

            <div className='header__button'>
                <a className='header__open-menu'><img src={ hamburgerMenu } /></a>
                <a className='header__close-menu'><img src={ closeMenu } /></a>
            </div>

          </div>
      </header> 
    )
}
  
export default Header;