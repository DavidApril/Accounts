import { Formik, Form } from 'formik';
import './Form.css';
import validationSchema from './validations';
import { TypeMessage } from '..';
interface Props {
	buttonName: string;
	className?: string;
	style?: React.CSSProperties;
	children: (Args: any) => JSX.Element | React.ReactElement[];
	initalValues: { [x: string]: any };
	type: 'login' | 'register' | 'recover';
}

export const CustomForm = ({ buttonName, className, style, children, initalValues, type }: Props) => {
	return (
		<>
			<Formik
				initialValues={initalValues}
				onSubmit={(values) => {
					// console.log(values);
				}}
				validationSchema={validationSchema}>
				{(formik) => (
					<Form
						noValidate
						style={style}
						className={`${className} form`}>
						{typeof children === 'function' ? children(formik) : children}

						<button type='submit'>{buttonName}</button>

						<TypeMessage type={type} />
					</Form>
				)}
			</Formik>
		</>
	);
};
