import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Link, NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div className="about">
      <h1>About Worste MultiMarket Extravaganza</h1>
      <p>
        "One of these days the sun's gonna come up and burn a hole clean through the planet like a giant electrical
        x-ray."
      </p>
      <nav>
        <NavLink activeClassName="selected" className="nav-link" exact to="/">
          Home
        </NavLink>
        <NavLink activeClassName="selected" className="nav-link" to="/About">
          About
        </NavLink>
        <NavLink activeClassName="selected" className="nav-link" to="/Contact">
          Contact
        </NavLink>
        <NavLink activeClassName="selected" className="nav-link" to="/Burgers">
          Burgers
        </NavLink>
        <NavLink activeClassName="selected" className="nav-link" to="/Camera">
          Camera
        </NavLink>
        <NavLink activeClassName="selected" className="nav-link" to="/Insurance">
          Insurance
        </NavLink>
        <NavLink activeClassName="selected" className="nav-link" to="/VHSRental">
          VHSRental
        </NavLink>
      </nav>
    </div>
  )
}
export default About
