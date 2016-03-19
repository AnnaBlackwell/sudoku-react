'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import domready from 'domready'

domready(() => {
  ReactDOM.render(
    <App />,
    document.querySelector('.app')
  )
})
