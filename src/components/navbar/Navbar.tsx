import React from 'react';

import { PublicRoutes } from '../../navegation/routes';
import { NavLink } from 'react-router-dom';

import './Navbar.css';
import { LogoSVG } from '../Logo/Logo';

export const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='content'>
				<div className='logo'>
					<LogoSVG />
				</div>
				<ul className='menu'>
					<li>
						<NavLink
							to='/sign-up'
							className={({ isActive }) => (isActive ? 'nav-active' : 'nav-link')}>
							Sign in
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/login'
							className={({ isActive }) => (isActive ? 'nav-active' : 'nav-link')}>
							Log in
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};
