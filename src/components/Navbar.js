import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'

const Navbar = () =>
  <div className="Navi1">
    <nav className="Navi">
      <NavLink activeClassName="selected" className="nav-link" exact to="/">
        Home
      </NavLink>
      <NavLink activeClassName="selected" className="nav-link" exact to="/About">
        About
      </NavLink>
      <NavLink activeClassName="selected" className="nav-link" exact to="/Contact">
        Contact
      </NavLink>
      <NavLink activeClassName="selected" className="nav-link" exact to="/Burgers">
        Burgers
      </NavLink>
      <NavLink activeClassName="selected" className="nav-link" exact to="/Camera">
        Camera
      </NavLink>
      <NavLink activeClassName="selected" className="nav-link" exact to="/Insurance">
        Insurance
      </NavLink>
      <NavLink activeClassName="selected" className="nav-link" exact to="/VHSRental">
        VHSRental
      </NavLink>
    </nav>
  </div>

export default Navbar
