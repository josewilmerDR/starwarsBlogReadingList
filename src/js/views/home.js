import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import StarWarsPeople from "../component/starWarsPeople.jsx";
import StarWarsPlanets from "../component/starWarsPlanets.jsx";
import StarWarsVehicles from "../component/starWarsVehicles.jsx";

const Home = () => (
  <div className="container">
    <h2>Characters</h2>
    <StarWarsPeople />
    <br />
    <br />
    <h2>Planets</h2>
    <StarWarsPlanets />
    <br />
    <br />
    <h2>Vehicles</h2>
    <StarWarsVehicles />
  </div>
);

export default Home;