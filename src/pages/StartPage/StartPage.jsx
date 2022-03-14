import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const StartPage = () => {
  const [category, setCategory] = useState('')
  const { path } = useParams()
  // console.log(path);
  
  useEffect(() => {

  })

  return (
    <>
      <h1>Start Page</h1>
    </>
  )
}

export default StartPage