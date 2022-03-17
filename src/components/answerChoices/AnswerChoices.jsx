import React from 'react';
import './AnswerChoices.scss';

const AnswerChoices = ({ choices }) => {
	return (
		<>
			{choices.map(choice => (
				<div className='choice-block'>
          <p className="choice" id={choices.indexOf(choice) }>{choice}</p>
				</div>
			))}
		</>
	);
};

export default AnswerChoices;
