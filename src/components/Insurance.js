import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import insuranceItems from './InsuranceData.js'
import { Switch, Route, Link, NavLink } from 'react-router-dom'

export default class InsuranceMenu extends Component {
  render() {
    let match = this.props.match
    let InsuranceJunk = insuranceItems.map(insuranceItems => {
      return (
        <div key={insuranceItems.id} className={insuranceItems.Name}>
          <ul>
            <li>
              {insuranceItems.name}
            </li>
            <ul>
              <li className="menuimg">
                {insuranceItems.Image}
              </li>
            </ul>
            <li>
              {insuranceItems.Description}
            </li>
            <li>
              Price = {insuranceItems.Price}
            </li>
          </ul>
        </div>
      )
    })
    return (
      <div className="Insurancetown">
        {InsuranceJunk}
        <Link className="btn btn-large btn-primary" to="/">
          Back To Home
        </Link>
      </div>
    )
  }
}
