import React from 'react';
import { Switch, Route } from 'react-router-dom';

import blackArrow from '../assets/icons/icon-arrow.svg';
import whiteArrow from '../assets/icons/white-icon-arrow.svg';

const Home = () => {
    return (
      <div>
        <h1> Heading 1 </h1> 
        <h2> Heading 2 </h2>
        <h3> Heading 3 </h3>
        <h4> Heading 4 </h4>
        <p> This is a paragraph </p>
        <a> This is a link </a>
        <a href="/">
          <button className='primary-btn'>
            <p>Button</p>
            <img className='white-arrow' src={whiteArrow} />
          </button>
        </a>
      </div>
    )
}
  
export default Home;