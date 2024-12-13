import Head from 'next/head';
import Layout from '../components/layout';
import Constants from '../lib/constants';
import PageHero from '../components/page-hero';
import { ColoredBgWrapper } from '../components/page-sections';
import Collapsible from 'react-collapsible';

export default function FAQs() {
	const { FAQS_HERO, FAQS_INFO } = Constants;

	const toggle = (e) => {
		console.log('testing', e.target.classList);
	};

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
						<h1 className="font-newsreader text-7xl lg:text-8xl leading-[100%] text-center">
							{FAQS_HERO.title}
						</h1>
					</div>
				</div>
			</PageHero>

			<ColoredBgWrapper bgColor="nata">
				<div className="flex flex-col w-full max-w-[1920px] mx-auto px-32 py-20">
					{FAQS_INFO.map((faq, i) => {
						const className =
							'font-newsreader flex flex-row w-full text-3xl justify-between py-8 cursor-pointer';
						return (
							<div
								id="collapse"
								className={`w-full border-black ${
									i > 0 ? 'border-b' : 'border-y'
								}`}>
								<Collapsible
									trigger={faq.question}
									triggerClassName={className}
									triggerOpenedClassName={className}
									transitionTime={200}
									easing="ease-in-out">
									<p
										className={`w-4/5 pb-6 whitespace-pre-wrap`}>
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
