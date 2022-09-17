import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

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
		<Router>
			<div className="App">
				<Navbar />

				<div className="content">
					<Switch>
						{/*من شان نحط أكتر من صفحة بالوقع هيك بيعمل سويتش على حسب الباث الموجود جوا الراوتر */}
						<Router exact path="/">
							{/* لأنه / يعتبر جزء من باقي الراوترز بالتالي دوم لح يطلع نفس النتيجة لهيك بضيف اكزاكت من شان يطابق الراوتر بالضبط */}
							<Home />
						</Router>
						<Router path="/create">
							<Create />
						</Router>
						<Router path="/blogs/:id">
							<BlogDetails />
						</Router>
					</Switch>

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
		</Router>
	);
}

export default App;
