import React, { useState, useContext } from 'react';
import TodosContext from '../context/todosContext';


/**
 * @desc Component to render a todo item
 */
function Todo ({text, isCompleted}) {

    const todoObjectiveType = useContext(TodosContext);
    const [values, setValues] = useState({time: "", error: ""});

    const timeHandler = (e) => {
        const time = e.target.value,
              match = /^\d{2}([/])\d{2}\1\d{4}$/.test(time);

        if(match){
            setValues({time, error: ""});
        } else {
            setValues({error: "fieldError"});
        }
    };

    return (
             <div className="todo-component">
                <div>{todoObjectiveType.type}</div>
                {text}
                <input name="datetime" className={values.error} onChange={timeHandler} type="datetime" />
                <hr />
            </div>
    );
};

export default Todo;
