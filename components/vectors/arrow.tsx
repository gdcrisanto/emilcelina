const ArrowLeft = ({
	color = '#B99D37',
	disabled = false,
	width = '57',
	...props
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height="auto"
			viewBox="0 0 57 30"
			fill="none"
			{...props}>
			<path
				d="M56 15H1M1 15L16.8194 1M1 15L16.8194 29"
				stroke={disabled ? '#2D2D2D' : color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const ArrowRight = ({
	color = '#B99D37',
	disabled = false,
	width = '57',
	...props
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height="auto"
			viewBox="0 0 57 30"
			fill="none"
			{...props}>
			<path
				d="M1 15H56M56 15L40.1806 1M56 15L40.1806 29"
				stroke={disabled ? '#2D2D2D' : color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default { ArrowLeft, ArrowRight };
