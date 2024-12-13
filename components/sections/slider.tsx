import { useState } from 'react';
import Vectors from '../vectors';
import Image from 'next/image';
import { SliderProps } from '../../lib/types/sections';

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
				images ? 'gap-y-20 mb-20 lg:mb-0' : ''
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
									<Vectors.ArrowLeft
										className="self-center hidden lg:block max-w-[55px]"
										onClick={prevQuote}
									/>
									<div className="font-newsreader max-w-[868px] mx-auto text-[28px] lg:text-[48px] leading-[28px] lg:leading-[48px] text-center ">
										{quote.quote}
									</div>
									<Vectors.ArrowRight
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
							<Vectors.ArrowLeft
								className="self-center hidden lg:block w-full max-w-[79px]"
								onClick={prevQuote}
							/>
							<div className="flex flex-col gap-y-6 max-w-[1465px]">
								<div className="flex flex-row overflow-hidden w-full mx-auto lg:mx-0">
									{images.map((image, i) => {
										return (
											<Image
												placeholder="blur"
												key={i}
												src={image}
												alt=""
												width={1465}
												height={873}
												className="fade-up w-full shrink-0"
												style={{
													translate: `${
														-100 * index
													}%`,
													transition:
														'translate 300ms ease-in-out',
												}}
											/>
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
														? 'border-[#B99D37] max-w-20'
														: 'border-[#2D2D2D] max-w-6'
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
							<Vectors.ArrowRight
								className="self-center hidden lg:block w-full max-w-[79px]"
								onClick={nextQuote}
							/>
						</div>
					</div>
				)}
			</div>
			<div className="flex flex-row justify-center space-x-10 lg:hidden">
				<Vectors.ArrowLeft
					className="self-center max-w-[55px]"
					onClick={prevQuote}
				/>
				<Vectors.ArrowRight
					className="self-center max-w-[55px]"
					onClick={nextQuote}
				/>
			</div>
		</div>
	);
};

export default { Slider };
