import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Link, NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <h1>Worste MultiMarket Extravaganza</h1>
      <h4>We guarantee all customers will receive the Worste experience!</h4>
      <p>Note that we are open, the going out of business signs are just landlord negotiations</p>
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
export default Home
