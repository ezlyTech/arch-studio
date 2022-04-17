import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Header from './general/header'
import Footer from './general/footer'

// Scripts
import headerscript from '../js/general/header'


const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/header">
          <Header />
        </Route>

        <Route exact path="/footer">
          <Footer />
        </Route>

        <Route exact path="">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App;