import './LoginPage.css';
import loginForm from '../../data/LoginForm.json';
import { CustomForm, GoogleButton, CustomInput } from '../../components';
import { Link, Route, Routes } from 'react-router-dom';
import { RecoverPasswordPage } from './pages/RecoverPasswordPage';

const initalValues: { [x: string]: any } = {};

for (const input of loginForm) {
	initalValues[input.name] = input.value;
}

export const LoginPage = () => {
	return (
		<section className='login-page'>
			<div className='login-page-text'>
				<span>
					<b>Accounts</b> <br /> says <br /> <h2>Welcome back!</h2>
				</span>
			</div>
			<div className='login-form'>
				<CustomForm
					initalValues={initalValues}
					buttonName='Login'
					type='login'>
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
