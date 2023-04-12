import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import genericImagen from "../../img/starWarsImage.jpg"

const VehicleDetails = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);

  const { store, actions } = useContext(Context)
  
  useEffect(() => {
    const fetchVehicles = async () => {
      const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
      const data = await response.json();
      setVehicle(data.result.properties);
      //   console.log(data.result.properties)
      setLoading(false);
    };
    fetchVehicles();
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
          <h5 className="card-title">{"Name: "+ vehicle.name}</h5>
          <img src={store.getImageUrlVehicle(id)} className="card-img-top" alt={id.name} onError={handleImageError}/>
          <h5 className="card-title">Otras caracteristicas</h5>
          <p className="card-text">Model: {vehicle.model}</p>
          <p className="card-text">Vehicle class: {vehicle.vehicle_class}</p>
          <p className="card-text">Manufacturer: {vehicle.manufacturer}</p>
          <p className="card-text">Cost in credits: {vehicle.cost_in_credits}</p>
          <p className="card-text">Passengers: {vehicle.passengers}</p>
          <p className="card-text">Cargo capacity: {vehicle.cargo_capacity}</p>
          <p className="card-text">Url: {vehicle.url}</p>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;


// "properties": {
//   "model": "Digger Crawler",
//   "vehicle_class": "wheeled",
//   "manufacturer": "Corellia Mining Corporation",
//   "cost_in_credits": "150000",
//   "length": "36.8 ",
//   "crew": "46",
//   "passengers": "30",
//   "max_atmosphering_speed": "30",
//   "cargo_capacity": "50000",
//   "consumables": "2 months",
//   "films": [],
//   "pilots": [],
//   "created": "2020-09-17T17:46:31.415Z",
//   "edited": "2020-09-17T17:46:31.415Z",
//   "name": "Sand Crawler",
//   "url": "https://www.swapi.tech/api/vehicles/4"
// },