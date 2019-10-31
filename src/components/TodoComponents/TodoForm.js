import React, {Component} from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            task: ''
        }
    }

    handleChanges = e => {
        this.setState({
            task: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.task !== '') {
            this.props.addItem(this.state.task);
            this.setState({
                task:''
            });
        }
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChanges}
                    type='text'
                    name='item'
                    value={this.state.task}
                />
                <button>Add to List</button>
            </form>
        )
    }
}

export default TodoForm;

