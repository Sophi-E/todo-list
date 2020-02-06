import React, { Component } from 'react';
import PropType from 'prop-types';
import uuid from 'uuid';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textAlign: 'left',
      background: '#f4f4f4',
      padding: '10px',
      border: '1px solid #ccc',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  generateUUID() {
    return uuid();
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <h3>
          <label>
            <input
              type='checkbox'
              onChange={this.props.markComplete.bind(this, id)}
            />
            {title}
            <button
              onClick={this.props.deleteTodo.bind(this, id)}
              style={btnStyle}
            >
              x
            </button>
          </label>
        </h3>
      </div>
    );
  }
}

TodoItem.propType = {
  todo: PropType.object.isRequired
};

const btnStyle = {
  background: 'red',
  padding: '2px 4px',
  color: '#fff',
  float: 'right',
  border: 'none',
  borderRadius: '30%',
  cursor: 'pointer'
};
export default TodoItem;
