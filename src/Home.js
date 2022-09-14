import { useState } from 'react';

const Home = () => {
	// let name = 'Obaida';
	// const [name, setName] = useState('Obaida');
	// const [age, setAge] = useState(23);
	const [blogs] = useState([
		{ title: 'My new website', body: 'Lorem ipsum...', author: 'obaida', id: 1 },
		{ title: 'My new website', body: 'Lorem ipsum...', author: 'omar', id: 2 },
		{ title: 'My new website', body: 'Lorem ipsum...', author: 'obay', id: 3 },
		{ title: 'My new website', body: 'Lorem ipsum...', author: 'owais', id: 4 },
	]);

	// const handleClick = () => {
	// 	setName('Omar');
	// 	setAge(19);
	// };

	// const handleClickAgain = (name, e) => {
	// 	console.log('Hello ' + name, e.target);
	// };

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

			{blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<h2>{blog.title}</h2>
					<p>Written by: {blog.author}</p>
				</div>
			))}
		</div>
	);
};

export default Home;
