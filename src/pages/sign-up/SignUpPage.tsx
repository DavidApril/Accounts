import registerForm from '../../data/registerForm.json';
import { CustomForm, GoogleButton, CustomInput } from '../../components';

import './SignUpPage.css';

const initalValues: { [x: string]: any } = {};

for (const input of registerForm) {
	initalValues[input.name] = input.value;
}

export const SignUpPage = () => {
	return (
		<section className='signup-page'>
			<div className='signup-form'>
				<CustomForm
					initalValues={initalValues}
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

							{registerForm.map(({ label, name, type, placeholder }) => {
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
