import React from 'react';
import { useContext } from 'react';
import { MyContext } from '../context/ContextContainer';

const ToDoneItem = ({ item, onHandleStatus }) => {
    const {updateItems} = useContext(MyContext)
    //const todone = props.item;

    return (
        <div className="todones-item">
            <p>{item.text}</p>
            <div className="actions">
                <button className="btn" onClick={() => updateItems(item.id)}>
                    &#8635;
                </button>
            </div>
        </div>
    );
};

export default ToDoneItem;
