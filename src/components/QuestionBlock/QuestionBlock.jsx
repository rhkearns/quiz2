import React from 'react';
import './QuestionBlock.scss'
import AnswerChoices from '../answerChoices/AnswerChoices';

const QuestionBlock = ({ question }) => {
	return (
		<div className='question-block'>
			<h1 className='question'>{question.question}</h1>
			<AnswerChoices choices={question.multChoice} />
		</div>
	);
};

export default QuestionBlock;
