import React, { Component } from 'react'

class TodoItems extends Component {
  createTasks = (item) => {
    return (
      <li key={item.key}>
        {item.text}
        <button onClick={() => this.props.deleteItem(item.key)}>X</button>
      </li>
    )
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <ul className="todo-list">{listItems}</ul>
  }
}

export default TodoItems
