import React from 'react';

import imageFederal from '../../assets/portfolio/desktop/image-federal.jpg'


const Cases = () => {
    return (
    
      <section className='section cases'>
          <div className='cases__container'>
            <img className='tile-box__image' src={ imageFederal } />
            <div className='tile-box__text'>
                <h4 className='tile-box__heading'>Project Del Sol</h4>
                <p className='tile-box__description'>View All Projects</p>
            </div>
          </div>

          <div className='cases__container'>
            <img className='tile-box__image' src={ imageFederal } />
            <div className='tile-box__text'>
                <h4 className='tile-box__heading'>Project Del Sol</h4>
                <p className='tile-box__description'>View All Projects</p>
            </div>
          </div>

          <div className='cases__container'>
            <img className='tile-box__image' src={ imageFederal } />
            <div className='tile-box__text'>
                <h4 className='tile-box__heading'>Project Del Sol</h4>
                <p className='tile-box__description'>View All Projects</p>
            </div>
          </div>
      </section>
    )
}
  
export default Cases;