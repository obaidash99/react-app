import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1>The Dojo Blog</h1>
			<div className="links">
				{/* <a href="/">Home</a> those anchor tags still sends requests to the server and that's not how react works
				<a href="/create">New Blog</a> */}
				<Link to="/">Home</Link>
				<Link to="/create">New Blog</Link>
				{/*this link tag is to make react handle requests */}
			</div>
		</nav>
	);
};

export default Navbar;
