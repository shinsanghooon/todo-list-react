import { useState } from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Todos from './components/todos';

const filters = ['all', 'active', 'completed'];

function App() {
	const [filter, setFilter] = useState(filters[0]);

	return (
		<div className='main'>
			<Header filters={filters} onFilterChange={setFilter} />
			<Todos filter={filter} />
			<Footer />
		</div>
	);
}

export default App;
