import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import quizData from '../../data/quizData';
import QuestionBlock from '../../components/QuestionBlock/QuestionBlock';

const QuestionPage = () => {
	const [category, setCategory] = useState({});
  const { id } = useParams();
  const [correctAnswers, setCorrectAnswers] = useState([])
  const [guesses, setGuesses] = useState([]);

  const handleSelectAnswer = (selection, idx) => {

  }

	useEffect(() => {
		const selectedCategory = quizData.find(category => category.id === id);
    setCategory(selectedCategory);
    setCorrectAnswers(selectedCategory.questions.map(q => {
      return q.correctAns
    }))
	}, []);

console.log(correctAnswers);

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
