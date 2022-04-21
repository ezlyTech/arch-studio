import React from 'react';

import whiteArrow from '../../assets/icons/white-icon-arrow.svg'


const Title = () => {
    return (
      <section className='title section'>
          <div className='title__container'>
            <div className='title__heading'> 
                <h3>Feature</h3>
            </div>
            <div>
                <a href="/">
                    <button className='primary-btn'>
                        <p>See All</p>
                        <img className='white-arrow' src={whiteArrow} />
                    </button>
                </a>
            </div>
          </div>
          
      </section>
    )
  }
  
  export default Title;