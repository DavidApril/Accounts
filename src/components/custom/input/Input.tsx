import { useField, ErrorMessage } from 'formik';

import './Input.css';

interface Props {
	name: string;
	label: string;
	type?: 'text' | 'email' | 'password';
	style?: React.CSSProperties;
	className?: string;
	[x: string]: any;
}

export const CustomInput = ({ className, style, ...props }: Props) => {
	const [field] = useField(props);

	return (
		<>
			<label htmlFor={props.id || props.name}>{props.label}</label>
			<input
				style={style}
				className={`${className} text-input`}
				type={props.type ? props.type : 'text'}
				{ ...field }
				{ ...props }
			/>

			<ErrorMessage
				className='error-message'
				name={props.name}
				component='span'
			/>
		</>
	);
};
