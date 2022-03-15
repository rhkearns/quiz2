import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<div id="nav">
			<Link to='/'>Home</Link>
		</div>
	);
};

export default NavBar;
