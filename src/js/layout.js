import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Contacts } from "./views/Contacts";
import { ContactForm } from "./views/ContactForm";
import injectContext from "./store/appContext";
import { EditContactForm } from "./views/EditContactForm";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Routes>
						<Route path="/" element={<Contacts />} />
						<Route path="/contactForm" element={<ContactForm />} />
						<Route path="/editContactForm/:id" element={<EditContactForm />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);