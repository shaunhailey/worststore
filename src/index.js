import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import BaseLayout from './components/BaseLayout.js'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout />
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
