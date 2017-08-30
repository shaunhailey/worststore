import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import burgerItems from './BurgerData.js'
import { Switch, Route, Link, NavLink } from 'react-router-dom'

export default class burgerMenu extends Component {
  render() {
    //get access to the match object
    let match = this.props.match
    //map through our array and create a NavLink for each object inside
    let burgerBuns = burgerItems.map(burgerItems => {
      return (
        <div key={burgerItems.id} className={burgerItems.Name}>
          <ul>Burgers!</ul>
          <li>
            {burgerItems.name}
          </li>
          <img src={burgerItems.Image} alt={burgerItems.Name} />
        </div>
      )
    })
    return (
      <div className="Burgertown">
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
