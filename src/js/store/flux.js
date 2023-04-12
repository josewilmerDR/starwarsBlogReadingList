import { starWarsStore, starWarsActions } from "./starWarsStore";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			...starWarsStore,
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			useFetch: async (endpoint, method = "GET") => {
				let url = "https://www.swapi.tech/api" + endpoint;
				let response = await fetch(url, {
				  method: method,
				  headers: { "Content-Type": "application/json" },
				  body: null,
				});
		
				let respuestaJson = await response.json();
		
				return { respuestaJson, response };
			  },
			  ...starWarsActions(getStore, getActions, setStore),

		}
	};
};

export default getState;
