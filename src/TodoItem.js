import React from 'react';

export default function TodoItem(props) {
  const styles = {
    display: 'inline',
    marginLeft: 15,
  };
  const completedStyle = {
    display: 'inline',
    marginLeft: 15,
    color: '#9e9e9e',
    textDecoration: 'line-through',
    fontStyle: 'italic',
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.todos.completed}
        onChange={() => props.handleChange(props.todos.id)}
      />
      <p style={!props.todos.completed ? styles : completedStyle}>
        {props.todos.text}
      </p>
    </div>
  );
}
