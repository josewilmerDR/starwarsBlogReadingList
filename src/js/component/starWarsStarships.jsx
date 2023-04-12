import React, { useEffect, useState } from "react";
import "../../styles/starWars.css"

const StarWarsStarships = () => {
  const [starships, setStarships] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchStarships = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchStarships("https://www.swapi.tech/api/starships/");
      setStarships(data.results);
      setDisplayedStarships(data.results.slice(0, 10));
      setNextUrl(data.next);
      setLoading(false);
    };
    loadData();
  }, []);

  const handleShowMore = async () => {
    if (nextUrl) {
      const data = await fetchStarships(nextUrl);
      setStarships([...starships, ...data.results]);
      setDisplayedStarships([...displayedStarships, ...data.results.slice(0, 10)]);
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
          {displayedStarships && displayedStarships.length > 0 ? displayedStarships.map((item, index) => (
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
              Show more starships
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default StarWarsStarships;
