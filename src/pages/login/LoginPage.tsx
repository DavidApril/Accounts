import loginForm from '../../data/LoginForm.json';

import { RecoverPasswordPage } from './pages/RecoverPasswordPage';
import { CustomForm, GoogleButton, CustomInput } from '../../components';
import { Link, Route, Routes } from 'react-router-dom';
import useFormValidation from '../../hooks/useFormValidation';

import './LoginPage.css';

export const LoginPage = () => {
	
	const { initialValues, validationSchema } = useFormValidation(loginForm);

	const handleSubmit = (values: any) => {
		console.log(values);
	};

	return (
		<section className='login-page'>
			<div className='login-page-text'>
				<span>
					<b>Accounts</b> <br /> says <br /> <h2>Welcome back!</h2>
				</span>
			</div>
			<div className='login-form'>
				<CustomForm
					initialValues={initialValues}
					validationSchema={validationSchema}
					buttonName='Sign up'
					onSubmit={handleSubmit}
					type='register'>
					{() => (
						<>
							<h3>
								Hey, <b>Hello!</b> <br />
								<span>Continue with Google or enter your details.</span>
							</h3>

							<GoogleButton />

							<span>or</span>

							{loginForm.map(({ label, name, type, placeholder }) => {
								if (type === 'text' || type === 'password' || type === 'email') {
									return (
										<CustomInput
											key={name}
											label={label}
											name={name}
											type={type}
											placeholder={placeholder}
										/>
									);
								}
							})}

							<mark>
								<Link to='recover-password'>Forgot password?</Link>
							</mark>
						</>
					)}
				</CustomForm>
			</div>

			<Routes>
				<Route
					path='recover-password'
					element={<RecoverPasswordPage />}
				/>
			</Routes>
		</section>
	);
};

export default LoginPage;
