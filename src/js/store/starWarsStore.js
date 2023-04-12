// starWarsStore.js
export const starWarsStore = {
  people: [],
  displayedPeople: [],
  favorites: [], // Añade la lista de favoritos
  nextUrl: "",
  loading: true,
  getImageUrl: (uid) =>
    `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`,
};

export function starWarsActions(getStore, getActions, setStore) {
  const fetchPeople = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  return {
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
  };
}
