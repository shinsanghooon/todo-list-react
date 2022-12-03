import React, { useState } from 'react';
import Todo from './todo';
import { v4 as uuidv4 } from 'uuid';

export default function Todos({ filter }) {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState('');

	const filteredTodos = getFilteredItem(todos, filter);

	const handleSubmit = (e) => {
		e.preventDefault();
		const task = e.target.name.value;
		setTodos([...todos, { id: uuidv4(), todoTitle: task, status: 'active' }]);
		console.log(todos);
		setTask('');
	};

	const handleChange = (e) => {
		setTask(e.target.value);
	};

	const handleCheck = (updatedTodo) => {
		setTodos(
			todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
		);
	};

	const handleDelete = (deletedTodo) => {
		console.log(deletedTodo);
		setTodos(todos.filter((todo) => todo.id !== deletedTodo.id));
	};

	return (
		<>
			{filteredTodos.map((todo) => (
				<Todo
					todo={todo}
					key={todo.id}
					onCheck={handleCheck}
					onDelete={handleDelete}
				/>
			))}
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'></label>
				<input
					type='text'
					id='name'
					name='name'
					value={task}
					onChange={handleChange}
				/>
				<button>add</button>
			</form>
		</>
	);
}

function getFilteredItem(todos, filter) {
	if (filter === 'all') {
		return todos;
	}
	return todos.filter((todo) => todo.status === filter);
}
