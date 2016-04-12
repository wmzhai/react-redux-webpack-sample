import React, { Component } from 'react'


class TextInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: 'initial text'
    }
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  render() {
    return (
      <input
        type="text"
        placeholder="this is going to be text"
        value={this.state.inputText}
        onChange={this.handleChange.bind(this)}
      />
    )
  }
}

export default TextInput