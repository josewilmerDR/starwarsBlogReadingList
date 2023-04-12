import React, { useContext, useEffect, useState } from "react";
import "../../styles/starWars.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import genericImagen from "../../img/starWarsImage.jpg"


const StarWarsVehicles = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.loadingVehicles) {
      actions.loadVehiclesData();
    }
  }, []);

  //relacionado con favorite.
  //Agrega un estado local para cada personaje en el componente StarWarsVehicles:
  const [favorites, setFavorites] = useState([]);

  //Actualiza el estado local de favoritos cada vez que se agregue o elimine un personaje de la lista de favoritos. 
  //Esto se puede hacer utilizando useEffect y escuchando los cambios en "store.favorites"
  useEffect(() => {
    setFavorites(store.favorites);
  }, [store.favorites]);

  //Determina si el personaje es un favorito y muestra el ícono del corazón en rojo si es así. 
  //Puedes hacerlo utilizando una función que comprueba si el personaje está en la lista de favoritos y aplicando una clase CSS condicionalmente:
  const isFavorite = (character) => {
    return favorites.some((fav) => fav.uid === character.uid);
  };

  const handleShowMore = () => {
    actions.loadMoreVehicles();
  };

  if (store.loadingVehicles) {
    return <h1>Cargando...</h1>;
  }

  const handleImageError = (e) => {
    e.target.src = genericImagen;
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {store.displayedVehicles.map((item, index) => (
            <div key={index} className="col-md-4 col-sm-6 my-3">
              <div className="card">
                <img src={store.getImageUrlVehicle(item.uid)} className="card-img-top" alt={item.name} onError={handleImageError} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <div className="icon">
                    <Link to={`/vehicles/${item.uid}`} className="btn btn-primary">Learn more</Link>
                    {/* <i onClick={() => actions.addFavorite(item)} className="fa-solid fa-heart"></i> */}
                    <i
                      className={`fa-solid fa-heart ${isFavorite(item) ? "text-danger" : "text-secondary"
                        }`}
                      onClick={() => actions.addFavorite(item)}></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {store.nextVehiclesUrl && (
          <div className="text-center mt-3">
            <button className="btn btn-primary" onClick={handleShowMore}>
              Show more vehicles
            </button>
          </div>
        )}
      </div >
    </>
  );
};

export default StarWarsVehicles;







// import React, { useEffect, useState } from "react";
// import "../../styles/starWars.css"

// const StarWarsVehicles = () => {
//   const [starships, setStarships] = useState([]);
//   const [displayedStarships, setDisplayedStarships] = useState([]);
//   const [nextUrl, setNextUrl] = useState("");
//   const [loading, setLoading] = useState(true);

//   const fetchStarships = async (url) => {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   };

//   useEffect(() => {
//     const loadData = async () => {
//       const data = await fetchStarships("https://www.swapi.tech/api/starships/");
//       setStarships(data.results);
//       setDisplayedStarships(data.results.slice(0, 10));
//       setNextUrl(data.next);
//       setLoading(false);
//     };
//     loadData();
//   }, []);

//   const handleShowMore = async () => {
//     if (nextUrl) {
//       const data = await fetchStarships(nextUrl);
//       setStarships([...starships, ...data.results]);
//       setDisplayedStarships([...displayedStarships, ...data.results.slice(0, 10)]);
//       setNextUrl(data.next);
//     }
//   };

//   if (loading) {
//     return <h1>Cargando...</h1>;
//   }

//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           {displayedStarships && displayedStarships.length > 0 ? displayedStarships.map((item, index) => (
//             <div key={index} className="col-md-4 col-sm-6 my-3">
//               <div className="card">
//                 <img src="..." className="card-img-top" alt="..." />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.name}</h5>
//                   <p    className="card-text">
//                     This is a wider card with supporting text below as a
//                     natural lead-in to additional content. This content is a
//                     little bit longer.
//                   </p>
//                   <div className="icon">
//                   <a href="#" className="btn btn-primary">Learn more</a>
//                   <i className="fa-solid fa-heart"></i>
//                   </div> 
//                 </div>
//               </div>
//             </div> 
//           )):<h3>NO hay datos que mostrar</h3>}
//         </div>
//         {nextUrl && (
//           <div className="text-center mt-3">
//             <button className="btn btn-primary" onClick={handleShowMore}>
//               Show more starships
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default StarWarsVehicles;
