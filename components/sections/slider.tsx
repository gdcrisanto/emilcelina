import { useState } from 'react';
import Image from 'next/image';
import { SliderProps } from '../../lib/types/sections';
import Link from 'next/link';

const Slider = ({ quotes, images, textWhite }: SliderProps) => {
	const [index, setIndex] = useState(0);
	const nextQuote = () => {
		setIndex((index) => {
			if (quotes && index === quotes?.length - 1) return 0;
			if (images && index === images?.length - 1) return 0;
			return index + 1;
		});
	};
	const prevQuote = () => {
		setIndex((index) => {
			if (quotes && index === 0) return quotes?.length - 1;
			if (images && index === 0) return images?.length - 1;
			return index - 1;
		});
	};
	return (
		<div
			className={`flex flex-col ${
				images ? '' : 'max-w-[1218px]'
			} mx-auto w-full ${textWhite ? 'text-white' : 'text-[#121212]'} ${
				images ? 'gap-y-6 lg:mb-0' : ''
			}`}>
			<div className="flex flex-row w-full justify-between overflow-hidden gap-y-20">
				{quotes &&
					quotes.map((quote, i) => {
						return (
							<div
								key={i}
								className="flex flex-col w-full justify-between shrink-0 "
								style={{
									translate: `${-100 * index}%`,
									transition: 'translate 300ms ease-in-out',
								}}>
								<div className="flex flex-row w-full justify-between ">
									<ChevronLeft
										className="self-center hidden lg:block max-w-[55px]"
										onClick={prevQuote}
									/>
									<div className="font-garamond max-w-[868px] mx-auto text-[28px] lg:text-[48px] leading-[28px] lg:leading-[48px] text-center ">
										{quote.quote}
									</div>
									<ChevronRight
										className="self-center hidden lg:block max-w-[55px]"
										onClick={nextQuote}
									/>
								</div>
								<div className="w-full text-xs lg:text-base text-center mt-10 mb-10 lg:mb-0 text-[#93867A] uppercase tracking[1.28px] shrink-0">
									{quote.author}
								</div>
							</div>
						);
					})}

				{images && (
					<div className="flex flex-col w-full justify-between shrink-0 ">
						<div className="flex flex-row w-full justify-between lg:px-20 gap-x-6">
							<ChevronLeft
								className="self-center hidden lg:block w-full max-w-[79px]"
								onClick={prevQuote}
							/>
							<div className="flex flex-col gap-y-6 max-w-[1465px]">
								<div className="flex flex-row overflow-hidden w-full mx-auto lg:mx-0">
									{images.map((image, i) => {
										return (
											<div
												className="flex fade-up w-full shrink-0"
												style={{
													translate: `${
														-100 * index
													}%`,
													transition:
														'translate 300ms ease-in-out',
												}}>
												<Link
													className="flex text-[#FCF4EA] capitalize z-20 absolute w-full h-full self-end p-2 text-2xl items-end"
													href={image.href}>
													{image.text}
												</Link>
												<Image
													placeholder="blur"
													key={i}
													src={image.image}
													alt=""
													width={1465}
													height={873}
												/>
											</div>
										);
									})}
								</div>
								<div className="flex flex-row gap-x-2 max-w-[40%] w-full mx-auto justify-center">
									{images.map((x, imageIndex) => {
										return (
											<hr
												key={imageIndex}
												className={`border w-full ${
													imageIndex === index
														? 'border-[#573319] max-w-20'
														: 'border-[#46542f] max-w-6'
												}`}
												style={{
													transition:
														'all 300ms ease-in-out',
												}}
											/>
										);
									})}
								</div>
							</div>
							<ChevronRight
								height={40}
								width={40}
								className="self-center hidden lg:block w-full max-w-[79px]"
								onClick={nextQuote}
							/>
						</div>
					</div>
				)}
			</div>
			<div className="flex flex-row justify-center gap-x-10 lg:hidden">
				<ChevronLeft
					className="self-center max-w-[55px]"
					onClick={prevQuote}
				/>
				<ChevronRight
					className="self-center max-w-[55px]"
					onClick={nextQuote}
				/>
			</div>
		</div>
	);
};

export default { Slider };

const ChevronLeft = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			style={{ transform: 'rotate(-90deg)' }}
			{...props}>
			<path
				d="M14 29L24 19L34 29"
				stroke="#573319"
				strokeWidth="2"
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
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			style={{ transform: 'rotate(90deg)' }}
			{...props}>
			<path
				d="M14 29L24 19L34 29"
				stroke="#573319"
				strokeWidth="2"
				strokeLinecap="square"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
