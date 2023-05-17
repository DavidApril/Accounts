import { Link } from 'react-router-dom';
import { CustomForm } from '../../components/custom/form/Form';
import { CustomInput } from '../../components/custom/input/Input';
import { GoogleButton } from '../../components/google-sesion/Google';
import './LoginPage.css';

const initalValues = [{}];

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
					initalValues={[{}]}
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
							<CustomInput
								initialValues={initalValues}
								label='Username'
								name='username'
								placeholder='bruceWayne27'
							/>
							<CustomInput
								label='Password'
								name='password'
								placeholder='***********'
							/>
							<mark>Forgot password?</mark>
						</>
					)}
				</CustomForm>
			</div>
		</section>
	);
};

export default LoginPage;
