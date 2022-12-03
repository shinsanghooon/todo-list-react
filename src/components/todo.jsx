import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

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
		<div className='todolist'>
			<div>
				<input
					type='checkbox'
					checked={status === 'completed'}
					onChange={handleCheck}
				/>
				<span style={status === 'completed' ? todoStyle : {}}>
					{todo.todoTitle}
				</span>
			</div>
			<button onClick={handleDelete}>
				<FaTrashAlt />
			</button>
		</div>
	);
}
