import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import cameraItems from './CameraData.js'
import { Switch, Route, Link, NavLink } from 'react-router-dom'

export default class cameraMenu extends Component {
  render() {
    let match = this.props.match
    let CamLens = cameraItems.map(cameraItems => {
      return (
        <div key={cameraItems.id} className={cameraItems.Name}>
          <ul>
            <li>
              {cameraItems.name}
            </li>
            <ul>
              <li className="menuimg">
                {cameraItems.Image}
              </li>
            </ul>
            <li>
              {cameraItems.Description}
            </li>
            <li>
              Price = {cameraItems.Price}
            </li>
          </ul>
        </div>
      )
    })
    return (
      <div className="Cameratown">
        <h2>Worste Voyeurcam</h2>
        {CamLens}
        <Link className="btn btn-large btn-primary" to="/">
          Back To Home
        </Link>
      </div>
    )
  }
}
