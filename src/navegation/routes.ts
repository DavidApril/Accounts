import { LazyExoticComponent, lazy } from 'react';

type JSXElement = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	Component: LazyExoticComponent<JSXElement> | JSXElement;
	name: string;
}

const HomePage = lazy(() => import('../pages/home/HomePage'));
const LoginPage = lazy(() => import('../pages/login/LoginPage'));
const SignUpPage = lazy(() => import('../pages/sign-up/SignUpPage'));
const PrivacyPage = lazy(() => import('../pages/privacy/PrivacyPage'));

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
	{
		to: 'privacy',
		path: 'privacy',
		Component: PrivacyPage,
		name: 'Privacy',
	},
];
