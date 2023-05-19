import { Suspense } from 'react';
import { PublicRoutes } from './routes';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Loader } from '../components';

export const Navegation = () => {
	return (
		<>
			
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
	
		</>
	);
};
