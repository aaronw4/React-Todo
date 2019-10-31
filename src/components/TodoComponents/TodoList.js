import React from 'react';
import Item from './Item';

const TodoList = props => {

    return(
        <div>
            {props.todo.map(item => (
                <Item
                    key={item.id}
                    item={item}
                    toggleCompleted={props.toggleCompleted}
                />
            ))}
            <button className='clearButton' onClick={props.clearCompleted}>
              Clear Completed Task
            </button>
        </div>
    )
}

export default TodoList