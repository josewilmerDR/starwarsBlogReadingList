import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import StarWarsPeople from "../component/starWarsPeople.jsx";
import StarWarsStarships from "../component/starWarsStarships.jsx";
import StarWarsPlanets from "../component/starWarsPlanets.jsx";

const Home = () => (
  <div className="container">
    <StarWarsPeople />
    <br />
    <br />
    <StarWarsPlanets />
    <br />
    <br />
    <StarWarsStarships />
  </div>
);

export default Home;