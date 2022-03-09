import React from 'react';
import Card from 'react-bootstrap/Card'

const CategoryCard = ({title, image}) => {
  return (
    <Card >
      <Card.Img />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default CategoryCard