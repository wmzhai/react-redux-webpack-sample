import React, { Component } from 'react'

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
    console.log( 'submit button ')
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Type in your todo"
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default TodoInput