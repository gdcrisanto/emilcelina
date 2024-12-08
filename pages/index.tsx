import Head from 'next/head';
import Layout from '../components/layout';
import Constants from '../lib/constants';
import PageHero from '../components/page-hero';
import Vectors from '../components/vectors';
import { useState } from 'react';
import { ColoredBgWrapper } from '../components/page-sections';
import Sections from '../components/sections';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
	const { HOME_HERO, OUR_SPECIAL_DAY, HOME_PORTRAITS, FOOTER } = Constants;
	const [imageIndex, setImageIndex] = useState(0);
	const nextImage = () => {
		setImageIndex((index) => {
			if (index === Constants.PRODUCTS.length - 1) return index;
			return index + 1;
		});
	};
	const prevImage = () => {
		setImageIndex((index) => {
			if (index === 0) return index;
			return index - 1;
		});
	};

	return (
		<Layout>
			<Head>
				<title>{`${Constants.CMS_NAME}`}</title>
			</Head>
			<PageHero
				image={HOME_HERO.image}
				alt=""
				size="sm"
				bgGradient="none"
				priority
				className="justify-start bg-center bg-cover bg-no-repeat">
				<div className="flex w-full max-w-[1920px] mx-auto">
					<div className="flex-col flex self-center text-white max-w-[624px] m-[80px] fade-up">
						<h1 className="font-garamond text-7xl lg:text-8xl leading-[100%]">
							{HOME_HERO.title}
						</h1>
						<h2 className="lg:text-lg my-[40px] font-thin">
							{HOME_HERO.subtitle}
						</h2>
						<Link
							href={HOME_HERO.href}
							className="button py-4 px-6 uppercase text-base font-thin border w-fit tracking-wider rounded hover:bg-white hover:text-[#121212]">
							{HOME_HERO.button}
						</Link>
					</div>
				</div>
			</PageHero>

			<ColoredBgWrapper bgColor="white">
				<div className="flex flex-col lg:flex-row w-full py-14 px-6 lg:px-20 max-w-[1920px] justify-between mx-auto lg:gap-x-12">
					<div className="flex-col text-center lg:text-left flex self-center max-w-[450px] mb-10 lg:mb-0 fade-up">
						<h1 className="font-garamond text-4xl lg:text-[3rem] leading-[100%]">
							{OUR_SPECIAL_DAY.title}
						</h1>
						<h2 className="lg:text-[18px] mt-4 mb-6 lg:my-[40px] font-thin">
							{OUR_SPECIAL_DAY.subtitle}
						</h2>
						<Link
							href={OUR_SPECIAL_DAY.href}
							className="button py-4 px-6 uppercase mx-auto lg:mx-0 text-base font-thin border w-fit tracking-wider rounded hover:bg-white hover:text-[#121212]">
							{OUR_SPECIAL_DAY.button}
						</Link>
					</div>

					<div className="flex flex-col lg:max-w-[950px] lg:min-w-[450px] w-full mx-auto lg:mx-none ">
						<div className="flex flex-row sm:justify-center lg:justify-start gap-x-6 lg:gap-x-16 fade-up">
							{HOME_PORTRAITS.map((portrait) => {
								return (
									<div
										className={`flex-col items-center w-full relative fade-up flex-grow max-w-[156px] xl:max-w-[422px]`}>
										<div className="relative w-full h-[287px] lg:h-[400px] ">
											<Image
												src={portrait.image}
												alt=""
												width={422}
												height={492}
												placeholder="blur"
												className="absolute object-cover object-bottom w-full h-[287px] lg:h-[400px]"
											/>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>

				<div className="flex flex-row max-w-[1920px] mx-auto"></div>
			</ColoredBgWrapper>

			<PageHero
				image={FOOTER.image}
				alt=""
				size="sm"
				bgGradient="linear-gradient(180deg, rgba(0, 0, 0, 0.00) 53.92%, rgba(0, 0, 0, 0.80) 100%)">
				<div className=" mx-auto flex-col md:flex-col flex items-center pb-6 lg:pb-16 justify-end text-white text-center">
					<span className="mb-4 lg:mb-10 text-4xl lg:text-[3rem] leading-9 lg:leading-[64px] font-garamond max-w-[309px] lg:max-w-none">
						{FOOTER.title}
					</span>
					<h2 className="lg:text-lg my-[40px] font-thin">
						{HOME_HERO.subtitle}
					</h2>
					<Link
						href={FOOTER.href}
						className=" px-6 py-4 font-light tracking-wide uppercase items-center border rounded button hover:bg-white hover:text-[#121212]">
						{FOOTER.button}
					</Link>
				</div>
			</PageHero>
		</Layout>
	);
}
