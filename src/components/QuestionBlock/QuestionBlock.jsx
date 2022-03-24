import React, { useState } from 'react';
import './QuestionBlock.scss';
import AnswerChoices from '../answerChoices/AnswerChoices';

const QuestionBlock = ({ question }) => {
	const [style, setStyle] = useState("choice")
	const [answerCorrect, setAnswerCorrect] = useState()

	const handleCheckAnswer = (choice, idx) => {
		if (choice === question.correctAns) {
			console.log('here');
			setStyle("choice correct")
			setAnswerCorrect(true)
		} else {
			setStyle("choice wrong")
			setAnswerCorrect(false)
		}
  };
	
	return (
		<div className="question-block">
			<h1 className="question">{question.question}</h1>
			<AnswerChoices
				choices={question.multChoice}
				handleCheckAnswer={handleCheckAnswer}
				style={style}
				answerCorrect={answerCorrect}
			/>
		</div>
	);
};

export default QuestionBlock;
