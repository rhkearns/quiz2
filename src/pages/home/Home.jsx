import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import quizData from '../../data/quizData';
import CategoryCard from '../../components/categoryCard/CategoryCard';

const Home = () => {
	return (
		<>
			<div className="header">
				<h1 id="title">Quiz for the Nerds</h1>
				<h2 id="message">
					Test your knowledge of the biggest nerdy franchises
				</h2>
			</div>
			<div id="categories">
				{quizData.map(category => (
					<Link key={category.id} to={`/${category.id}`}>
						<CategoryCard
							title={category.title}
							image={category.image}
							cardClass={category.cardClass}
						/>
					</Link>
				))}
			</div>
		</>
	);
};

export default Home;
