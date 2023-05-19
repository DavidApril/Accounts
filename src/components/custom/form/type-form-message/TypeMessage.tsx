import { Link } from 'react-router-dom';

interface Props {
	type: string;
	className?: string;
	style?: React.CSSProperties;
}

export const TypeMessage = ({ type = '', className, style }: Props) => {
	if (type === 'login') {
		return (
			<span
				className={`${className}`}
				style={style}>
				Don't have account?
				<Link to='/sign-up'> Sign up</Link>
			</span>
		);
	} else if (type === 'register') {
		return (
			<span
				className={`${className}`}
				style={style}>
				Already have an account?
				<Link to='/login'> Login</Link>
			</span>
		);
	} else if (type === 'recover') {
		return (
			<span
				className={`${className}`}
				style={style}>
				Don't have account?
				<Link to='/sign-up'> Sign up</Link>
			</span>
		);
	}

	return <></>;
};
