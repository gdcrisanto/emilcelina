import Head from 'next/head';
import Layout from '../components/layout';
import Constants from '../lib/constants';
import PageHero from '../components/page-hero';
import Vectors from '../components/vectors';
import { useState } from 'react';
import {
	AwardsSection,
	Bottle,
	ColoredBgWrapper,
	StoryCard,
} from '../components/page-sections';
import Sections from '../components/sections';
import Link from 'next/link';

export default function Home() {
	const {
		QUOTES,
		FEATURED_STORIES,
		FEATURED_STORIES_TITLE,
		FEATURED_COCKTAILS,
		HOME_HERO,
		PRODUCTS_ROW,
		CRAFTING,
		homeImageBreaker,
		FARM_TO_BOTTLE,
		ICON_ROW,
		FOOTER,
	} = Constants;
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
				size="xl"
				bgGradient="none"
				priority
				className="justify-start bg-center bg-cover bg-no-repeat">
				<div className="hidden lg:flex w-full max-w-[1920px] mx-auto">
					<div className="flex-col flex self-center text-white max-w-[624px] m-[80px] fade-up">
						<h1 className="font-garamond lg:text-[6rem] leading-[100%]">
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

			<ColoredBgWrapper bgColor="black">
				<div className="flex lg:hidden w-full max-w-[721px] mx-auto">
					<div className="flex-col w-full flex just text-white mx-6 my-10 text-center fade-up">
						<h1 className="font-garamond text-5xl leading-[48px]">
							{HOME_HERO.title}
						</h1>
						<h2 className="text-lg mt-4 mb-6 font-thin">
							{HOME_HERO.subtitle}
						</h2>
						<Link
							href={PRODUCTS_ROW.href}
							className="button py-4 px-6 mx-auto uppercase text-base font-thin border w-fit tracking-wider rounded hover:bg-white hover:text-[#121212]">
							{HOME_HERO.button}
						</Link>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row w-full py-10 px-6 lg:py-[120px] lg:px-[80px] max-w-[1920px] justify-between mx-auto lg:gap-x-6">
					<div className="flex-col text-center lg:text-left flex self-center max-w-[573px] mb-10 lg:mb-0 fade-up">
						<h1 className="font-garamond text-4xl lg:text-[3rem] leading-[100%]">
							{PRODUCTS_ROW.title}
						</h1>
						<h2 className="lg:text-[18px] mt-4 mb-6 lg:my-[40px] font-thin">
							{PRODUCTS_ROW.subtitle}
						</h2>
						<Link
							href={PRODUCTS_ROW.href}
							className="button py-4 px-6 uppercase mx-auto lg:mx-0 text-base font-thin border w-fit tracking-wider rounded hover:bg-white hover:text-[#121212]">
							{PRODUCTS_ROW.button}
						</Link>
					</div>

					<div className="flex flex-col lg:max-w-[950px] lg:min-w-[450px] w-full mx-auto lg:mx-none ">
						<div className="flex flex-row overflow-x-hidden overflow-y-hidden lg:overflow sm:justify-center lg:justify-start gap-x-6 lg:gap-x-16 fade-up">
							{Constants.PRODUCTS.map((product) => {
								return (
									<Bottle
										key={product.name}
										href={product.href}
										hoverColor={product.color}
										name={product.name}
										imageIndex={imageIndex}
									/>
								);
							})}
						</div>
						<div className="flex flex-row justify-end gap-x-8 mt-10 sm:hidden">
							<Vectors.ArrowLeft
								className="self-center "
								onClick={prevImage}
								disabled={imageIndex === 0}
							/>
							<Vectors.ArrowRight
								className="self-center "
								onClick={nextImage}
								disabled={
									imageIndex === Constants.PRODUCTS.length - 1
								}
							/>
						</div>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row w-full pb-[120px] pt-[40px] max-w-[1920px] px-6 lg:px-0 justify-center space-y-10 lg:space-y-0 lg:space-x-6 mx-auto text-center text-base leading-[22.4px] uppercase tracking-[1.28px]">
					<div className="flex flex-col max-w-[422px] w-full space-y-6 items-center mx-auto lg:mx-0 fade-up">
						<Vectors.Coconut className="w-full" />
						<span>{ICON_ROW.tuba}</span>
					</div>
					<div className="flex flex-col max-w-[422px] w-full space-y-6 items-center mx-auto lg:mx-0 fade-up">
						<Vectors.Liquor className="w-full" />
						<span>{ICON_ROW.smooth}</span>
					</div>
					<div className="flex flex-col max-w-[422px] w-full space-y-6 items-center mx-auto lg:mx-0 fade-up">
						<Vectors.Sun className="w-full" />
						<span>{ICON_ROW.madeIn}</span>
					</div>
				</div>

				<Sections.ImageInformation
					image={
						<div className="w-full lg:max-w-[960px] fade-up">
							<PageHero
								image={CRAFTING.image}
								alt=""
								size="custom"
								customSize=" h-[702px] lg:h-[640px]"
								width={960}
								height={640}
							/>
						</div>
					}
					data={CRAFTING}
					hasDivider={true}
					textWhite={true}
				/>

				<AwardsSection />
			</ColoredBgWrapper>

			<PageHero
				image={homeImageBreaker}
				alt=""
				size="custom"
				customSize=" h-[280px] lg:h-[790px]"
			/>

			<Sections.CocktailCarousel
				data={FEATURED_COCKTAILS}
				cardSize="sm"
			/>

			<Sections.ImageInformation
				image={
					<div className="w-full lg:max-w-[960px] fade-up">
						<PageHero
							image={FARM_TO_BOTTLE.image}
							alt=""
							size="custom"
							customSize=" h-[702px] lg:h-[640px]"
							width={960}
							height={640}
						/>
					</div>
				}
				data={FARM_TO_BOTTLE}
				hasDivider={true}
			/>

			<div className="flex flex-col w-full px-6 lg:px-0 py-20 lg:py-[200px] max-w-[1920px] justify-between mx-auto fade-up">
				<Sections.Slider quotes={QUOTES} />
			</div>

			<div className="flex lg:flex-col bg-[#F6E8DA] w-full">
				<div className="flex flex-col w-full py-20 lg:py-[120px] px-6 lg:px-[80px] max-w-[1920px] justify-between mx-auto">
					<span className="w-full font-garamond text-4xl lg:text-[3rem] leading-9 lg:leading-[100%] mb-10 text-center lg:text-left">
						{FEATURED_STORIES_TITLE}
					</span>
					<div className="flex lg:flex-row flex-col w-full justify-between gap-y-6 lg:gap-y-0 gap-x-3">
						{FEATURED_STORIES.map((story, i) => {
							return (
								<StoryCard
									key={i}
									publisher={story.publisher}
									image={story.image}
									title={story.title}
								/>
							);
						})}
					</div>
				</div>
			</div>

			<PageHero
				image={FOOTER.image}
				alt=""
				size="md"
				bgGradient="linear-gradient(180deg, rgba(0, 0, 0, 0.00) 53.92%, rgba(0, 0, 0, 0.80) 100%)">
				<div className=" mx-auto flex-col md:flex-col flex items-center pb-6 lg:pb-16 justify-end text-white text-center">
					<span className="mb-4 lg:mb-10 text-4xl lg:text-[3rem] leading-9 lg:leading-[64px] font-garamond max-w-[309px] lg:max-w-none">
						{FOOTER.title}
					</span>
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
