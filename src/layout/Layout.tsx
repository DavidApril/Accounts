import React from 'react';
import { Navegation } from '../navegation/Navegation';
import { Navbar, Footer } from '../components';

export const Layout = () => {
	return (
		<>
			<Navbar />
			<Navegation />
			<Footer />
		</>
	);
};
