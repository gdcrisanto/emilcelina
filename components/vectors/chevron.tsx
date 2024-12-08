const ChevronDown = ({ ...props }) => {
	return (
		<svg
			width="25"
			height="25"
			viewBox="0 0 25 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				d="M17.5 10L12.5 15L7.5 10"
				stroke="#121212"
				strokeWidth="1.5"
				strokeLinecap="square"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const ChevronLeft = ({ stroke = 'white', ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			{...props}>
			<path
				d="M14 17L9 12L14 7"
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="square"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const ChevronRight = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="41"
			height="40"
			viewBox="0 0 41 40"
			fill="none"
			{...props}>
			<path
				d="M33.6843 20.3742C21.9481 17.2295 17.3224 28.2334 8 31.1025C19.8928 34.2891 27.4302 23.059 33.6843 20.3742Z"
				fill="#B99D37"
			/>
			<path
				d="M33.6843 20.2436C21.9481 23.3883 17.3224 12.3844 8 9.51539C19.8928 6.32873 27.4302 17.5588 33.6843 20.2436Z"
				fill="#B99D37"
			/>
		</svg>
	);
};

export default { ChevronDown, ChevronLeft, ChevronRight };
