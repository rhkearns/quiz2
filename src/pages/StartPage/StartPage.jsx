import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import quizData from '../../data/quizData';

const StartPage = () => {
  const [category, setCategory] = useState({})
  const { id } = useParams()
  console.log(id);

  useEffect(() => {
    const selectedCategory = quizData.find(category => category.id === id)
    setCategory(selectedCategory)
  }, [])

  console.log(category);

  return (
    <>
      <h1>{category.title}</h1>
    </>
  )
}

export default StartPage