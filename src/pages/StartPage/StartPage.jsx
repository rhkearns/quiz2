import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import quizData from '../../data/quizData';
import './StartPage.scss';

const StartPage = () => {
	const [category, setCategory] = useState({});
	const { id } = useParams();
	console.log(id);

	useEffect(() => {
		const selectedCategory = quizData.find(category => category.id === id);
		setCategory(selectedCategory);
	}, []);

	console.log(category);

	return (
		<>
			<div className="header">
				<h1 id="title">{category.title}</h1>
				<h2 id="message">Are you ready to begin?</h2>
				<button id="startBtn">Begin Quiz</button>
			</div>
		</>
	);
};

export default StartPage;
