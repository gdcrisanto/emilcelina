import Head from 'next/head';
import Layout from '../components/layout';
import Constants from '../lib/constants';
import PageHero from '../components/page-hero';
import { ColoredBgWrapper, OrnateHeader } from '../components/page-sections';
import Image from 'next/image';
import Sections from '../components/sections';
import Vectors from '../components/vectors';
import Link from 'next/link';

export default function About() {
	const {
		COCONUTS_TO_BOTTLE_INFO,
		CRAFTING_A_LEGACY,
		FILIPINO_HERITAGE_INFO,
		GOLD_STANDARD,
		ABOUT_HEADER,
		IMAGE_BREAKERS,
		ABOUT_PROCESS_ITEMS,
		QUALITY_YOU_CAN_TRUST,
		SYMBOL_OF_STRENGTH,
		TRADITION_IMAGE_INFO,
	} = Constants;

	return (
		<Layout>
			<Head>
				<title>{`${Constants.CMS_NAME}`}</title>
			</Head>
			<PageHero
				image={ABOUT_HEADER.image}
				priority
				alt=""
				className="justify-center"
				bgGradient="linear-gradient(0deg, rgba(0, 0, 0, 0.00) 80.36%, rgba(0, 0, 0, 0.40) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 62.2%, rgba(0, 0, 0, 0.40) 100%)">
				<div className="mx-auto font-garamond flex-col flex  text-white text-6xl lg:text-[3rem] text-center self-end pb-10 lg:pb-16 leading-[100%] whitespace-pre-wrap">
					{ABOUT_HEADER.title}
				</div>
			</PageHero>

			<ColoredBgWrapper bgColor="black">
				<div className="flex w-full lg:py-[120px] lg:px-20">
					<Sections.ImageInformation
						image={
							<div className="w-full lg:max-w-[869px] fade-up">
								<PageHero
									image={TRADITION_IMAGE_INFO.image}
									alt=""
									size="custom"
									customSize=" h-[250px] lg:h-[518px]"
									width={869}
									height={518}
								/>
							</div>
						}
						data={TRADITION_IMAGE_INFO}
						textWhite
						reverse
					/>
				</div>

				<div className="flex flex-col lg:flex-row pt-10 lg:pt-20 pb-20 lg:pb-[120px] px-6 lg:px-0 gap-x-[120px] justify-center max-w-[1300px] w-full mx-auto fade-up gap-y-10 text-center lg:text-left">
					<Vectors.LakanMan className="max-w-[211px] h-[280px] lg:h-auto mx-auto lg:mx-0 lg:max-w-none fill-[#FFF8F1]" />
					<div
						className="flex flex-col lg:max-w-[590px] w-full
					space-y-4 lg:space-y-10 justify-center">
						<h1 className="font-garamond text-4xl lg:text-[3rem] leading-9 lg:leading-[100%]">
							{SYMBOL_OF_STRENGTH.title}
						</h1>
						<h2 className="text-[18px] font-thin leading-[140%]">
							{SYMBOL_OF_STRENGTH.subtitle}
						</h2>
					</div>
				</div>
			</ColoredBgWrapper>

			<PageHero
				image={IMAGE_BREAKERS[0]}
				alt=""
				className="justify-center"
				customSize=" h-[280px] lg:h-[790px]"
				size="custom"
				bgGradient="linear-gradient(0deg, rgba(0, 0, 0, 0.00) 80.36%, rgba(0, 0, 0, 0.40) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 62.2%, rgba(0, 0, 0, 0.40) 100%)"
			/>

			<Sections.ImageInformation
				image={
					<div className="w-full lg:max-w-[960px] fade-up">
						<PageHero
							image={FILIPINO_HERITAGE_INFO.image}
							alt=""
							size="custom"
							customSize=" h-[250px] lg:h-[640px]"
							width={960}
							height={640}
						/>
					</div>
				}
				data={FILIPINO_HERITAGE_INFO}
				hasDivider
			/>

			<div className="flex flex-col max-w-[1920px] w-full mx-auto lg:px-[79px] lg:pt-[120px] lg:pb-20 gap-y-10 px-6 py-10">
				<div className="flex flex-col mx-auto max-w-[721px] w-full text-center gap-y-4">
					<span className="text-4xl lg:text-[3rem] leading-[100%] font-garamond">
						{COCONUTS_TO_BOTTLE_INFO.title}
					</span>
					<span className="text-[18px] leading-[140%] font-thin">
						{COCONUTS_TO_BOTTLE_INFO.subtitle}
					</span>
				</div>

				<div className="flex flex-col lg:flex-row mx-auto w-full justify-between lg:gap-x-4 gap-y-4 lg:gap-y-0">
					<Image
						src={COCONUTS_TO_BOTTLE_INFO.image1}
						alt=""
						placeholder="blur"
						width={869}
						height={518}
						className="lg:mx-0 mx-auto fade-up "
					/>
					<Image
						src={COCONUTS_TO_BOTTLE_INFO.image2}
						alt=""
						placeholder="blur"
						width={869}
						height={518}
						className="lg:mx-0 mx-auto fade-up "
					/>
				</div>
			</div>

			<div className="flex flex-col max-w-[1920px] w-full mx-auto lg:pb-[120px] lg:pt-20 lg:px-20 px-6 pt-10 pb-20 fade-up">
				<OrnateHeader title={QUALITY_YOU_CAN_TRUST.title} />
				<div className="flex flex-col lg:mx-auto max-w-[721px] w-full text-center mt-4">
					<span className="text-[18px] leading-[140%] font-thin">
						{QUALITY_YOU_CAN_TRUST.subtitle}
					</span>
				</div>

				<div className="flex flex-col lg:flex-row py-10 lg:py-20 justify-center fade-up">
					{ABOUT_PROCESS_ITEMS.map((item, index) => {
						return (
							<>
								<ProcessItem
									key={item.title}
									image={item.image}
									title={item.title}
									subtitle={item.subtitle}
									index={index}
								/>
							</>
						);
					})}
				</div>

				<Link
					href={QUALITY_YOU_CAN_TRUST.href}
					className="button border border-[#121212] rounded py-4 px-6 w-fit mx-auto tracking-[1.28px] uppercase hover:bg-[#121212] hover:text-[#B99D37]">
					{QUALITY_YOU_CAN_TRUST.button}
				</Link>
			</div>

			<PageHero
				image={IMAGE_BREAKERS[1]}
				alt=""
				className="justify-center"
				customSize=" h-[450px] lg:h-[790px]"
				size="custom"
				bgGradient="linear-gradient(0deg, rgba(0, 0, 0, 0.00) 80.36%, rgba(0, 0, 0, 0.40) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 62.2%, rgba(0, 0, 0, 0.40) 100%)"
			/>

			<ColoredBgWrapper bgColor="gold">
				<div className="flex flex-col lg:flex-row lg:pt-20 lg:pb-[120px] gap-x-[120px] justify-center max-w-[1300px] w-full mx-auto fade-up px-6 py-16 text-center lg:text-left fade-up">
					<Vectors.PDCILogo className="max-w-[120px] lg:max-w-none max-h-[120px] lg:max-h-none mx-auto mb-10" />
					<div className="flex flex-col lg:max-w-[811px] w-full space-y-10 justify-center whitespace-pre-line">
						<h1 className="font-garamond text-4xl lg:text-[3rem] leading-9 lg:leading-[100%]">
							{CRAFTING_A_LEGACY.title}
						</h1>
						<h2 className="lg:text-[18px] font-thin">
							{CRAFTING_A_LEGACY.subtitle}
						</h2>
					</div>
				</div>
			</ColoredBgWrapper>
		</Layout>
	);
}

const ProcessItem = ({ image, title, subtitle, index }) => {
	return (
		<>
			<div className="flex flex-row lg:flex-col w-full max-w-[327px] lg:max-w-[264px] justify-center gap-x-4 gap-y-10 mx-auto">
				{image}
				<div className="flex flex-col text-start lg:text-center w-full max-w-max lg:gap-y-10">
					<span className="w-full font-garamond text-[32px] leading-[100%]">
						{title}
					</span>
					<span className="w-full text-[18px] leading-[140%] font-thin">
						{subtitle}
					</span>
				</div>
			</div>
			{index < Constants.ABOUT_PROCESS_ITEMS.length - 1 && (
				<>
					<Vectors.ChevronRight
						key={`right ${index}`}
						className="hidden lg:block my-4 lg:my-0  self-center flex-shrink-0"
					/>
					<Vectors.ChevronDown
						key={`down ${index}`}
						className="lg:hidden my-4 lg:my-0  self-center flex-shrink-0"
					/>
				</>
			)}
		</>
	);
};
