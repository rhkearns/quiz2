import React from 'react';
import './Choice.scss'

const Choice = ({choice, style, handleCheckAnswer, idx}) => {
  return (
    <p className={style} id={idx} onClick={() => handleCheckAnswer(choice)}>{choice}</p>
  )
}

export default Choice