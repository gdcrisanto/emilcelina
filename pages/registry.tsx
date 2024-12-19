import Head from 'next/head';
import Layout from '../components/layout';
import Constants from '../lib/constants';
import PageHero from '../components/page-hero';
import { ColoredBgWrapper } from '../components/page-sections';
import Link from 'next/link';

export default function Registry() {
	const { REGISTRY_HERO } = Constants;

	return (
		<Layout>
			<Head>
				<title>{`${Constants.CMS_NAME}`}</title>
			</Head>

			<ColoredBgWrapper bgColor="nata">
				<div className="flex flex-col-reverse lg:flex-row w-full max-w-[1920px] mx-auto gap-x-20 px-4 lg:px-0 py-0 gap-y-10 lg:gap-y-12 pt-[72px] lg:pt-[127px] pb-8 lg:pb-0">
					<div className="flex flex-col w-full lg:w-1/2">
						<div className="flex-col flex lg:px-10 w-full my-auto fade-up">
							<h1 className="font-playfair leading-[100%] text-[#573319] font-playfair font-semibold text-5xl lg:text-7xl ">
								{REGISTRY_HERO.title}
							</h1>
							<h3 className=" my-10 text-2xl lg:text-[2.125rem] text-[#46542f]">
								{REGISTRY_HERO.subtitle}
							</h3>
							<Link
								href={REGISTRY_HERO.href}
								className="button py-4 px-6 text-base semibold w-fit tracking-wider rounded button text-white bg-[#46542f] hover:bg-[#FCF4EA] hover:text-[#46542f] lg:text-xl">
								{REGISTRY_HERO.button}
							</Link>
						</div>
					</div>
					<PageHero
						image={REGISTRY_HERO.image}
						alt=""
						size="custom"
						customSize=" h-[750px] lg:h-[750px]"
						bgGradient="none"
						priority
						className="justify-start bg-center bg-cover bg-no-repeat w-full lg:w-1/2"
					/>
				</div>
			</ColoredBgWrapper>
		</Layout>
	);
}
