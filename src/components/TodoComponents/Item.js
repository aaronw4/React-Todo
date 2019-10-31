import React from 'react';


const Item = props => {
    let itemClassName = 'item';
    if (props.item.completed) {
        itemClassName = itemClassName + ' completed';
    }

    return(
        <div className={itemClassName}>
            <p>{props.item.task}</p>
        </div>
    )

}

export default Item