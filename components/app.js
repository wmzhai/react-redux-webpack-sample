import React, { Component } from 'react';
import TodoInput from './todoinput';
import TodoList from './todolist';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions';
import UserInfo from './userinfo';

class App extends Component {
  render() {
    return (
      <div>
        <h1>待做事项</h1>
        <UserInfo user={this.props.user} createNewUserId={this.props.actions.createNewUserId}/>
        <TodoInput addTodo={this.props.actions.addTodo}/>
        <TodoList actions={this.props.actions} todos={this.props.todos}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
