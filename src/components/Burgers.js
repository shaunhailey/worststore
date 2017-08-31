import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import burgerItems from './BurgerData.js'
import { Switch, Route, Link, NavLink } from 'react-router-dom'

export default class burgerMenu extends Component {
  render() {
    let match = this.props.match
    let burgerBuns = burgerItems.map(burgerItems => {
      return (
        <div key={burgerItems.id} className={burgerItems.Name}>
          <ul>
            <li>
              {burgerItems.name}
            </li>
            <ul>
              <li className="menuimg">
                {burgerItems.Image}
              </li>
            </ul>
            <li>
              {burgerItems.Description}
            </li>
            <li>
              Price = {burgerItems.Price}
            </li>
          </ul>
        </div>
      )
    })
    return (
      <div className="Burgertown">
        <h2>Worste Burgergasm</h2>
        {burgerBuns}
        <Link className="btn btn-large btn-primary" to="/">
          Back To Home
        </Link>
      </div>
    )
  }
}

// const Burgers = () => {
//   return (
//     <div className="burgers">
//       <h2>Enjoy the Worste Burgers!</h2>
//       <ul className="burgerMenu">
//         <li>Basic Burger</li>
//     </div>
//   )
// }
