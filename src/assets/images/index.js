// const [todos, setTodos] = React.useState([]);

// 	const handleDelete = (evt) => {
// 		const todoId = evt.target.dataset.todoId - 0;

// 		const filteredTodos = todos.filter((todo) => todo.id !== todoId);

// 		setTodos(filteredTodos);
// 	};

// 	const handleCheck = (evt) => {
// 		const todoId = evt.target.dataset.todoId - 0;

// 		const foundTodo = todos.find((todo) => todo.id === todoId);

// 		foundTodo.isCompleted = !foundTodo.isCompleted;

// 		setTodos([...todos]);
// 	};