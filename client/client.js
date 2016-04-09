import React from 'react'; // 等价于 var React = require('react')
import { render } from 'react-dom'; // 等价于 var render = require('react-dom').render
import App from '../components/App'

render(
  // 定义Component
  // DOM 元素上mount
  <App />,
  document.getElementById('app')
)


