import Todo from 'components/todo';
import TodosContext from '../context/todosContext';
import React, { useState, useEffect, useContext } from 'react';

import css from '../../main.css';
import { LANDING_TITLE,
         TODO_OBJECTIVE_PERSONAL,
         TODO_OBJECTIVE_PROFESIONAL
       } from '../constants';

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
    const [objectiveType, setObjectiveType] = useState(TODO_OBJECTIVE_PERSONAL);

    const changeTodoObjective = (e) => {
        const checked = e.target.checked,
              val = e.target.value;

        if(checked) {
            setObjectiveType(val);
        }else{
            setObjectiveType(TODO_OBJECTIVE_PERSONAL);
        }
    };

    return (
            <TodosContext.Provider value={{type: objectiveType,  setType: (p)=>{
                this.setObjectiveType = p;
            }}}>
                <div className="todos-component">
                <h2 className="todos-title">{LANDING_TITLE}</h2>
                <span>Objective Type: </span>
                <input id="objective-type" type="checkbox" value={TODO_OBJECTIVE_PROFESIONAL} onChange={changeTodoObjective} />
                {todos.map((todo, index) => {
                    return <Todo key={index} {...todo} />;
                })}
                <p>keep going!</p>
            </div>
       </TodosContext.Provider>
    );
}

export default Todos;
