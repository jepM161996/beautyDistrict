import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './Components/Nav'
import Carousel from './Components/ImageSlider'
import Welcome from './Components/Welcome'
import Products from './Components/Products'
import About from './Components/About'
import Owner from './Components/Owner'
import Team from './Components/TeamNextdapps'
import Social from './Components/Social'
import './App.css'

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Carousel />
        <Welcome />
        <Products />
        <About />
        <Owner />
        <Team />
        <Social />
      </div>
    </Router>
  )
}

export default App
