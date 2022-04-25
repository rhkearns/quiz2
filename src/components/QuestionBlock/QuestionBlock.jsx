import React, { useState } from 'react';
import './QuestionBlock.scss';
import AnswerChoices from '../answerChoices/AnswerChoices';

const QuestionBlock = ({ question }) => {
	const [answerCorrect, setAnswerCorrect] = useState('none')
	const [selectedAns, setSelectedAns] = useState('')
	const [canClick, setCanClick] = useState(true)
	const correctStyle = "choice correct"
	const wrongStyle = "choice wrong"
	const basicStyle = "choice"

	const handleCheckAnswer = (choice, idx) => {
		setSelectedAns(choice)
		if (choice === question.correctAns) {
			console.log('here');
			setAnswerCorrect(true)
			setCanClick(false)
		} else {
			setAnswerCorrect(false)
			setCanClick(false)
		}
  };
	
	return (
		<div className="question-block">
			<h1 className="question">{question.question}</h1>
			<AnswerChoices
				choices={question.multChoice}
				handleCheckAnswer={handleCheckAnswer}
				answerCorrect={answerCorrect}
				correctAns={question.correctAns}
				correctStyle={correctStyle}
				wrongStyle={wrongStyle}
				basicStyle={basicStyle}
				selectedAns={selectedAns}
				canClick={canClick}
			/>
		</div>
	);
};

export default QuestionBlock;
