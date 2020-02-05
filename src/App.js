import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'learn React',
        completed: false
      },
      {
        id: 2,
        title: 'master react',
        completed: false
      },
      {
        id: 3,
        title: 'build react project',
        completed: false
      }
    ]
  };
  render() {
    return (
      <div className='App'>
        <h1>First React Act</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
