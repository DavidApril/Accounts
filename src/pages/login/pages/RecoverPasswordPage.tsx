import recoverForms from '../../../data/recoverForm.json';
import { CustomForm, CustomInput } from '../../../components';
import useFormValidation from '../../../hooks/useFormValidation';

import './RecoverPasswordPage.css';
import { useNavigate } from 'react-router-dom';

export const RecoverPasswordPage = () => {
	const { initialValues, validationSchema } = useFormValidation(recoverForms);

	const handleSubmit = (values: any) => {
		console.log(values);
	};

	return (
		<section className='recover-password-page'>
			<CustomForm
				validationSchema={validationSchema}
				initialValues={initialValues}
				buttonName='Send email'
				onSubmit={handleSubmit}
				type='recover'>
				{() => (
					<>
						<figure className='forgot-password-message'>
							<h3>Forgot password?</h3>
							<figcaption>No worries, we'll send you reset instructions</figcaption>
						</figure>
						{recoverForms.map(({ label, name, type, placeholder }) => {
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
		</section>
	);
};
