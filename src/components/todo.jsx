import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

export default function Todo({ todo, handleDelete }) {
	const [checked, setChecked] = useState(false);

	const handleCheck = (e) => {
		setChecked(e.target.checked);
	};

	const todoStyle = {
		color: 'gray',
		textDecoration: 'line-through',
		textDecorationStyle: 'solid',
	};

	return (
		<div className='todolist'>
			<div>
				<input type='checkbox' onClick={handleCheck} />
				<span style={checked ? todoStyle : {}}>{todo}</span>
			</div>
			<button onClick={() => handleDelete(todo)}>
				<FaTrash />
			</button>
		</div>
	);
}
