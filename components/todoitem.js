import React, { Component } from 'react'

class TodoItem extends Component {
  render() {
    return(
      <li>
        <div>{this.props.todo.text}</div>
        <button>完成</button>
        <button>删除</button>
      </li>
    )
  }
}

export default TodoItem