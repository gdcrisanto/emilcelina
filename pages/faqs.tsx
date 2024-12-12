import Head from 'next/head';
import Layout from '../components/layout';
import Constants from '../lib/constants';
import PageHero from '../components/page-hero';
import { ColoredBgWrapper } from '../components/page-sections';

export default function FAQs() {
	const { FAQS_HERO, FAQS_INFO } = Constants;

	return (
		<Layout>
			<Head>
				<title>{`${Constants.CMS_NAME}`}</title>
			</Head>

			<PageHero
				image={FAQS_HERO.image}
				alt=""
				size="sm"
				bgGradient="none"
				priority
				className="justify-start bg-center bg-cover bg-no-repeat">
				<div className="flex w-full max-w-[1920px] mx-auto">
					<div className="flex-col flex self-center w-full text-white mx-auto lg:m-20 fade-up">
						<h1 className="font-garamond text-7xl lg:text-8xl leading-[100%] text-center">
							{FAQS_HERO.title}
						</h1>
					</div>
				</div>
			</PageHero>

			<ColoredBgWrapper bgColor="nata">
				<div className="flex flex-col w-full max-w-[1920px] mx-auto px-32 py-20">
					{FAQS_INFO.map((faq, i) => {
						return (
							<div
								className={`flex flex-col w-full border-black ${
									i > 0 ? 'border-b' : 'border-y'
								}`}>
								<div className="flex flex-row w-full text-3xl justify-between py-8">
									{faq.question}
								</div>
								<p className="w-4/5 mb-6 whitespace-pre-wrap">
									{faq.answer}
								</p>
							</div>
						);
					})}
				</div>
			</ColoredBgWrapper>
		</Layout>
	);
}
