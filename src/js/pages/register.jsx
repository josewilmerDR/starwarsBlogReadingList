import React, { useState, useContext } from "react";
import { Context } from "../store/appContext"

const Register = () => {
  const { store, actions } = useContext(Context)

  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">Nombre completo</label>
            <input type="text" className="form-control" id="exampleInputName" />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword2" className="form-label">Confirmar contraseña</label>
            <input type="password" className="form-control" id="exampleInputPassword2" />
          </div>
          <button type="submit" className="btn btn-primary">Registrarse</button>
        </form>
      </div>

    </>
  )

}

export default Register