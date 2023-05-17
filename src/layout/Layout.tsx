import React from 'react';
import { Navegation } from '../navegation/Navegation';
import { Navbar } from '../components/navbar/Navbar';
import { Footer } from '../components/footer/Footer';

export const Layout = () => {
	return (
		<>
			<Navbar />
			<Navegation />
			<Footer />
		</>
	);
};
