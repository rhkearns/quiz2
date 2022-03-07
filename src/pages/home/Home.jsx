import React from 'react';
import quizData from '../../data/quizData';
import CategoryCard from '../../components/categoryCard/CategoryCard';

const Home = () => {
  console.log(quizData);
  
  return (
    <>
    <h1>HOME</h1>
      {quizData.map((category) => (
        <CategoryCard title={category.catTitle } image={category.catImage}/>
      ))}
    </>
  )
}

export default Home