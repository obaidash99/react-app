import { useState, useEffect } from 'react';
import BlogList from './blogList';

const Home = () => {
	// let name = 'Obaida';
	// const [name, setName] = useState('Obaida');
	// const [age, setAge] = useState(23);
	const [blogs, setBlogs] = useState([
		{ title: 'My new website', body: 'Lorem ipsum...', author: 'mario', id: 1 },
		{ title: 'My new website', body: 'Lorem ipsum...', author: 'ahmed', id: 2 },
		{ title: 'My new website', body: 'Lorem ipsum...', author: 'hany', id: 3 },
		{ title: 'My new website', body: 'Lorem ipsum...', author: 'mario', id: 4 },
	]);

	const [name, setName] = useState('mario');

	const handleDelete = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		setBlogs(newBlogs);
	};

	// const handleClick = () => {
	// 	setName('Omar');
	// 	setAge(19);
	// };

	// const handleClickAgain = (name, e) => {
	// 	console.log('Hello ' + name, e.target);
	// };

	useEffect(() => {
		// fires on every render
		console.log('useEffect ran');
		console.log(name);
	}, [name]); // [] => to make it render once on first render and [name] => to make render when name is changed

	return (
		<div className="home">
			{/* <h2>HomePage</h2>
			<p>
				{name} is {age} years old
			</p>
			<button onClick={handleClick}>Click Me</button>

			{/* <button onClick={(e) => handleClickAgain('Obaida', e)}>Click Me Again!</button> */}

			{/* <hr />
			<hr /> */}

			<BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
			<button onClick={() => setName('luigi')}>Change Name</button>
			<p>{name}</p>
			<hr />

			<BlogList
				blogs={blogs.filter((blog) => blog.author === 'mario')}
				title="Mario's Blogs"
				handleDelete={handleDelete}
			/>
		</div>
	);
};

export default Home;
