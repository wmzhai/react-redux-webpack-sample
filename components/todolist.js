import React, { Component } from 'react'
import TodoItem from './todoitem'

class TodoList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.todos.map( (todo) => {
            return <TodoItem key={todo.id} todo={todo}/>
          })
        }
      </ul>
    )
  }
}

export default TodoList