import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = () => {
    return (
      <div>
        <h1> Heading 1 </h1> 
        <h2> Heading 2 </h2>
        <h3> Heading 3 </h3>
        <h4> Heading 4 </h4>
        <p> This is a paragraph </p>
        <a> This is a link </a>
        <button className='primary-btn'> Button 1 </button>
        <button className='secondary-btn'> Button 2 </button>
      </div>
    )
}
  
export default Home;