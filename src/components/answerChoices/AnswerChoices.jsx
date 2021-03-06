import React from 'react';
import './AnswerChoices.scss';
import Choice from '../Choice/Choice';

const AnswerChoices = ({
	choices,
	handleCheckAnswer,
	answerCorrect,
	correctAns,
	correctStyle,
	wrongStyle,
	basicStyle,
	selectedAns,
	canClick,
}) => {
	return (
		<div className="choice-block">
			{choices.map(choice => {
				if (answerCorrect === true && choice === correctAns)
					return (
						<Choice
							choice={choice}
							style={correctStyle}
							handleCheckAnswer={handleCheckAnswer}
							key={choices.indexOf(choice)}
							answerCorrect={answerCorrect}
							correctAns={correctAns}
							canClick={canClick}
						/>
					);
				else if (answerCorrect === false && choice === correctAns)
					return (
						<Choice
							choice={choice}
							style={correctStyle}
							handleCheckAnswer={handleCheckAnswer}
							key={choices.indexOf(choice)}
							answerCorrect={answerCorrect}
							correctAns={correctAns}
							canClick={canClick}
						/>
					);
				else if (answerCorrect === false && choice === selectedAns)
					return (
						<Choice
							choice={choice}
							style={wrongStyle}
							handleCheckAnswer={handleCheckAnswer}
							key={choices.indexOf(choice)}
							answerCorrect={answerCorrect}
							correctAns={correctAns}
							canClick={canClick}
						/>
					);
				else
					return (
						<Choice
							choice={choice}
							style={basicStyle}
							handleCheckAnswer={handleCheckAnswer}
							key={choices.indexOf(choice)}
							answerCorrect={answerCorrect}
							correctAns={correctAns}
							canClick={canClick}
						/>
					);
			})}
		</div>
	);
};

export default AnswerChoices;
