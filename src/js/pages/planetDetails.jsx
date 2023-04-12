import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import genericImagen from "../../img/starWarsImage.jpg"

const PlanetDetails = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);

  const { store, actions } = useContext(Context)
  
  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
      const data = await response.json();
      setPlanet(data.result.properties);
      //   console.log(data.result.properties)
      setLoading(false);
    };
    fetchPlanets();
  }, [id]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  const handleImageError = (e) => {
    e.target.src = genericImagen;
  };


  return (
    <div className="container">
      <div className="card mt-5 d-flex">
        <div className="card-body">
          <h5 className="card-title">{"Name: "+ planet.name}</h5>
          <img src={store.getImageUrlPlanet(id)} className="card-img-top" alt={id.name} onError={handleImageError}/>
          <h5 className="card-title">Otras caracteristicas</h5>
          <p className="card-text">Diameter: {planet.diameter} km</p>
          <p className="card-text">Rotation_period: {planet.rotation_period} hr</p>
          <p className="card-text">Orbital_period: {planet.orbital_period} days</p>
          <p className="card-text">Gravity: {planet.gravity}</p>
          <p className="card-text">Population: {planet.population}</p>
          <p className="card-text">climate: {planet.climate}</p>
          <p className="card-text">terrain: {planet.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetails;



// "properties": {
//   "diameter": "10200",
//   "rotation_period": "24",
//   "orbital_period": "4818",
//   "gravity": "1 standard",
//   "population": "1000",
//   "climate": "temperate, tropical",
//   "terrain": "jungle, rainforests",
//   "surface_water": "8",
//   "created": "2023-04-11T17:33:05.664Z",
//   "edited": "2023-04-11T17:33:05.664Z",
//   "name": "Yavin IV",
//   "url": "https://www.swapi.tech/api/planets/3"
// },