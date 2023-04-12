// starWarsStore.js
export const starWarsStore = {
  //PEOPLE STORE.
  people: [],
  displayedPeople: [],
  favorites: [], // Añade la lista de favoritos
  nextUrl: "",
  loading: true,
  getImageUrl: (uid) =>
    `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`,

  //PLANET STORE
  planets: [],
  displayedPlanets: [],
  favoritesPlanets: [], // Añade la lista de favoritos
  nextPlanetsUrl: "",
  loadingPlanets: true,
  getImageUrlPlanet: (uid) =>
    `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`,

  //VEHICLE STORE
  vehicles: [],
  displayedVehicles: [],
  favoritesVehicles: [], // Añade la lista de favoritos
  nextVehiclesUrl: "",
  loadingVehicles: true,
  getImageUrlVehicle: (uid) =>
    `https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`,
};

export function starWarsActions(getStore, getActions, setStore) {
  //FETCH PEOPOPLE.
  const fetchPeople = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  //FETCH PLANET
  const fetchPlanets = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

    //FETCH VEHICLE
    const fetchVehicles = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    };

  return {
    //PEOPLE ACTIONS
    loadData: async () => {
      const data = await fetchPeople("https://www.swapi.tech/api/people/");
      setStore({
        people: data.results,
        displayedPeople: data.results.slice(0, 10),
        nextUrl: data.next,
        loading: false,
      });
    },
    loadMoreCharacters: async () => {
      const store = getStore();
      if (store.nextUrl) {
        const data = await fetchPeople(store.nextUrl);
        setStore({
          people: [...store.people, ...data.results],
          displayedPeople: [
            ...store.displayedPeople,
            ...data.results.slice(0, 10),
          ],
          nextUrl: data.next,
        });
      }
    },

    addFavorite: (character) => {
      const store = getStore();

      // Verifica si el personaje ya está en la lista de favoritos
      const isAlreadyFavorite = store.favorites.some(
        (fav) => fav.uid === character.uid
      );

      // Si el personaje no está en la lista de favoritos, agrégalo
      if (!isAlreadyFavorite) {
        setStore({
          ...store,
          favorites: [...store.favorites, character],
        });
      } else {
        // Puedes mostrar un mensaje o manejar la situación como desees si ya es un favorito
        console.log("Este personaje ya está en la lista de favoritos.");
      }
    },

    removeFavorite: (character) => {
      const store = getStore();
      setStore({
        ...store,
        favorites: store.favorites.filter((fav) => fav.uid !== character.uid),
      });
    },

    //PLANETS ACTIONS

    loadPlanetsData: async () => {
      const data = await fetchPlanets("https://www.swapi.tech/api/planets/");
      setStore({
        planets: data.results,
        displayedPlanets: data.results.slice(0, 10),
        nextPlanetsUrl: data.next,
        loadingPlanets: false,
      });
    },
    loadMorePlanets: async () => {
      const store = getStore();
      if (store.nextPlanetsUrl) {
        const data = await fetchPlanets(store.nextPlanetsUrl);
        setStore({
          planets: [...store.planets, ...data.results],
          displayedPlanets: [
            ...store.displayedPlanets,
            ...data.results.slice(0, 10),
          ],
          nextPlanetsUrl: data.next,
        });
      }
    },

    addFavoritePlanet: (planet) => {
      const store = getStore();

      // Verifica si el personaje ya está en la lista de favoritos
      const isAlreadyFavorite = store.favoritesPlanets.some(
        (fav) => fav.uid === planet.uid
      );

      // Si el planeta no está en la lista de favoritos, agrégalo
      if (!isAlreadyFavorite) {
        setStore({
          ...store,
          favoritesPlanets: [...store.favoritesPlanets, planet],
        });
      } else {
        // Puedes mostrar un mensaje o manejar la situación como desees si ya es un favorito
        console.log("Este planeta ya está en la lista de favoritos.");
      }
    },

    removeFavoritePlanet: (planet) => {
      const store = getStore();
      setStore({
        ...store,
        favoritesPlanets: store.favoritesPlanets.filter((fav) => fav.uid !== planet.uid),
      });
    },


    //VEHICLES ACTIONS
    loadVehiclesData: async () => {
      const data = await fetchVehicles("https://www.swapi.tech/api/vehicles/");
      setStore({
        vehicles: data.results,
        displayedVehicles: data.results.slice(0, 10),
        nextVehiclesUrl: data.next,
        loadingVehicles: false,
      });
    },
    loadMoreVehicles: async () => {
      const store = getStore();
      if (store.nextVehiclesUrl) {
        const data = await fetchVehicles(store.nextVehiclesUrl);
        setStore({
          vehicles: [...store.vehicles, ...data.results],
          displayedVehicles: [
            ...store.displayedVehicles,
            ...data.results.slice(0, 10),
          ],
          nextVehiclesUrl: data.next,
        });
      }
    },

    addFavoriteVehicle: (vehicle) => {
      const store = getStore();

      // Verifica si el personaje ya está en la lista de favoritos
      const isAlreadyFavorite = store.favoritesVehicles.some(
        (fav) => fav.uid === vehicle.uid
      );

      // Si el planeta no está en la lista de favoritos, agrégalo
      if (!isAlreadyFavorite) {
        setStore({
          ...store,
          favoritesVehicles: [...store.favoritesVehicles, vehicle],
        });
      } else {
        // Puedes mostrar un mensaje o manejar la situación como desees si ya es un favorito
        console.log("Este planeta ya está en la lista de favoritos.");
      }
    },

    removeFavoriteVehicle: (vehicle) => {
      const store = getStore();
      setStore({
        ...store,
        favoritesVehicles: store.favoritesVehicles.filter((fav) => fav.uid !== vehicle.uid),
      });
    },

  };
}
