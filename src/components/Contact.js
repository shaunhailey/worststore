import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Link, NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="contact">
      <h1>How to Reach Worste MultiMarket Extravaganza</h1>
      <div className="homeP">
        <ul className="contactList">
          <li>Phone = 813-DONTBOTHER</li>
          <li>Email = worsteemailever@suckit.io</li>
          <li>Address = 678 Slumtrap Ave, Memphis, TN</li>
        </ul>
      </div>
      <nav className="Navi">
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
export default Contact
