import { CustomForm, CustomInput } from '../../../components';
import './RecoverPasswordPage.css';
import RecoverFields from '../../../data/recoverForm.json';

const initalValues: { [x: string]: any } = {};

for (const input of RecoverFields) {
	initalValues[input.name] = input.value;
}

export const RecoverPasswordPage = () => {
	return (
		<section className='recover-password-page'>
			<CustomForm
				initalValues={initalValues}
				buttonName='Recover'
				type='recover'>
				{() => (
					<>
						<figure className='forgot-password-message'>
							<h3>Forgot passoword?</h3>
							<figcaption>No worries, we'll send you reset instructions</figcaption>
						</figure>
						{RecoverFields.map(({ label, name, type }) => (
							<CustomInput
								key={name}
								label={label}
								name={name}
								type={type}
							/>
						))}
					</>
				)}
			</CustomForm>
		</section>
	);
};
