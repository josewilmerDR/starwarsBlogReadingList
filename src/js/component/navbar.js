import React from "react";
import { Link } from "react-router-dom";

import StarWarsFavorite from "../pages/starWarsFavorites.jsx";

const Navbar = () => {
	return (
		
		<nav className="navbar navbar-light bg-light m-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<StarWarsFavorite />
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;