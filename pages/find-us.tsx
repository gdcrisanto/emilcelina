import Head from 'next/head';
import Container from '../components/container';
import Layout from '../components/layout';
import Constants from '../lib/constants';
import Vectors from '../components/vectors';
import PageHero from '../components/page-hero';
import Sections from '../components/sections';

export default function About() {
	const { FIND_US_HERO, FOOTER_HERO_TEXT, HEADER_HERO_TEXT } = Constants;

	return (
		<Layout>
			<Head>
				<title>{`${Constants.CMS_NAME}`}</title>
			</Head>

			<PageHero
				className="justify-center flex-row pb-10 lg:pb-16"
				image={FIND_US_HERO.header}
				priority
				alt="">
				<div className="z-[1] mx-auto max-w-[350px] lg:max-w-[500px] font-garamond flex-col md:flex-col flex items-center self-end text-white text-6xl lg:text-[3rem] text-center leading-[100%]">
					{HEADER_HERO_TEXT.title}
				</div>
			</PageHero>

			<Container id="address-filter">
				<section className="flex-col md:flex-col flex items-center md:justify-between pt-16 pb-16 md:pb-12 w-full">
					<Sections.FindUsAddresses />
				</section>
			</Container>

			<PageHero
				className="h-[590px] lg:h-[601px]"
				size="sm"
				bgGradient="linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%)"
				image={FIND_US_HERO.footer}
				alt="">
				<div className="z-[1] hero-title mx-auto flex-col md:flex-col flex items-center self-center text-white text-center">
					<span className="z-[1] text-6xl mb-4 lg:text-[3rem] font-garamond">
						{FOOTER_HERO_TEXT.title}
					</span>
					<span className="z-[1] font-thin mb-10 text-xl lg:text-l">
						{FOOTER_HERO_TEXT.subtitle}
					</span>
					<span className="z-[1] button border-white px-5 py-4 font-light tracking-wide flex flex-row items-center leading-normal hover:bg-white hover:text-[#121212]">
						{FOOTER_HERO_TEXT.button}
						<Vectors.LinkTo className="ml-2" />
					</span>
				</div>
			</PageHero>
		</Layout>
	);
}
