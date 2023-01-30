import { createContext, useState, useEffect, useReducer } from 'react';
import reducer from '../Reducer/reducer';

export const MyContext = createContext();

const ContextContainer = (props) => {
    const tasks = [
        { id: 0, text: 'Walk a cat', done: false },
        { id: 1, text: 'Walk a dog', done: false },
        { id: 2, text: 'Pay taxes', done: false },
        { id: 3, text: 'Buy food', done: false },
        { id: 4, text: 'Play some music', done: false },
        { id: 5, text: 'Learn React', done: true },
        { id: 6, text: 'Build a Website', done: true },
        { id: 7, text: 'Reading', done: true },
        { id: 8, text: 'Sleep more than 6 hours', done: true },
    ];

    //const [items, setItems] = useState(tasks);
    const [state, dispatch] = useReducer(reducer, tasks)
    // const todos = items.filter((element) => !element.done);
    // const todones = items.filter((element) => element.done);

    const todos = state.filter((element) => !element.done);
    const todones = state.filter((element) => element.done);

    const addItem = (value) => {
        // const newItem = { id: state.length, text: value, done: false };
        //setItems([...items, newItem]);
        // const updatedTasks = [newItem, ...items];
        // setItems(updatedTasks);
        // localStorage.setItem('todos', JSON.stringify(updatedTasks));
        dispatch({type: 'ADD_ITEM', payload: value})
    };

    const updateItems = (id) => {
        // const changedItems = items.map((item) => {
        //     return item.id === id ? { ...item, done: !item.done } : item;
        // });
        // //setItems(changedItems);
        // localStorage.setItem('todos', JSON.stringify(changedItems));
        dispatch({type: 'UPDATE_ITEM', payload: id})
    };

    useEffect(() => {
        //const myTasks = JSON.parse(localStorage.getItem('todos'));
         //if (myTasks) {
             dispatch({type: 'ONLOAD'})
        // }
    }, []);

    return (
        <MyContext.Provider value={{ todos, todones, addItem, updateItems }}>
            {props.children}
        </MyContext.Provider>
    );
};
export default ContextContainer;
