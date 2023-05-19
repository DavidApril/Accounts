import registerForm from '../../data/registerForm.json';
import { CustomForm, GoogleButton, CustomInput } from '../../components';

import './SignUpPage.css';
import useFormValidation from '../../hooks/useFormValidation';

export const SignUpPage = () => {
	const { initialValues, validationSchema } = useFormValidation(registerForm);

	const handleSubmit = (values: any) => {
		console.log(values);
	};

	return (
		<section className='signup-page' >
			<div className='signup-form'>
				<CustomForm
					validationSchema={validationSchema}
					initialValues={initialValues}
					buttonName='Sign up'
					onSubmit={handleSubmit}
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
