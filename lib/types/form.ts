export type Form = {
	isSent?: any;
	isLoading?: any;
	name: any;
	email: any;
	subject: any;
	message: any;
};

export type AgeForm = {
	birthYear: any;
};

export type InputFieldType = {
	field: string;
	handleChange: Function;
	isEmail?: Boolean;
	isError?: Boolean;
	placeholder: string;
	label: string;
	name: string;
};
