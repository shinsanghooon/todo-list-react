import { useState } from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Todo from './components/todo';

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

	const handleDelete = (name) => {
		const filteredTodos = todos.filter((todo) => todo !== name);
		setTodos(filteredTodos);
	};

	return (
		<div className='main'>
			<Header />
			{todos.map((todo, index) => (
				<Todo todo={todo} key={index} handleDelete={handleDelete} />
			))}
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'></label>
				<input
					type='text'
					id='name'
					name='name'
					value={task}
					onChange={handleChange}
				/>
				<button>작성</button>
			</form>
			<Footer />
		</div>
	);
}

export default App;
