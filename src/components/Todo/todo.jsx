import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo({ todo, onCheck, onDelete }) {
	const { status, todoTitle } = todo;

	const todoStyle = {
		color: 'gray',
		textDecoration: 'line-through',
		textDecorationStyle: 'solid',
	};

	const handleCheck = (e) => {
		const status = e.target.checked ? 'completed' : 'active';
		console.log(e.target.checked);
		onCheck({ ...todo, status });
	};

	const handleDelete = () => onDelete(todo);

	return (
		<li className={styles.todo}>
			<input
				className={styles.checkbox}
				type='checkbox'
				checked={status === 'completed'}
				onChange={handleCheck}
			/>
			<span
				className={styles.text}
				style={status === 'completed' ? todoStyle : {}}
			>
				{todo.todoTitle}
			</span>

			<span className={styles.icon}>
				<button onClick={handleDelete} className={styles.button}>
					<FaTrashAlt />
				</button>
			</span>
		</li>
	);
}
