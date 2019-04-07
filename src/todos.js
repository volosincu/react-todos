import Todo from './todo';
import React, { useState } from 'react';


import css from './main.css';

/**
 * @desc Parent component to render the todo items
 */
function Todos () {

    const [todos, setTodos] = useState([
        {
            text: 'Running',
            isCompleted: false
        },
        {
            text: 'Clean Room',
            isCompleted: false
        },
        {
            text: 'Visit place',
            isCompleted: false
        }
    ]);

    return (
            <div className="todos-component">
                <h2 className="todos-title">The todos list</h2>
                {todos.map((todo, index) => {
                    return <Todo key={index} {...todo} />;
                })}
                <p>keep going!</p>
            </div>
    );
}

export default Todos;
