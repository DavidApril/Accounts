import { useField, ErrorMessage } from 'formik';

import './Input.css';

interface Props {
	label: string;
	name: string;
	type?: string;
	className?: string;
	[x: string]: any;
}

export const CustomInput = ({ className, ...props }: Props) => {
	const [field] = useField(props);

	return (
		<>
			<label htmlFor={props.id || props.name}>{props.label}</label>
			<input
				className={`${className} text-input`}
				type={props.type ? props.type : 'text'}
				{...field}
				{...props}
			/>

			<ErrorMessage
				className='error-message'
				name={props.name}
				component='span'
			/>
		</>
	);
};
