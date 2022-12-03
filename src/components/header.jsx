import React from 'react';
import '../App.css';

export default function Header({ filters, onFilterChange }) {
	return (
		<>
			<p>Todo List</p>
			<ul>
				{filters.map((value, index) => (
					<li key={index}>
						<button onClick={() => onFilterChange(value)}>{value}</button>
					</li>
				))}
			</ul>
		</>
	);
}
