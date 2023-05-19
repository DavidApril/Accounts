import { LazyExoticComponent, lazy } from 'react';
import { HomePage } from '../pages/home/HomePage';
import LoginPage from '../pages/login/LoginPage';
import SignUpPage from '../pages/sign-up/SignUpPage';

type JSXElement = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	Component: LazyExoticComponent<JSXElement> | JSXElement;
	name: string;
}

// const LoginPage = lazy(() => import('../pages/login/LoginPage'));
// const SignUpPage = lazy(() => import('../pages/sign-up/SignUpPage'));

export const PublicRoutes: Route[] = [
	{
		to: '/home',
		path: 'home',
		Component: HomePage,
		name: 'home',
	},
	{
		to: '/sign-up',
		path: 'sign-up',
		Component: SignUpPage,
		name: 'Sign up',
	},
	{
		to: '/login/',
		path: '/login/*',
		Component: LoginPage,
		name: 'Login',
	},
];
