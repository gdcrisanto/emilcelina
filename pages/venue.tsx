import Head from 'next/head';
import Layout from '../components/layout';
import Constants from '../lib/constants';
import PageHero from '../components/page-hero';
import { HeaderDescription } from '../components/page-sections';
import Vectors from '../components/vectors';

export default function HouseOfLakan() {
	const { HOL_HEROES, OUR_FARM, SCHEDULE } = Constants;

	return (
		<Layout>
			<Head>
				<title>{`${Constants.CMS_NAME}`}</title>
			</Head>

			<PageHero
				image={OUR_FARM.image}
				priority
				alt=""
				className="justify-center z-[2]"
				customSize=" h-[667px] lg:h-[840px]"
				bgGradient="linear-gradient(0deg, rgba(0, 0, 0, 0.00) 80.36%, rgba(0, 0, 0, 0.40) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 62.2%, rgba(0, 0, 0, 0.40) 100%)">
				<div className="mx-auto font-garamond flex-col flex  text-white text-6xl lg:text-[3rem] text-center self-end pb-10 lg:pb-16 leading-[100%] whitespace-pre-wrap">
					{HOL_HEROES[1].title}
				</div>
			</PageHero>

			<div className="relative flex px-6 py-20 lg:py-[200px] w-full max-w-[1920px] mx-auto">
				<HeaderDescription
					data={OUR_FARM}
					className="max-w-[868px] text-center mx-auto z-[2]"
				/>
				<Vectors.LeavesLg
					side="contact"
					className="absolute z-[1] bottom-0 -left-[calc(541px*0.25)] hidden lg:block max-w-[541px] h-[846px] w-full"
				/>
				<Vectors.LeavesLg
					side="contact"
					className="absolute z-[1] bottom-0 -right-[calc(541px*0.25)] hidden lg:block max-w-[541px] h-[846px] w-full"
				/>
			</div>

			<PageHero
				image={HOL_HEROES[2].image}
				alt=""
				customSize=" h-[609px] lg:h-[790px]"
				bgGradient="linear-gradient(270deg, rgba(0, 0, 0, 0.00) 38.46%, rgba(0, 0, 0, 0.40) 100%)">
				<div className="flex w-full max-w-[1920px] mx-auto">
					<div className="flex-col flex self-center text-white max-w-[573px] mx-6 lg:mx-20 my-20 fade-up">
						<h1 className="font-garamond text-6xl lg:text-[3rem] leading-[100%]">
							{HOL_HEROES[2].title}
						</h1>
						<h2 className="lg:text-lg my-4 leading-[140%] font-thin">
							{HOL_HEROES[2].subtitle}
						</h2>
					</div>
				</div>
			</PageHero>
			<PageHero
				image={HOL_HEROES[3].image}
				alt=""
				customSize=" h-[609px] lg:h-[790px]"
				flip>
				<div className="flex w-full max-w-[1920px] mx-auto justify-end">
					<div className="flex-col flex self-center text-white max-w-[573px] mx-6 lg:mx-20 my-20 fade-up">
						<h1 className="font-garamond text-6xl lg:text-[3rem] leading-[100%]">
							{HOL_HEROES[3].title}
						</h1>
						<h2 className="lg:text-lg my-4 leading-[140%] font-thin">
							{HOL_HEROES[3].subtitle}
						</h2>
					</div>
				</div>
			</PageHero>
			<PageHero
				image={HOL_HEROES[4].image}
				alt=""
				customSize=" h-[609px] lg:h-[790px]"
				bgGradient="linear-gradient(270deg, rgba(0, 0, 0, 0.00) 38.46%, rgba(0, 0, 0, 0.40) 100%)">
				<div className="flex w-full max-w-[1920px] mx-auto">
					<div className="flex-col flex self-center text-white max-w-[573px] mx-6 lg:mx-20 my-20 fade-up">
						<h1 className="font-garamond text-6xl lg:text-[3rem] leading-[100%]">
							{HOL_HEROES[4].title}
						</h1>
						<h2 className="lg:text-lg my-4 leading-[140%] font-thin">
							{HOL_HEROES[4].subtitle}
						</h2>
					</div>
				</div>
			</PageHero>

			<div className="flex flex-col px-6 py-20 lg:py-[200px] w-full fade-up">
				<HeaderDescription
					data={SCHEDULE}
					className="max-w-[868px] text-center mx-auto"
					hasDivider
				/>
			</div>
		</Layout>
	);
}
