import React from 'react';
import TodoList from './components/TodoComponents/TodoList'

const data = [
  {
    task: 'Make a to do list',
    id: 1234,
    completed: false
  }
]

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todo: data
    }
  }

  render() {
    return (
      <div className='App'>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
        todo={this.state.todo}
        />
      </div>
    );
  }
}

export default App;
