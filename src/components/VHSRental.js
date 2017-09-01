import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import VHSItems from './VHSData.js'
import { Switch, Route, Link, NavLink } from 'react-router-dom'

export default class VHSRentalMenu extends Component {
  render() {
    let match = this.props.match
    let VHSJunk = VHSItems.map(VHSItems => {
      return (
        <div key={VHSItems.id} className={VHSItems.Name}>
          <ul>
            <li>
              {VHSItems.name}
            </li>
            <ul className="amenuimg">
              <li className="menuimg">
                {VHSItems.Image}
              </li>
            </ul>
            <li className="bunnin">
              {VHSItems.Description}
            </li>
            <li className="bunnin">
              Price = {VHSItems.Price}
            </li>
          </ul>
        </div>
      )
    })
    return (
      <div className="VHStown">
        <h2 className="videoTitle">Worste Video Rental</h2>
        {VHSJunk}
        <Link className="btn btn-large btn-primary" to="/">
          Back To Home
        </Link>
      </div>
    )
  }
}
