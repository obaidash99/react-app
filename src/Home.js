import BlogList from './blogList';
import useFetch from './useFetch';

const Home = () => {
	const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

	// let name = 'Obaida';
	// const [name, setName] = useState('Obaida');
	// const [age, setAge] = useState(23);

	// const [name, setName] = useState('mario');

	// const handleClick = () => {
	// 	setName('Omar');
	// 	setAge(19);
	// };

	// const handleClickAgain = (name, e) => {
	// 	console.log('Hello ' + name, e.target);
	// };

	// useEffect(() => {
	// 	// fires on every render
	// 	console.log('useEffect ran');
	// 	console.log(name);
	// }, [name]); // [] => to make it render once on first render and [name] => to make render when name is changed

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

			{error && <div>{error}</div>}
			{isLoading && <div>Loading...</div>}

			{blogs && <BlogList blogs={blogs} title="All Blogs!" />}
			{/* waits for blogs to be true or has value of not null */}
			{/* <button onClick={() => setName('luigi')}>Change Name</button>
			<p>{name}</p> */}
			<hr />

			{/* <BlogList
				blogs={blogs.filter((blog) => blog.author === 'mario')}
				title="Mario's Blogs"
				handleDelete={handleDelete}
			/> */}
		</div>
	);
};

export default Home;
