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
            <ul>
              <li className="menuimg">
                {VHSItems.Image}
              </li>
            </ul>
            <li>
              {VHSItems.Description}
            </li>
            <li>
              Price = {VHSItems.Price}
            </li>
          </ul>
        </div>
      )
    })
    return (
      <div className="VHStown">
        {VHSJunk}
        <Link className="btn btn-large btn-primary" to="/">
          Back To Home
        </Link>
      </div>
    )
  }
}
