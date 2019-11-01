import React, {Component} from 'react';

class TodoSearch extends Component {
    constructor(props) {
        super();
        this.state = {
            search: ''
        }
    }

    handleChanges = e => {
        this.setState({
            search: e.target.value
        });       
    }

    handleSubmit = () => {
        this.props.handleSearchSubmit(this.state.search)
    }

    render() {
        return(
            <div className='form'>
                <form onChange={this.handleSearchSubmit}>
                    <input
                        onChange={this.handleChanges}
                        type='text'
                        name='search'
                        value={this.state.searchText}
                        className='field'
                        placeholder='Search List'
                    />
                </form>
            </div>
        )
    }
}

export default TodoSearch;

