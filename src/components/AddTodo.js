import React from 'react';

class AddTodo extends React.Component {
  state = {
    title: ''
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{ display: 'flex', margin: '4px 0' }}
      >
        <input
          style={inputStyle}
          type='text'
          name='title'
          placeholder='Add Todo...'
          value={this.state.title}
          onChange={this.onChange}
        />
        <input style={submitStyle} type='submit' />
      </form>
    );
  }
}
const inputStyle = {
  padding: '10px',
  flex: '10'
};
const submitStyle = {
  padding: '10px',
  flex: '1',
  cursor: 'pointer'
};
export default AddTodo;
