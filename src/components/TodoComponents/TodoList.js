import React from 'react';

const TodoList = props => {

    return(
        <div>
            {props.todo.map(item => (
                <div>
                    {item.task}
                </div>
            ))}
        </div>
    )
}

export default TodoList