import React from 'react';
import './ResultsSection.scss';

const ResultsSection = ({ score }) => {
	return (
		<div id="results">
			{score <= 5 && <h1 id="result-head">TOO BAD</h1>}
			{score > 5 && score < 8 && <h1 id="result-head">WELL DONE</h1>}
			{score >= 8 && <h1 id="result-head">CONGRATULATIONS</h1>}
			<h3 id="result-message">You answered {score} out of 10 correctly!</h3>
		</div>
	);
};

export default ResultsSection;
