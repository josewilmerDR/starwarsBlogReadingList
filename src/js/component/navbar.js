import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

import StarWarsFavorite from "../pages/starWarsFavorites.jsx";

const Navbar = () => {
	const {store, actions} = useContext(Context)
  return (
    <nav className="navbar navbar-light bg-light m-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">React Boilerplate</span>
      </Link>
      <StarWarsFavorite />
      <Link to="/login">
        <span className="navbar-brand mb-0 h1">Iniciar sesión</span>
      </Link>
      {store.userLogin ? (
        <Link to="/info">
          <span className="navbar-brand mb-0 h1">Cuenta</span>
        </Link>
      ) : (
        <></>
      )}
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-primary">
            Check the Context in action
          </button>
        </Link>
      </div>
      {store.userLogin ? (
       <button onClick={(e)=>{actions.logout()}}>Logout</button>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;
