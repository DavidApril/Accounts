import { CustomForm } from '../../components/custom/form/Form';
import { CustomInput } from '../../components/custom/input/Input';
import { GoogleButton } from '../../components/google-sesion/Google';

import './SignUpPage.css';

export const SignUpPage = () => {
	const initalValues = [{}];

	return (
		<section className='signup-page'>
			<div className='signup-form'>
				<CustomForm
					initalValues={[{}]}
					buttonName='Sign up'
					type='register'>
					{() => (
						<>
							<h3>
								create an
								<b> Account</b> <br />
								<span>Enter the fields below to get started</span>
							</h3>
							<GoogleButton />
							<span>or</span>
							<CustomInput
								label='Username'
								name='username'
								placeholder='bruceWayne27'
							/>
							<CustomInput
								label='Email'
								name='email'
								placeholder='batman@gotham.com'
							/>
							<CustomInput
								label='Password'
								name='password'
								placeholder='***********'></CustomInput>
						</>
					)}
				</CustomForm>
			</div>
			<div className='signup-page-text'>
				<span>
					<b>Accounts</b> <br /> says <br /> <h2>Welcome!</h2>
				</span>
			</div>
		</section>
	);
};

export default SignUpPage;
