import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/style.scss'

// JQuery Script
;(function ($) {
  'use strict'
  $('.sakura-falling').sakura()
})(jQuery)

// Playing Music
$(document).on('click', function () {
  document.getElementById('my_audio').play()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
