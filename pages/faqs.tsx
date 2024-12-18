import Head from 'next/head';
import Layout from '../components/layout';
import Constants from '../lib/constants';
import PageHero from '../components/page-hero';
import { ColoredBgWrapper } from '../components/page-sections';
import Collapsible from 'react-collapsible';

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
				className="justify-start bg-center bg-cover bg-no-repeat"></PageHero>

			<ColoredBgWrapper bgColor="nata">
				<div className="flex w-full max-w-[1920px] mx-auto my-8">
					<div className="flex-col flex self-center w-full text-white mx-auto lg:m-4 fade-up">
						<h1 className="text-[#573319] font-playfair font-semibold text-6xl lg:text-7xl leading-[100%] text-center">
							{FAQS_HERO.title}
						</h1>
					</div>
				</div>
				<div className="flex flex-col w-full max-w-[1920px] mx-auto px-4 lg:px-32 py-20">
					{FAQS_INFO.map((faq, i) => {
						const className =
							'font-playfair flex flex-row w-full justify-between py-8 cursor-pointer font-playfair text-5xl text-center fade-up text-[#573319] font-playfair text-4xl lg:text-[3rem] leading-[100%] font-medium';

						return (
							<div
								id="collapse"
								className={`w-full border-[#BF8F67] ${
									i > 0 ? 'border-b' : 'border-y'
								}`}>
								<Collapsible
									trigger={faq.question}
									triggerClassName={className}
									triggerOpenedClassName={className}
									transitionTime={200}
									easing="ease-in-out">
									<p
										className={`w-4/5 pb-6 whitespace-pre-wrap text-2xl text-[#46542f]`}>
										{faq.answer}
									</p>
								</Collapsible>
							</div>
						);
					})}
				</div>
			</ColoredBgWrapper>
		</Layout>
	);
}
