import { useEffect, useState } from 'react';
import { Form } from '../../lib/types/form';

const ContactForm = ({
	formState,
	validForm,
	setValidForm,
	handleChange,
	handleFormSubmit,
}) => {
	useEffect(() => {
		setValidForm(validateForm(formState));
	}, [formState]);

	return (
		<form
			className="uppercase flex flex-col w-full mb-auto relative"
			onSubmit={handleFormSubmit}>
			<InputField
				field={formState?.name}
				handleChange={handleChange}
				label={'Name'}
				placeholder={'First and last name'}
				name={'name'}
			/>
			<InputField
				field={formState?.email}
				handleChange={handleChange}
				isEmail={true}
				label={'Email Address'}
				placeholder={'Email Address'}
				name={'email'}
			/>
			<InputField
				field={formState?.subject}
				handleChange={handleChange}
				label={'Subject'}
				placeholder={'Subject of message'}
				name={'subject'}
			/>
			<div className="tracking-widest">Message</div>
			<textarea
				className="input-field text-area"
				name="message"
				value={formState?.message}
				onChange={(e) => handleChange(e)}
				placeholder="Message details"
			/>
			<div
				onClick={handleFormSubmit}
				className={
					'contact-submit px-6 py-4 mt-10 select-none mb-6 uppercase tracking-widest w-fit mx-auto lg:ml-0 ' +
					(validForm
						? 'cursor-pointer '
						: 'contact-submit-disabled ') +
					(formState?.isLoading
						? 'skeleton contact-submit-disabled '
						: ' ')
				}>
				Send Message
			</div>
		</form>
	);
};

const validateForm = (form: Form) => {
	const nameValidation = 'name' in form && form.name !== '';
	const emailValidation =
		'email' in form && form.email !== '' && validateEmail(form.email);
	const subjectValidation = 'subject' in form && form.subject !== '';
	const messageValidation = 'message' in form && form.message !== '';
	if (
		nameValidation &&
		emailValidation &&
		subjectValidation &&
		messageValidation
	)
		return true;
	else return false;
};

const validateEmail = (email: string) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

type InputFieldType = {
	field: string;
	handleChange: Function;
	isEmail?: boolean;
	placeholder: string;
	label: string;
	name: string;
};

const InputField = ({
	field,
	handleChange,
	isEmail,
	placeholder,
	label,
	name,
}: InputFieldType) => {
	const [validEmail, setValidEmail] = useState(true);
	const onBlur = () => {
		setValidEmail(!field || field === '' ? true : validateEmail(field));
	};

	const inputClassName = isEmail
		? 'input-field mt-3 ' + (validEmail ? 'mb-6 ' : 'invalid mb-2 ')
		: 'input-field mt-3 mb-6 ';

	const errorClassName = isEmail
		? validEmail
			? 'hidden '
			: 'invalid-color mb-4'
		: 'hidden';

	return (
		<div className="flex flex-col w-full">
			<div className="tracking-widest">{label}</div>
			<input
				className={inputClassName}
				name={name}
				value={field}
				onChange={(e) => handleChange(e)}
				type="text"
				placeholder={placeholder}
				onBlur={onBlur}
			/>
			<div className={errorClassName}>
				Please enter a valid email address
			</div>
		</div>
	);
};

export default { ContactForm };
