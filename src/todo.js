import React, { useState } from 'react';


/**
 * @desc Component to render a todo item
 */
function Todo ({text, isCompleted}) {

    return (
            <div className="todo-component">
                {text}
                <hr />
            </div>
    );
};

export default Todo;
