import React, { Component } from 'react'
import actions from '../redux/actions'

class TodoInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }
  }

  deleteLetter() {
    this.setState({
      inputText: this.state.inputText.substring(0, this.state.inputText.length - 1)
    })
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch(actions.addTodo(this.state.inputText))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Type in your todo"
            value={this.state.inputText}
            onChange={this.handleChange.bind(this)}
          />
          <input type="submit"   />
        </form>
      </div>
    )
  }
}

export default TodoInput