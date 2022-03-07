import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/nav/NavBar';
import Home from './pages/home/Home';

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
};

export default App;
