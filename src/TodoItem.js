import React from 'react';

export default function TodoItem(props) {
  const styles = {
    display: 'inline',
    marginLeft: 15,
  };

  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.todos.completed} />
      <p style={styles}>{props.todos.text}</p>
    </div>
  );
}
