import Head from 'next/head';
import Layout from '../components/layout';
import Constants from '../lib/constants';
import PageHero from '../components/page-hero';
import { ColoredBgWrapper } from '../components/page-sections';
import Link from 'next/link';

export default function TheWedding() {
	const { REGISTRY_HERO } = Constants;

	const scrolltoHash = function (element_id: string) {
		const element = document.getElementById(element_id);
		element?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest',
		});
	};

	return (
		<Layout>
			<Head>
				<title>{`${Constants.CMS_NAME}`}</title>
			</Head>

			<ColoredBgWrapper bgColor="nata">
				<div className="flex flex-col lg:flex-row w-full max-w-[1920px] mx-auto gap-x-20 px-10 lg:px-0 py-0 gap-y-10 lg:gap-y-12 pt-[127px]">
					<div className="flex flex-col w-1/2">
						<div className="flex-col flex px-10 w-full my-auto fade-up">
							<h1 className="font-garamond text-6xl lg:text-7xl leading-[100%]">
								{REGISTRY_HERO.title}
							</h1>
							<h4 className="lg:text-lg my-10 font-thin">
								{REGISTRY_HERO.subtitle}
							</h4>
							<Link
								href={REGISTRY_HERO.href}
								className="button py-4 px-6 text-base font-thin border border-white w-fit tracking-wider rounded hover:bg-white hover:text-black hover:border-white">
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
						className="justify-start bg-center bg-cover bg-no-repeat w-1/2"
					/>
				</div>
			</ColoredBgWrapper>
		</Layout>
	);
}
