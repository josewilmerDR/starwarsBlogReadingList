import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import StarWarsPeople from "../component/starWarsPeople.jsx";
import StarWarsPlanets from "../component/starWarsPlanets.jsx";


import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<StarWarsPeople />
			<br />
			<br />
			<StarWarsPlanets />
		</div>
	);
};
