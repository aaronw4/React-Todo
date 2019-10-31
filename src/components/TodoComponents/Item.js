import React from 'react';


const Item = props => {
    let itemClassName = 'item';
    if (props.item.completed) {
        itemClassName = itemClassName + ' completed';
    }

    const handleClick = () => {
        props.toggleCompleted(props.item.id);
    };

    return(
        <div className={itemClassName} onClick={handleClick}>
            <p>{props.item.task}</p>
        </div>
    )

}

export default Item