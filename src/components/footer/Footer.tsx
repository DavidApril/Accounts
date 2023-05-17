import './Footer.css';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-content'>
				<span>
					© 2023 <b> Accounts.</b> All Rights Reserved.
				</span>
				<NavLink to='/privacy'>Privacy</NavLink>
			</div>
		</div>
	);
};
