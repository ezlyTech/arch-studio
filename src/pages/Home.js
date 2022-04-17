import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './general/header'
import Footer from './general/footer'
import Spacer from './components/spacer'


import blackArrow from '../assets/icons/icon-arrow.svg';
import whiteArrow from '../assets/icons/white-icon-arrow.svg';

const Home = () => {
    return (
    
      <div>
        <Header />

        <Footer />
      </div>
    )
}
  
export default Home;