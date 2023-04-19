import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
// import { useNavigate } from "react-router-dom";
import { Navigate} from "react-router-dom";
// import { Component } from "react/cjs/react.production.min";

const WithAuth = (Component) => { //Hight Order Componet HOC
  const AuthRoute = () => {
    const { store, actions } = useContext(Context);
    // const navigate = useNavigate()
    const isAuth = store.userLogin;
    if (isAuth) {
      return <Component />;
    } else {
        return <Navigate to="/login" />
        // return null
    }
  };
  return AuthRoute;
};

export default WithAuth