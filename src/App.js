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

  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter(item => {
        return !item.completed
      })
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
        <button className='clearButton' onClick={this.clearCompleted}>
          Clear Completed Task
        </button>
      </div>
    );
  }
}

export default App;
