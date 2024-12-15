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
						<div className="flex-col flex px-10 w-full my-auto fade-up">
							<h1 className="font-newsreader text-5xl lg:text-6xl leading-[100%] text-[#5F6F52]">
								{REGISTRY_HERO.title}
							</h1>
							<h4 className="lg:text-lg my-10 font-light text-[#5F6F52]">
								{REGISTRY_HERO.subtitle}
							</h4>
							<Link
								href={REGISTRY_HERO.href}
								className="button py-4 px-6 text-base font-light border border-white w-fit tracking-wider rounded hover:border-white button text-white bg-[#BF8F67] hover:bg-[#5F6F52]">
								{REGISTRY_HERO.button}
							</Link>
						</div>
					</div>
					<PageHero
						image={REGISTRY_HERO.image}
						alt=""
						size="custom"
						customSize=" h-[590px] lg:h-[570px]"
						bgGradient="none"
						priority
						className="justify-start bg-center bg-cover bg-no-repeat w-full lg:w-1/2"
					/>
				</div>
			</ColoredBgWrapper>
		</Layout>
	);
}
