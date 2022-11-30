import React from 'react';
import Todo from './todo';

export default function Todos({ todos }) {
	return (
		<>
			{todos.map((todo, index) => (
				<Todo todo={todo} key={index} />
			))}
		</>
	);
}
