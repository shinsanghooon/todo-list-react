import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function Todo({ todo }) {
	return (
		<div className='todolist'>
			<div>
				<input type='checkbox' />
				<span>{todo}</span>
			</div>
			<button>
				<FaTrash />
			</button>
		</div>
	);
}
