import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class header extends Component {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <Link style={linkStyle} to='/'>
          Home
        </Link>{' '}
        |{' '}
        <Link style={linkStyle} to='/about'>
          About
        </Link>
      </div>
    );
  }
}

const linkStyle = {
  textDecoration: 'none'
};

export default header;
