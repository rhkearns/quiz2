import React, { useState } from 'react';
import './QuestionBlock.scss';
import AnswerChoices from '../answerChoices/AnswerChoices';

const QuestionBlock = ({ question }) => {
	const [style, setStyle] = useState("choice")

	const handleCheckAnswer = (choice, idx) => {
		if (choice === question.correctAns) {
			console.log('here');
			setStyle("choice correct")
		}
  };
	
	return (
		<div className="question-block">
			<h1 className="question">{question.question}</h1>
			<AnswerChoices
				choices={question.multChoice}
				handleCheckAnswer={handleCheckAnswer}
				style={style}
			/>
		</div>
	);
};

export default QuestionBlock;
