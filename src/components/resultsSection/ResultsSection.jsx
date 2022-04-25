import React from 'react';
import './ResultsSection.scss';

const ResultsSection = ({ score }) => {
	return (
		<div id="results">
			{score <= 5 && <h1>TOO BAD</h1>}
			{score > 5 && score < 8 && <h1>WELL DONE</h1>}
			{score >= 8 && <h1>CONGRATULATIONS</h1>}
			<h3>You answered {score} out of 10 correctly!</h3>
		</div>
	);
};

export default ResultsSection;
