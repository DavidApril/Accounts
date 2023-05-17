import { Suspense } from 'react';
import { PublicRoutes } from './routes';
import { Navigate, Route, Routes } from 'react-router-dom';

export const Navegation = () => {
	return (
		<>
			<Suspense fallback={<h2>Loading</h2>}>

			<Routes>
				{PublicRoutes.map((route) => (
					<Route
					key={route.to}
					path={route.path}
					element={<route.Component />}
					/>
					))}

				<Route
					path='/*'
					element={<Navigate to={PublicRoutes[0].to} />}
					/>
			</Routes>
					</Suspense>
		</>
	);
};
