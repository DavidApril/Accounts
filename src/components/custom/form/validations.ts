import * as Yup from 'yup';

const validationSchema = Yup.object({
	username: Yup.string().required('Required').max(15, 'Name must be 15 characters or less'),
  password: Yup.string().min(6, 'Password must be 6 characters or more').required('Required'),
  email: Yup.string().required('Required').email('Email format invalid')
});

export default validationSchema;
