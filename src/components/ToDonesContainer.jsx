import ToDoneItem from './ToDoneItem';
import { useContext } from 'react';
import { MyContext } from '../context/ContextContainer';

const ToDonesContainer = ({ items, handleChange }) => {
    const { todones, updateItems } = useContext(MyContext);

    const toDonesItems = todones.map((todone) => {
        return (
            <ToDoneItem
                key={todone.id}
                item={todone}
                //onHandleStatus={handleChange}
            />
        );
    });

    return (
        <div className="todones-container">
            <h3>BACKLOG</h3>
            {todones.length > 0 && toDonesItems}
        </div>
    );
};

export default ToDonesContainer;
