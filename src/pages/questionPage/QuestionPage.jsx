import React, { useState, useEffect } from 'react';
import './QuestionPage.scss';
import { useParams } from 'react-router-dom';
import quizData from '../../data/quizData';
import QuestionBlock from '../../components/QuestionBlock/QuestionBlock';
import ResultsSection from '../../components/resultsSection/ResultsSection';

const QuestionPage = () => {
	const [category, setCategory] = useState({});
	const { id } = useParams();
	const [score, setScore] = useState(0);
	const [answerTotal, setAnswerTotal] = useState(0);

	useEffect(() => {
		const selectedCategory = quizData.find(category => category.id === id);
		setCategory(selectedCategory);
	}, []);

	return (
		<div className="question-page">
			<h1 id="title">{category.title}</h1>
			<div className="questions">
				{category.questions?.map(question => (
					<QuestionBlock
						question={question}
						key={question.qIndex}
						setScore={setScore}
						setAnswerTotal={setAnswerTotal}
						score={score}
						answerTotal={answerTotal}
					/>
				))}
			</div>
			<div id="results-section">
				{/* {answerTotal === 10 && */}
					<ResultsSection score={score} />
				{/* } */}
			</div>
		</div>
	);
};

export default QuestionPage;
