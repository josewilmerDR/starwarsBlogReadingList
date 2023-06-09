import React from "react";
import { BrowserRouter, Route, Routes, Router, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home";
// import { Demo } from "./views/demo";
// import { Single } from "./views/single";
import injectContext from "./store/appContext";

import Navbar from "./component/navbar";
import Footer from "./component/footer";
import CharacterDetails from "./pages/characterDetails.jsx";
import PlanetDetails from "./pages/planetDetails.jsx"
import VehicleDetails from "./pages/vehicleDetails.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Info from "./pages/personalInformation.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />

						<Route path="/register" element={<Register />} />
						<Route path="/info" element={<Info />} />
						<Route path="/login" element={<Login />} />
						{/* <Route path="/demo" element={<Demo />} /> */}
						{/* <Route path="/single/:theid" element={<Single />} /> */}
						<Route path="/people/:id" element={<CharacterDetails />} />
						<Route path="/planets/:id" element={<PlanetDetails />} />
						<Route path="/vehicles/:id" element={<VehicleDetails />} />
						{/* <Route path="/single/:theid" element={<Single />} /> */}
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
