import Head from 'next/head';
import Layout from '../../components/layout';
import Constants from '../../lib/constants';
import PageHero from '../../components/page-hero';
import {
	Bottle,
	ColoredBgWrapper,
	HeaderDescription,
} from '../../components/page-sections';
import Sections from '../../components/sections';
import Image from 'next/image';
import modelo from '../../public/assets/modelo.png';
import bg_image from '../../public/assets/bg_image.png';

export default function Lambanog() {
	const {
		FARM_TO_BOTTLE_LAMBANOG,
		LAMBANOG_HEADER_TITLE,
		LAMBANOG_HEADER_HERO,
		LAMBANOG_PROCESS_ITEMS,
		MODERN_LAMBANOG,
	} = Constants;

	return (
		<Layout>
			<Head>
				<title>{`${Constants.CMS_NAME}`}</title>
			</Head>

			<PageHero
				image={LAMBANOG_HEADER_HERO}
				priority
				alt=""
				className="justify-center"
				bgGradient="linear-gradient(0deg, rgba(0, 0, 0, 0.00) 80.36%, rgba(0, 0, 0, 0.40) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 62.2%, rgba(0, 0, 0, 0.40) 100%)">
				<div className="mx-auto font-garamond flex-col flex  text-white text-6xl lg:text-[3rem] text-center self-end pb-10 lg:pb-16 leading-[100%] whitespace-pre-line">
					{LAMBANOG_HEADER_TITLE}
				</div>
			</PageHero>

			<ColoredBgWrapper bgColor="black">
				<div className="flex flex-col lg:flex-row py-16 lg:py-[120px] px-6 lg:px-20 lg:gap-x-20 justify-center gap-y-10">
					<div className="relative max-w-[325px] lg:max-w-[957px] w-full aspect-[303/182] mx-auto lg:mx-0">
						<Image
							placeholder="blur"
							src={bg_image}
							alt=""
							layout="responsive"
							width={960}
							height={640}
							className="absolute lg:mx-0 mx-auto fade-up max-w-[calc(100%-22px)] lg:max-w-[calc(100%-88px)] top-0 left-0"
						/>
						<Image
							placeholder="blur"
							src={modelo}
							alt=""
							layout="responsive"
							width={960}
							height={640}
							className="absolute lg:mx-0 mx-auto fade-up max-w-[calc(100%-22px)] lg:max-w-[calc(100%-88px)] bottom-0 right-0"
						/>
					</div>

					<div
						className="flex flex-col lg:max-w-[721px] w-full
					space-y-4 lg:space-y-10 justify-center text-center lg:text-left">
						<h1 className="font-garamond text-4xl lg:text-[3rem] leading-9 lg:leading-[100%]">
							{FARM_TO_BOTTLE_LAMBANOG.title}
						</h1>
						<h2 className="text-[18px] font-thin leading-[140%]">
							{FARM_TO_BOTTLE_LAMBANOG.subtitle}
						</h2>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row items-center lg:justify-center gap-y-10 gap-x-6 lg:gap-x-20 fade-up pt-10 pb-16 px-6 lg:py-[120px]">
					{Constants.PRODUCTS.map((product, i) => {
						return (
							<Bottle
								key={i}
								name={product.name}
								description={product.description}
								hoverColor={product.color}
								href={product.href}
								button
								size="lg"
							/>
						);
					})}
				</div>
			</ColoredBgWrapper>

			<div className="flex flex-col py-10 px-6 lg:py-[120px]">
				<HeaderDescription
					data={MODERN_LAMBANOG}
					className="text-center max-w-[721px] mx-auto"
				/>

				<div className="flex flex-col py-10 lg:py-[120px] relative max-w-[1920px] mx-auto">
					<VerticalLine />
					{LAMBANOG_PROCESS_ITEMS.map((item, index) => {
						return (
							<ProcessSection
								key={index}
								item={item}
								index={index}
							/>
						);
					})}
				</div>
			</div>

			<Sections.CocktailCarousel
				data={Constants.FEATURED_COCKTAILS}
				cardSize="sm"
			/>
		</Layout>
	);
}

const VerticalLine = () => {
	return (
		<>
			<div className="z-0 border-l-[1px] border-[#121212] max-h-[calc(100%-40px)] lg:max-h-[calc(100%-120px)] h-full left-[57px] lg:left-[50%] absolute">
				{' '}
			</div>
			<div className="z-0 border-b-[1px] border-[#121212] max-w-[20px] w-full left-[57px] lg:left-[50%] bottom-0  absolute">
				{' '}
			</div>
			<div className="z-0 border-b-[1px] border-[#121212] max-w-[20px] w-full right-[calc(100%-57px)] lg:right-[50%] bottom-0 absolute">
				{' '}
			</div>
		</>
	);
};

const ProcessSection = ({ item, index }) => {
	return (
		<>
			<div className="z-[3] py-4 px-6 border w-fit border-[#121212] lg:mx-auto tracking-[2.56px] leading-[100%] bg-[#FFF8F1]">
				STEP {index + 1}
			</div>
			<div
				className={`flex flex-col  ${
					index % 2 == 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
				} py-[80px] gap-x-[114px] pl-[85px] lg:px-[80px] xl:px-[160px] gap-y-4 justify-between`}>
				<Image
					placeholder="blur"
					src={item.image}
					alt=""
					width={719}
					height={429}
					className=" fade-up lg:max-w-[calc(50%-80px)]"
				/>
				<HeaderDescription
					data={item}
					className="self-center lg:max-w-[calc(50%-80px)] "
				/>
			</div>
		</>
	);
};
