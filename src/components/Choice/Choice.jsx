import React from 'react';
import './Choice.scss';

const Choice = ({
	choice,
	style,
	handleCheckAnswer,
	key,
	answerCorrect,
	correctAns,
	canClick,
}) => {
	return (
		<p
			className={style}
			id={key}
			onClick={() => {
				canClick && handleCheckAnswer(choice);
			}}
		>
			{choice}
		</p>
	);
};

export default Choice;
