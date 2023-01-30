import './scss/App.scss';
import Navigation from './components/Navigation';
import ToDosContainer from './components/ToDosContainer';
import ToDonesContainer from './components/ToDonesContainer';
import Help from './views/Help';
import NotFound from './views/NotFound';
import ContextContainer from './context/ContextContainer';
//import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <ContextContainer>
            <div className="app">
                <Navigation />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <ToDosContainer
                                // items={todos}
                                // handleAddTodo={addItem}
                                // handleChange={updateItems}
                                />
                                <ToDonesContainer
                                //  items={todones}
                                //  handleChange={updateItems}
                                />
                            </>
                        }
                    />
                    <Route path="help" element={<Help />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </ContextContainer>
    );
}

export default App;
