import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const StartPage = () => {
  const [category, setCategory] = useState('')
  const { id } = useParams()
  console.log(id);

  useEffect(() => {

  })

  return (
    <>
      <h1>Start Page</h1>
    </>
  )
}

export default StartPage