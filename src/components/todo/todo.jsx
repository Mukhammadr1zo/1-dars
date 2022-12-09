import React from 'react';

const Todo = ({todo, children,handleCheck}) => {
    console.log(children);
    return (
        <li>
            <input type="checkbox" onClick={handleCheck(todo.id)} todo-data-id={todo.id} />
           {children}
           <button>
            &times;
           </button>
        </li>
    );
}

export default Todo;
