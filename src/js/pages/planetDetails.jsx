import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetDetails = () => {
  const { id } = useParams();
  const [planet, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  const { store, actions } = useContext(Context)
  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
      const data = await response.json();
      setCharacter(data.result.properties);
      //   console.log(data.result.properties)
      setLoading(false);
    };
    fetchCharacter();
  }, [id]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div className="container">
      <div className="card mt-5 d-flex">
        <div className="card-body">
          <h5 className="card-title">{"Name: "+ planet.name}</h5>
          <img src={store.getImageUrl(id)} className="card-img-top" alt="..." />
          <h5 className="card-title">Otras caracteristicas</h5>
          <p className="card-text">Height: {planet.height} cm</p>
          <p className="card-text">Mass: {planet.mass} kg</p>
          <p className="card-text">Hair color: {planet.hair_color}</p>
          <p className="card-text">Skin color: {planet.skin_color}</p>
          <p className="card-text">Eye color: {planet.eye_color}</p>
          <p className="card-text">Birth year: {planet.birth_year}</p>
          <p className="card-text">Gender: {planet.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetails;
