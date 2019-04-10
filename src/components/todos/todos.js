import Todo from 'components/todo';
import TodosContext from '../context/todosContext';
import React, { useState, useEffect, useContext } from 'react';

import css from '../../main.css';


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

    const context = useContext(TodosContext);
    const [objectiveType, setObjectiveType] = useState("Personal");

    const changeTodoObjective = (e) => {
        const checked = e.target.checked,
              val = e.target.value;
        console.log(checked, val);

        if(checked) {
            setObjectiveType(val);
        }else{
            setObjectiveType("Personal");
        }
    };

    return (
            <TodosContext.Provider value={{type: objectiveType,  setType: (p)=>{
                this.setObjectiveType = p;
            }}}>
                <div className="todos-component">
                <h2 className="todos-title">The todos list</h2>
                <input type="checkbox" value="Profesional" onChange={changeTodoObjective} />
                {todos.map((todo, index) => {
                    return <Todo key={index} {...todo} />;
                })}
                <p>keep going!</p>
            </div>
       </TodosContext.Provider>
    );
}

export default Todos;
