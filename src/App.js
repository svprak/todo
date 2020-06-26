import React from 'react';

import TodoItem from './TodoItem';
import todosData from './todosData';

import './App.css';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todosData: todosData,
    };
  }

  handleChange(id) {
    this.setState((prevState) => console.log(id));
  }

  render() {
    const todoList = todosData.map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          todos={todo}
          handleChange={this.handleChange(todo.id)}
        />
      );
    });
    return <div className="todo-list">{todoList}</div>;
  }
}
export default App;
