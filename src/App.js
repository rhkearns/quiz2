import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/nav/NavBar';
import Home from './pages/home/Home';
import StartPage from './pages/StartPage/StartPage';

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:id" element={<StartPage />} />
			</Routes>
		</div>
	);
};

export default App;
