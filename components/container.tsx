export default function Container({ children, ...props }) {
	return (
		<div
			className="container flex w-full flex-grow md:mx-auto px-5"
			{...props}>
			{children}
		</div>
	);
}
