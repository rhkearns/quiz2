import React from 'react';
import './Choice.scss';

const Choice = ({ choice, style, handleCheckAnswer, key, answerCorrect, correctAns }) => {
	return (
      <p className={style} id={key} onClick={() => handleCheckAnswer(choice)}>
        {choice}
      </p>
	);
};

export default Choice;
