import React, { useContext, useEffect, useState } from "react";
import "../../styles/starWars.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import genericImagen from "../../img/starWarsImage.jpg"


const StarWarsPlanets = () => {
  const { store, actions } = useContext(Context);
  // const { displayedPlanets, nextUrl } = store; //Una forma de importar solo unas variables desde el el store.

  useEffect(() => {
    if (store.loadingPlanets) {
      actions.loadPlanetsData();
    }
  }, []);

  //MANEJO DE FAVORITOS
  const [favoritesPlanets, setFavoritesPlanets] = useState([]);

  useEffect(() => {
    setFavoritesPlanets(store.favoritesPlanets);
  }, [store.favoritesPlanets]);

  const isFavoritePlanet = (planet) => {
    return favoritesPlanets.some((fav) => fav.uid === planet.uid);
  };

  const handleFavoriteClick = (planet) => {
    if (isFavoritePlanet(planet)) {
      actions.removeFavoritePlanet(planet);
    } else {
      actions.addFavoritePlanet(planet);
    }
  };

  //OTROS
  const handleShowMore = () => {
    actions.loadMorePlanets();
  };

  if (store.loadingPlanets) {
    return <h1>Cargando...</h1>;
  }

  const handleImageError = (e) => {
    e.target.src = genericImagen;
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {store.displayedPlanets && store.displayedPlanets.length > 0 ? store.displayedPlanets.map((item, index) => (
            <div key={index} className="col-md-4 col-sm-6 my-3">
              <div className="card">
                <img src={store.getImageUrlPlanet(item.uid)} className="card-img-top" alt={item.name} onError={handleImageError} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <div className="icon">
                    <Link to={`/planets/${item.uid}`} className="btn btn-primary">Learn more</Link>
                    {/* <i onClick={() => actions.addFavorite(item)} className="fa-solid fa-heart"></i> */}
                    <i
                      className={`fa-solid fa-heart ${isFavoritePlanet(item) ? "text-danger" : "text-secondary"
                        }`}
                      onClick={() => handleFavoriteClick(item)}></i>
                  </div>
                </div>
              </div>
            </div>
          )) : <h3>NO hay datos que mostrar</h3>}
        </div>
        {store.nextPlanetsUrl && (
          <div className="text-center mt-3">
            <button className="btn btn-primary" onClick={handleShowMore}>
              Show more planets
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default StarWarsPlanets;