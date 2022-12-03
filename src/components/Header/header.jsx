import React from 'react';
import { FaStaylinked } from 'react-icons/fa';
import styles from './Header.module.css';

export default function Header({ filters, filter, onFilterChange }) {
	return (
		<header className={styles.header}>
			<ul className={styles.filters}>
				{filters.map((value, index) => (
					<li key={index}>
						<button
							onClick={() => onFilterChange(value)}
							className={`${styles.filter} ${
								filter === value && FaStaylinked.selected
							}`}
						>
							{value}
						</button>
					</li>
				))}
			</ul>
		</header>
	);
}
