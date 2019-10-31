import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

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

  addItem = task => {
    this.setState({
      todo: [
        ...this.state.todo, 
        {
          task: task,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

  render() {
    return (
      <div className='App'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem}/>
        <TodoList
        todo={this.state.todo}
        />
      </div>
    );
  }
}

export default App;
