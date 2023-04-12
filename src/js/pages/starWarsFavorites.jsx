import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const StarWarsFavorite = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="favoritesDropdown"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Favoritos
      </button>
      <div className="dropdown-menu" aria-labelledby="favoritesDropdown">
        {store.favorites.length === 0 ? (
          <p className="dropdown-item">No hay favoritos</p>
        ) : (
          store.favorites.map((fav, index) => (
            <div key={index} className="dropdown-item">
              <Link to={`/people/${fav.uid}`} className="favorite-name">{fav.name}</Link>
              <i
                // className="bi bi-x-circle-fill text-danger ml-2"
                className="fa-solid fa-trash"
                onClick={() => actions.removeFavorite(fav)}
              ></i>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default StarWarsFavorite;
