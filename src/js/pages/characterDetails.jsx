import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  const { store, actions } = useContext(Context)
  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
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
          <h5 className="card-title">{"Name: "+ character.name}</h5>
          <img src={store.getImageUrl(id)} className="card-img-top" alt="..." />
          <h5 className="card-title">Otras caracteristicas</h5>
          <p className="card-text">Height: {character.height} cm</p>
          <p className="card-text">Mass: {character.mass} kg</p>
          <p className="card-text">Hair color: {character.hair_color}</p>
          <p className="card-text">Skin color: {character.skin_color}</p>
          <p className="card-text">Eye color: {character.eye_color}</p>
          <p className="card-text">Birth year: {character.birth_year}</p>
          <p className="card-text">Gender: {character.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
