import React from 'react';
import './AnswerChoices.scss';
import Choice from '../Choice/Choice';

const AnswerChoices = ({ choices, handleCheckAnswer, style }) => {
	return (
		<div className='choice-block'>
			{choices.map(choice => (
				<Choice
					choice={choice}
					style={style}
					handleCheckAnswer={handleCheckAnswer}
					idx={choices.indexOf(choice)}
				/>
			))}
		</div>
	);
};

export default AnswerChoices;
