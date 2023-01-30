import React from 'react';
import { useContext } from 'react';
import { MyContext } from '../context/ContextContainer';

const ToDoItem = ({ item, onHandleStatus }) => {
    const { updateItems } = useContext(MyContext);
    //const todo = props.item;

    return (
        <div className="todo-item">
            <p>{item.text}</p>
            <div className="actions">
                <button className="btn" onClick={() => updateItems(item.id)}>
                    &#10004;
                </button>
            </div>
        </div>
    );
};

export default ToDoItem;
