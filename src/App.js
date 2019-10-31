import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css'

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

  toggleCompleted = (itemID) => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === itemID) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  render() {
    console.log(this.state.todo)
    return (
      <div className='App'>
        <h1>Welcome to your Todo App!</h1>
        <TodoForm addItem={this.addItem}/> 
        <TodoList
        todo={this.state.todo}
        toggleCompleted={this.toggleCompleted}
        clearCompleted={this.clearCompleted}
        />       
        <button className='clearButton' onClick={this.clearCompleted}>
          Clear Completed Task
        </button>
      </div>
    );
  }
}

export default App;
