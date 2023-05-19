import { Link } from 'react-router-dom';

interface Props {
	type: string;
}

export const TypeMessage = ({ type = '' }: Props) => {
	if (type === 'login') {
		return (
			<span>
				Don't have account?
				<Link to='/sign-up'> Sign up</Link>
			</span>
		);
	} else if (type === 'register') {
		return (
			<span>
				Already have an account?
				<Link to='/login'> Login</Link>
			</span>
		);
	} else if (type === 'recover') {
		return <></>;
	}

	return <></>;
};
