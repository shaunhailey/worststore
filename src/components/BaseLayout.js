import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/index.css'
import '../styles/App.css'
import Home from './Home.js'
import About from './About.js'
import Contact from './Contact.js'
import Navbar from './Navbar.js'
import Burgers from './Burgers.js'
import Camera from './Camera.js'
import Insurance from './Insurance.js'
import VHSRental from './VHSRental.js'

// import Header from './Header.js'
import { Switch, Route, Link, NavLink } from 'react-router-dom'

const BaseLayout = () =>
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Burgers" component={Burgers} />
      <Route path="/Camera" component={Camera} />
      <Route path="/Insurance" component={Insurance} />
      <Route path="/VHSRental" component={VHSRental} />
    </Switch>
  </div>

export default BaseLayout
