import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/nav/NavBar';
import Home from './pages/home/Home';
import StartPage from './pages/StartPage/StartPage';
import QuestionPage from './pages/questionPage/QuestionPage';

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:id" element={<StartPage />} />
				<Route path='/:id/quiz' element={<QuestionPage />} />
			</Routes>
		</div>
	);
};

export default App;
