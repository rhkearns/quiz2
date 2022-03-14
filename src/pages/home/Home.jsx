import React from 'react';
import './Home.scss';
import quizData from '../../data/quizData';
import CategoryCard from '../../components/categoryCard/CategoryCard';

const Home = () => {
	// console.log(quizData);

	return (
    <>
      <div className="header">
        <h1 id="title">Nerd Quiz</h1>
        <h2 id="message">Test your knowledge of the biggest nerdy franchises</h2>
      </div>
			<div id="categories">
				{quizData.map(category => (
					<CategoryCard
						title={category.catTitle}
						image={category.catImage}
						cardClass={category.catCardClass}
					/>
				))}
			</div>
		</>
	);
};

export default Home;
