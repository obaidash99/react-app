const Home = () => {
	const handleClick = (e) => {
		console.log('hello ninjaas', e);
	};

	const handleClickAgain = (name, e) => {
		console.log('Hello ' + name, e.target);
	};

	return (
		<div className="home">
			<h2>HomePage</h2>
			<button onClick={handleClick}>Click Me</button>

			<button onClick={(e) => handleClickAgain('Obaida', e)}>Click Me Again!</button>
		</div>
	);
};

export default Home;
