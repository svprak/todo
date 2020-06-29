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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todosData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
      return { todosData: updatedTodos };
    });
  }

  render() {
    const todoList = this.state.todosData.map((todo) => {
      return (
        <TodoItem key={todo.id} todos={todo} handleChange={this.handleChange} />
      );
    });
    return <div className="todo-list">{todoList}</div>;
  }
}
export default App;
