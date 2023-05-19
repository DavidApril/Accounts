import { Formik, Form, FormikHelpers } from 'formik';
import './Form.css';
import { TypeMessage } from '..';
import * as Yup from 'yup';

interface Props {
	buttonName: string;
	className?: string;
	style?: React.CSSProperties;
	children: (Args: any) => JSX.Element | React.ReactElement[];
	initialValues: { [x: string]: any };
	type: 'login' | 'register' | 'recover';
	onSubmit: (argr: any) => void;
	validationSchema: Yup.ObjectSchema<
		{
			[x: string]: any;
		},
		Yup.AnyObject,
		{
			[x: string]: any;
		},
		''
	>;
}

export const CustomForm = ({ buttonName, className, style, children, initialValues, type, onSubmit, validationSchema }: Props) => {
	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={(values) => onSubmit(values)}
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
