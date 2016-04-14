import React from 'react' // 等价于 var React = require('react')
import { render } from 'react-dom' // 等价于 var render = require('react-dom').render
import App from '../components/app'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'Initial todo for demo purpose'
  }],
  user: {
    username: 'wmzhai',
    id: 100
  }
};

let store = configureStore(initialState);


render(
  // 定义Component
  // DOM 元素上mount
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)


