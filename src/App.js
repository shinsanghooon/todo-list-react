import { useState } from 'react';
import './App.css';
import Header from './components/Header/header';
import Todos from './components/Todos/todos';

const filters = ['all', 'active', 'completed'];

function App() {
	const [filter, setFilter] = useState(filters[0]);

	return (
		<>
			<Header filter={filter} filters={filters} onFilterChange={setFilter} />
			<Todos filter={filter} />
		</>
	);
}

export default App;
