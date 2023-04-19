// starWarsStore.js
export const usuarioStore = {
  listaUsuarios:[],
  usuario:{
    msg:"I'am a object"
  },
  user:"",
  userLogin:false,
  
};

export function usuarioActions(getStore, getActions, setStore) {
  
  //AQUI LAS CUNIONES FETCH: EJEMPLO
  // //FETCH PEOPOPLE.
  // const fetchPeople = async (url) => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   return data;
  // };

  
  return {

    //REALIZA EL LOGIN DEL USUARIO.
    login: async (email, password) => {
      const store = getStore()
      const actions = getActions()
      console.log("Es la encargada de hacer el login del usuario", email, password)

      let obj = {
        email:email,
        password:password
      }

      let {respuestaJson, response} = await actions.useFetch("/login", obj, "POST")
      
      console.log(response.ok)
      console.log(respuestaJson)

      if(response.ok){
        //ALMACENAMIENTO.
        //LocalStorage: Los datos almacenados en LocalStorage permanecen en el navegador incluso después de cerrar la sesión del usuario o incluso después de cerrar el navegador. Es decir, los datos almacenados en LocalStorage persisten en el tiempo. 
        //SessionStorage: Los datos almacenados en SessionStorage solo duran mientras la sesión del usuario esté activa. Cuando el usuario cierra la sesión o el navegador, los datos almacenados en SessionStorage se eliminan automáticamente.
        //Otra diferencia importante es que los datos almacenados en LocalStorage están disponibles para todas las pestañas y ventanas que se abren con el mismo origen de la página web, mientras que los datos almacenados en SessionStorage solo están disponibles para la pestaña o ventana que los creó.
        localStorage.setItem("token", respuestaJson.token)
        sessionStorage.setItem("token", respuestaJson.token)
        let token = localStorage.getItem("token")
        setStore({...store, userLogin:true})
        // console.log("token", token)
        store.usuario = { msg: "usuario logueado" };

      }else {
        console.log("login fallido")
        localStorage.setItem("token", "")
        sessionStorage.setItem("token", "")
        setStore({...store, userLogin: false})
        store.usuario = { msg: "login fallido" };
      }
      // setStore({
      //   ...store, usuario: {
      //     msg:"usuario logueado"
      //   }
      // })
      return store.usuario;
    },

    logout: async() => {
      let actions = getActions()
      let store = getStore()
      let {respuestaJson, response} = await actions.useFetch("/logout")
      if(response.ok){
        localStorage.setItem("token", "")
        sessionStorage.setItem("token", "")
        setStore({...store, userLogin: false})
      }
    }

    //AQUI LAS ACCIONES QUE SERÁN EXPORTADAS: EJEMPLO
    //PEOPLE ACTIONS
    // loadData: async () => {
    //   const data = await fetchPeople("https://www.swapi.tech/api/people/");
    //   setStore({
    //     people: data.results,
    //     displayedPeople: data.results.slice(0, 10),
    //     nextUrl: data.next,
    //     loading: false,
    //   });
    // },
  };
}
