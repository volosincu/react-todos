import css from './main.css';
import React, { useState } from 'react';



export default function Todos () {

    console.log("enter in TodoComponent");
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

    todos.map((todo, index) => {
        console.log(todo.text);
    });

    return (
            <div className="todo-component">
                <div>The todos list</div>
                {todos.map((todo, index) => {
                    return <div key={index}>{todo.text}</div>;
                })}
                <p>keep going!</p>
            </div>
    );
}
