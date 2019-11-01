import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

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
      todo: data,
      lastTodo: data,
      searchText: ''
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
    this.setState({
      lastTodo: [
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
    this.setState({
      lastTodo: this.state.todo.filter(item => {
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

  
  handleChanges = e => {
    this.setState({
        searchText: e.target.value
    });       
}

  handleSearchSubmit = e => {
    console.log(this.state.searchText);
    e.preventDefault();
    if (this.state.searchText !== '') {
      this.setState({
        todo: this.state.todo.filter(item => {
          return item.task.includes(this.state.searchText)
        })
      })
    }
  }

  handleRestoreSubmit = e => {
    e.preventDefault();
    this.setState({ todo: this.state.lastTodo})
  }

  render() {
    console.log(this.state.todo)
    console.log(this.state.lastTodo)    
    console.log(this.state.searchText)
    return (
      <div className='App'>
        <h1>Welcome to your Todo App!</h1>
        <div className='form'>
          <form onSubmit={this.handleSearchSubmit}>
              <input
                onChange={this.handleChanges}
                type='text'
                name='search'
                value={this.state.searchText}
                className='field'
                placeholder=''
              />
              <button >Search List</button>              
          </form>
          <form onSubmit={this.handleRestoreSubmit}>
            <button>Restore List</button>
          </form>
        </div>
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
