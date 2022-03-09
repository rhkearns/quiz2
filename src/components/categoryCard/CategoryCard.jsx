import React from 'react';
import Card from 'react-bootstrap/Card';
import './CategoryCard.scss'
import hpImage from '../../images/hpImage.png';
import ddImage from '../../images/ddImage.png';
import gotImage from '../../images/gotImage.png';
import lotrImage from '../../images/lotrImage.png';
import mcuImage from '../../images/mcuImage.png';
import swImage from '../../images/swImage.png';

const CategoryCard = ({ title, image, cardClass }) => {
	const findImage = image => {
		switch (image) {
			case 'hpImage':
				return hpImage;
			case 'ddImage':
				return ddImage;
			case 'gotImage':
				return gotImage;
			case 'lotrImage':
				return lotrImage;
			case 'mcuImage':
				return mcuImage;
			case 'swImage':
				return swImage;
			default:
				break;
		}
	};

	return (
		<Card className="category-card" id={cardClass}>
			<Card.Img variant="top" src={findImage(image)} alt="category image" />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
			</Card.Body>
		</Card>
	);
};

export default CategoryCard;
