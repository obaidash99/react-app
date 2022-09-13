import Navbar from './Navbar';
import Home from './Home';

function App() {
	// const title = 'Welcome to the new blog';
	// const likes = 50;
	// const person = {
	// 	name: 'Obaida',
	// 	age: 30,
	// };
	// const bool = true;
	// const link = 'https://www.google.com';

	return (
		<div className="App">
			<Navbar />

			<div className="content">
				<Home />


				{/* <h1>{title}</h1>
				<p>Liked {likes} times</p> */}

				{/* <p>{person}</p> */}
				{/* <p>{bool}</p> */}

				{/* <p>{10}</p>
				<p>{'hello ninjas'}</p>
				<p>{[1, 2, 3, 4, 5, 6]}</p>
				<p>{Math.floor(Math.random() * 10)}</p>

				<a href={link}>Google</a> */}
			</div>
		</div>
	);
}

export default App;
