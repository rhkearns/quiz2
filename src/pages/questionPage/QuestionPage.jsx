import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import quizData from '../../data/quizData';
import QuestionBlock from '../../components/QuestionBlock/QuestionBlock';

const QuestionPage = () => {
	const [category, setCategory] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const selectedCategory = quizData.find(category => category.id === id);
		setCategory(selectedCategory);
	}, []);

	return (
		<>
			<h1 id="title">{category.title}</h1>
			<div className="questions">
				{category.questions?.map(question => (
					<QuestionBlock question={question}/>
				))}
			</div>
		</>
	);
};

export default QuestionPage;
