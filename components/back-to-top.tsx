import { useEffect, useState } from 'react';

export default function BackToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 200) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		});
	}, []);

	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<>
			{isVisible && (
				<div
					className="z-30 fixed bottom-8 right-8 p-2 bg-[#BF8F67] md:flex items-center rounded hidden cursor-pointer"
					onClick={scrollUp}>
					<ChevronUp className="mx-auto" />
				</div>
			)}
		</>
	);
}

const ChevronUp = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			{...props}>
			<path
				d="M14 29L24 19L34 29"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="square"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
