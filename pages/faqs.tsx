import Head from 'next/head';
import Layout from '../components/layout';
import Constants from '../lib/constants';
import PageHero from '../components/page-hero';
import { ColoredBgWrapper } from '../components/page-sections';
import Collapsible from 'react-collapsible';
import { useEffect, useState } from 'react';

export default function FAQs() {
	const { FAQS_HERO, FAQS_INFO } = Constants;
	const [isOpenFAQ, setIsOpenFAQ] = useState<any>([
		false,
		false,
		false,
		false,
		false,
		false,
		false,
	])

	const handleOnClick = (i: any) => {
		const items = [
			false,
			false,
			false,
			false,
			false,
			false,
			false,
		]
		items[i] = isOpenFAQ[i] === true ? false : !items[i]
		setIsOpenFAQ(items)
	}

	const _renderDesc = () => {
		FAQS_INFO.map((item) => {
			
			let _ele = document.getElementById(item.id);
			_ele.innerHTML = item.answer;
		})
		}
		
		useEffect(() => {
			_renderDesc();
		}, []);

	return (
		<Layout>
			<Head>
				<title>{`${Constants.CMS_NAME}`}</title>
			</Head>

			<PageHero
				image={FAQS_HERO.image}
				customSize=" h-[calc(80svh-72px)] lg:h-[calc(78svh-127px)]"
				alt=""
				size="custom"
				bgGradient="none"
				priority
				customPosition=" object-[right_-1rem_top_0rem] lg:object-[right_0rem_top_-10rem] "
				className="justify-start bg-center bg-cover bg-no-repeat mt-[72px] lg:mt-[127px]" />

			<ColoredBgWrapper bgColor="nata">
				<div className="flex w-full max-w-[1920px] mx-auto my-8">
					<div className="flex-col flex self-center w-full text-white mx-auto lg:m-4 fade-up">
						<h1 className="text-[#573319] font-playfair font-semibold text-6xl lg:text-7xl leading-[100%] text-center">
							{FAQS_HERO.title}
						</h1>
					</div>
				</div>
				<div className="flex flex-col w-full max-w-[1920px] mx-auto px-4 lg:px-32 py-20">
					{FAQS_INFO.map((faq, i) => {
						const className =
							'font-playfair flex flex-row w-full justify-between py-8 cursor-pointer font-playfair text-5xl text-center fade-up text-[#573319] font-playfair text-4xl lg:text-[3rem] leading-[100%] font-medium';

						return (
							<div
								id="collapse"
								className={`w-full border-[#BF8F67] ${
									i > 0 ? 'border-b' : 'border-y'
								}`}>
								<Collapsible
									open={isOpenFAQ[i]}
									handleTriggerClick={() => handleOnClick(i)}
									trigger={
										<div className="font-playfair flex flex-row w-full justify-between py-4 cursor-pointer font-playfair text-2xl text-left fade-up text-[#573319] font-playfair lg:text-5xl leading-[100%] font-medium">
											{faq.question}
											<ChevronLeft className={`transition-all ease-in-out duration-300 ${isOpenFAQ[i] ? `` : `-rotate-180`}`} />
										</div>
									}
									triggerClassName={className}
									triggerOpenedClassName={className}
									transitionTime={200}
									easing="ease-in-out">
									<p
										id={faq.id}
										className={`w-full lg:pr-5 pb-6 whitespace-pre-wrap text-base lg:text-xl text-[#46542f]`}>
										{faq.answer}
									</p>
								</Collapsible>
							</div>
						);
					})}
				</div>
			</ColoredBgWrapper>
		</Layout>
	);
}

const ChevronLeft = ({ ...props }) => {
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
				stroke="#573319"
				strokeWidth="2"
				strokeLinecap="square"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
