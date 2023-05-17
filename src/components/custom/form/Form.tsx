import * as Yup from 'yup';
import { Formik, Form } from 'formik';

import './Form.css';
import { Link } from 'react-router-dom';

interface Props {
	buttonName: string;
	className?: string;
	style?: React.CSSProperties;
	children: (Args: any) => JSX.Element;
	initalValues: { [x: string]: any };
	type?: 'login' | 'register';
}

const validationSchema = Yup.object();

export const CustomForm = ({ buttonName, className, style, children, initalValues, type }: Props) => {
	return (
		<>
			<Formik
				initialValues={initalValues}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={validationSchema}>
				{(formik) => (
					<Form
						noValidate
						style={style}
						className={`${className} form`}>
						{children({ formik })}

						<button type='submit'>{buttonName}</button>
						{type === 'login' ? (
							<span>
								Don't have account?
								<Link to='/sign-up'> Sign up</Link>
							</span>
						) : (
							<span>
								Already have an account?
								<Link to='/login'> Login</Link>
							</span>
						)}
					</Form>
				)}
			</Formik>
		</>
	);
};
