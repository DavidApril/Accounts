import * as Yup from 'yup';

const useFormValidation = (formToValidate: any) => {

	const initialValues: { [x: string]: any } = {};
	const requiredFields: { [x: string]: any } = {};

	for (const input of formToValidate) {

		initialValues[input.name] = input.value;
		
		if (!input.validations) continue;

		let schema = Yup.string();

		for (const rule of input.validations) {
			if (rule.type === 'required') {
				schema = schema.required('Required');
			}

			if (rule.type === 'max-length') {
				schema = schema.max((rule as any).value || 1, `Must be ${(rule as any).value || 1} characters or less`);
			}

			if (rule.type === 'min-length') {
				schema = schema.min((rule as any).value || 1, `Must be ${(rule as any).value || 1} characters or more`);
			}

			if (rule.type === 'email') {
				schema = schema.email(`Email hasn't a valid format`);
			}
		}

		requiredFields[input.name] = schema;
	}

	const validationSchema = Yup.object({ ...requiredFields });

	return { validationSchema, initialValues };
};

export default useFormValidation;

// const validationSchema = Yup.object({
// 	username: Yup.string().required('Required').max(15, 'Name must be 15 characters or less'),
//   password: Yup.string().min(6, 'Password must be 6 characters or more').required('Required'),
//   // email: Yup.string().required('Required').email('Email format invalid')
// });
