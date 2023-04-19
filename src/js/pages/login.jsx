import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../js/store/appContext"

const Login = () => {
  const { store, actions } = useContext(Context)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => { console.log(email) }, [email])
  useEffect(() => { console.log(password) }, [password])
  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <div id="emailHelp" className="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label
              className="form-check-label"
              htmlFor="exampleCheck1">Recordar mi cuenta</label>
          </div>
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={(e)=>{
              actions.login(email, password)
            }}
          >
            Iniciar sesión  
          </button>
        </form>
      </div>
    </>
  )

}

export default Login