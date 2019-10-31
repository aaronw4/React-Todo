import React from 'react';
import Item from './Item';

const TodoList = props => {


    return(
        <div>
            {props.todo.map(item => (
                <Item
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    )
}

export default TodoList