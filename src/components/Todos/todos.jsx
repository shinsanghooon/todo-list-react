import React, { useEffect, useState } from 'react';
import Todo from '../Todo/todo';
import { v4 as uuidv4 } from 'uuid';
import styles from './Todos.module.css';

export default function Todos({ filter }) {
	const [todos, setTodos] = useState(readTodosFromLocalStorage());
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

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return (
		<>
			<section className={styles.container}>
				<ul className={styles.list}>
					{filteredTodos.map((todo) => (
						<Todo
							todo={todo}
							key={todo.id}
							onCheck={handleCheck}
							onDelete={handleDelete}
						/>
					))}
				</ul>
				<form className={styles.form} onSubmit={handleSubmit}>
					<label htmlFor='name'></label>
					<input
						className={styles.input}
						type='text'
						id='name'
						name='name'
						value={task}
						onChange={handleChange}
					/>
					<button className={styles.button}>add</button>
				</form>
			</section>
		</>
	);
}

function getFilteredItem(todos, filter) {
	if (filter === 'all') {
		return todos;
	}
	return todos.filter((todo) => todo.status === filter);
}

function readTodosFromLocalStorage() {
	console.log('!!');
	const todos = localStorage.getItem('todos');
	return todos ? JSON.parse(todos) : [];
}
