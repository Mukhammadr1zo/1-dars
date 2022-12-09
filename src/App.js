import React from 'react';
import './App.css';

import Todo from './components/todo/todo';
function App() {
	let [todos, setTodos] = React.useState([])

  let handleCheck =(id ) =>{
    
  }

	return (
		<main className='main container'>
			<input type="text" placeholder='todo yozing' onKeyDown={(e)=> {
        // console.log(e);
        if(e.keyCode === 13){

          let inputVal = e.target.value
          console.log();

          let newTodo = {
            id: Math.random().toFixed(3),
            title: inputVal,
            isCompleted: false,
          }
          console.log(newTodo);

          setTodos([...todos, newTodo])
          e.target.value = null
          
        }
      }}/>

      <ul>
      {todos.length > 0 &&
					todos.map((todo) => (
						<Todo key={todo.id} todo={todo} handleCheck={handleCheck} >
							{todo.title}
						</Todo>
					))}

      </ul>
		</main>
	);
}

export default App;