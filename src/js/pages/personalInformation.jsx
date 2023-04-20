import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import WithAuth from "../component/Auth/withAuth";

const Info = () => {
  const { store, actions } = useContext(Context);
  const [infoUsuario, setInfoUsuario] = useState(null);

  useEffect(() => {
    const cargaDatos = async () => {
      let { respuestaJson, response } = await actions.useFetch("/protected");
      console.log(response.ok);
      console.log(respuestaJson);
      if (response.ok) {
        console.log("Nombre del usuario recibido:", respuestaJson.first_name);
        setInfoUsuario(respuestaJson.first_name);
        console.log("Datos de respuesta completos:", respuestaJson);
      }
    };
    cargaDatos();
  }, []);

  return (
    <>
      <div>
        {infoUsuario ? (
          <span>eres el usuario: {infoUsuario}</span>
        ) : (
          <span>Cargando información del usuario...</span>
        )}
      </div>
    </>
  );
};

export default WithAuth(Info);



















// import React, { useState, useContext, useEffect } from "react";
// import { Context } from "../store/appContext";
// import WithAuth from "../component/Auth/withAuth";

// // import React, { useState, useEffect, useContext } from "react";
// // import { Context } from "../store/appContext"
// // import WithAuth from "../component/Auth/withAuth";


// const Info = () => {
//   const { store, actions } = useContext(Context)
//   const [infoUsuario, setInfoUsuario] = useState("ninguno")

//   useEffect(() => {
//     const cargaDatos = async () => {
//       let { respuestaJson, response } = await actions.useFetch("/protected")
//       console.log(response.ok)
//       console.log(respuestaJson)
//       if (response.ok) {
//         setInfoUsuario(respuestaJson.first_name)
//       }
//     }
//     cargaDatos()
//   }, [])

//   return (<>
//     <div>eres el usuario: {infoUsuario}</div>
//   </>)
// }

// export default WithAuth(Info);




// import React, { useState, useEffect, useContext } from "react";
// import { Context } from "../store/appContext"
// import WithAuth from "../component/Auth/withAuth";

// const Info = () => {
//     let { store, actions } = useContext(Context)
//     const [infoUsuario, setInfoUsuario] = useState("ninguno")

//     useEffect(() => {
//         const cargaDatos = async () => {
//             let { respuestaJson, response } = await actions.useFetch("/protected")
//             console.log(response.ok)
//             console.log(respuestaJson)
//             if (response.ok) {
//                 setInfoUsuario(respuestaJson.first_name)
//             }
//         }
//         cargaDatos()
//     }, [])

//     return (
//         <>
//             <div>
//                 eres el usuario: {infoUsuario}
//             </div>
//         </>
//     )
// }

// export default WithAuth(Info)