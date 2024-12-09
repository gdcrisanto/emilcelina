import Head from 'next/head';
import Layout from '../components/layout';
import Constants from '../lib/constants';
import PageHero from '../components/page-hero';
import { ColoredBgWrapper } from '../components/page-sections';
import Link from 'next/link';
import Image from 'next/image';

export default function TheWedding() {
	const { WEDDING_HERO, OUR_SPECIAL_DAY, HOME_PORTRAITS, ORDER_OF_EVENTS } =
		Constants;

	return (
		<Layout>
			<Head>
				<title>{`${Constants.CMS_NAME}`}</title>
			</Head>
			<PageHero
				image={WEDDING_HERO.image}
				alt=""
				size="sm"
				bgGradient="none"
				priority
				className="justify-start bg-center bg-cover bg-no-repeat">
				<div className="flex w-full max-w-[1920px] mx-auto">
					<div className="flex-col flex self-center w-full text-white mx-auto lg:m-20 fade-up">
						<h1 className="font-garamond text-7xl lg:text-8xl leading-[100%] text-center">
							{WEDDING_HERO.title}
						</h1>
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
							className="button py-4 px-6 uppercase mx-auto lg:mx-0 text-base font-thin border w-fit tracking-wider rounded hover:bg-black hover:text-white hover:">
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

				<div className="flex flex-col lg:flex-row w-full max-w-[1920px] mx-auto gap-x-20 px-10 lg:px-32 py-10">
					<div className="flex flex-col w-full lg:w-[48%] mb-20 lg:mb-0">
						<div className="flex flex-col">
							<h3 className="text-3xl">
								Our Lady of Lourdes Parish
							</h3>
							<h4 className="text-xl font-thin">
								Tagaytay, Cavite
							</h4>
						</div>
						<hr className="w-full border-t self-center max-w-full border-black my-10" />
						<div className="flex flex-col">
							<h3 className="text-3xl">Arocarrìa</h3>
							<h4 className="text-xl font-thin">
								Alfonso, Cavite
							</h4>
						</div>
					</div>
					<div className="flex flex-col lg:max-w-[400px] w-full">
						<h3 className="text-4xl mb-8">
							{ORDER_OF_EVENTS.title}
						</h3>
						{ORDER_OF_EVENTS?.events.map((item) => {
							return (
								<div className="flex flex-row mb-6 justify-between">
									<div className="flex flex-col">
										<h3 className="text-3xl">
											{item.event}
										</h3>
										<span className="text-sm italic font-thin">
											{item.description}
										</span>
									</div>
									<div>
										<span className="font-thin">
											{item.time}
										</span>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</ColoredBgWrapper>
		</Layout>
	);
}
