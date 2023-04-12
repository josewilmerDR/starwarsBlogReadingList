import React, { useEffect, useState } from "react";
import "../../styles/starWars.css"

const StarWarsPlanets = () => {
  const [planets, setPlanets] = useState([]);
  const [displayedPlanets, setDisplayedPlanets] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchPlanets = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPlanets("https://www.swapi.tech/api/planets/");
      setPlanets(data.results);
      setDisplayedPlanets(data.results.slice(0, 10));
      setNextUrl(data.next);
      setLoading(false);
    };
    loadData();
  }, []);

  const handleShowMore = async () => {
    if (nextUrl) {
      const data = await fetchPlanets(nextUrl);
      setPlanets([...planets, ...data.results]);
      setDisplayedPlanets([...displayedPlanets, ...data.results.slice(0, 10)]);
      setNextUrl(data.next);
    }
  };

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {displayedPlanets && displayedPlanets.length > 0 ? displayedPlanets.map((item, index) => (
            <div key={index} className="col-md-4 col-sm-6 my-3">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p    className="card-text">
                    This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <div className="icon">
                  <a href="#" className="btn btn-primary">Learn more</a>
                  <i className="fa-solid fa-heart"></i>
                  </div> 
                </div>
              </div>
            </div> 
          )):<h3>NO hay datos que mostrar</h3>}
        </div>
        {nextUrl && (
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



// import React, { useContext, useEffect, useState } from "react";
// import "../../styles/starWars.css";
// import { Link } from "react-router-dom";
// import { Context } from "../store/appContext";

// const StarWarsPlanets = () => {
//   const { store, actions } = useContext(Context);

//   useEffect(() => {
//     if (store.loading) {
//       actions.loadData();
//     }
//   }, []);

//   //relacionado con favorite.
//   //Agrega un estado local para cada personaje en el componente StarWarsPlanets:
//   const [favorites, setFavorites] = useState([]);

//   //Actualiza el estado local de favoritos cada vez que se agregue o elimine un personaje de la lista de favoritos. 
//   //Esto se puede hacer utilizando useEffect y escuchando los cambios en "store.favorites"
//   useEffect(() => {
//     setFavorites(store.favorites);
//   }, [store.favorites]);

//   //Determina si el personaje es un favorito y muestra el ícono del corazón en rojo si es así. 
//   //Puedes hacerlo utilizando una función que comprueba si el personaje está en la lista de favoritos y aplicando una clase CSS condicionalmente:
//   const isFavorite = (character) => {
//     return favorites.some((fav) => fav.uid === character.uid);
//   };

//   const handleShowMore = () => {
//     actions.loadMoreCharacters();
//   };

//   if (store.loading) {
//     return <h1>Cargando...</h1>;
//   }

//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           {store.displayedPlanets.map((item, index) => (
//             <div key={index} className="col-md-4 col-sm-6 my-3">
//               <div className="card">
//                 <img src={store.getImageUrlPlanet(item.uid)} className="card-img-top" alt="..." />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.name}</h5>
//                   <p className="card-text">
//                     This is a wider card with supporting text below as a
//                     natural lead-in to additional content. This content is a
//                     little bit longer.
//                   </p>
//                   <div className="icon">
//                     <Link to={`/planets/${item.uid}`} className="btn btn-primary">Learn more</Link>
//                     {/* <i onClick={() => actions.addFavorite(item)} className="fa-solid fa-heart"></i> */}
//                     <i
//                       className={`fa-solid fa-heart ${isFavorite(item) ? "text-danger" : "text-secondary"
//                         }`}
//                       onClick={() => actions.addFavorite(item)}></i>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {store.nextUrl && (
//           <div className="text-center mt-3">
//             <button className="btn btn-primary" onClick={handleShowMore}>
//               Show more characters
//             </button>
//           </div>
//         )}
//       </div >
//     </>
//   );
// };

// export default StarWarsPlanets;
