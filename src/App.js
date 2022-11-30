import { useState } from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Todos from './components/todos';

function App() {
	const [task, setTask] = useState('');
	const [todos, setTodos] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const task = e.target.name.value;
		setTodos((prev) => [...prev, task]);
		setTask('');
	};

	const handleChange = (e) => {
		setTask(e.target.value);
	};

	return (
		<div className='main'>
			<Header />
			<Todos todos={todos} />
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'></label>
				<input
					type='text'
					id='name'
					name='name'
					value={task}
					onChange={handleChange}
				/>
				<button>Submit!</button>
			</form>
			<Footer />
		</div>
	);
}

export default App;
