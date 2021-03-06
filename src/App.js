import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

import './App.css';

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res =>
        this.setState({
          todos: res.data
        })
      )
      .catch(error => console.log(error));
  }
  markComplete = id => {
    this.setState({
      todo: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  addTodo = title => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then(res => {
        console.log(res);
        this.setState({
          todos: [...this.state.todos, res.data]
        });
      });
    console.log(this.state.todos);
  };

  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div className='App'>
          <Header />
          <Route
            exact
            path='/'
            render={() => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  deleteTodo={this.deleteTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
