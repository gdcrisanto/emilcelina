import Head from 'next/head';
import Layout from '../components/layout';
import Constants from '../lib/constants';
import PageHero from '../components/page-hero';
import { ColoredBgWrapper } from '../components/page-sections';

export default function TheWedding() {
	const { WEDDING_HERO, WEDDING_ANCHORS, SCHEDULE_OF_EVENTS } = Constants;

	return (
		<Layout>
			<Head>
				<title>{`${Constants.CMS_NAME}`}</title>
			</Head>
			<PageHero
				image={WEDDING_HERO.image}
				alt=""
				size="sm"
				bgGradient="none"
				priority
				className="justify-start bg-center bg-cover bg-no-repeat">
				<div className="flex w-full max-w-[1920px] mx-auto">
					<div className="flex-col flex self-center w-full text-white mx-auto lg:m-20 fade-up">
						<h1 className="font-garamond text-7xl lg:text-8xl leading-[100%] text-center">
							{WEDDING_HERO.title}
						</h1>
					</div>
				</div>
			</PageHero>

			<ColoredBgWrapper bgColor="white">
				<div className="flex flex-row my-6 w-full">
					{WEDDING_ANCHORS.map((anchor) => {
						return (
							<div className="w-1/3 text-center text-2xl">
								{anchor.title}
							</div>
						);
					})}
				</div>

				<div className="flex flex-col lg:flex-row w-full max-w-[1920px] mx-auto gap-x-20 px-10 lg:px-32 py-10">
					<div className="flex flex-col w-full lg:w-[48%] mb-20 lg:mb-0 justify-center ">
						<h1 className="font-garamond text-7xl lg:text-7xl leading-[100%] text-center">
							{SCHEDULE_OF_EVENTS.title}
						</h1>
					</div>
					<div className="flex flex-col lg:max-w-[400px] w-full">
						{SCHEDULE_OF_EVENTS?.events.map((item) => {
							return (
								<div className="flex flex-row mb-6 justify-between">
									<div className="flex flex-col">
										<h3 className="text-3xl">
											{item.event}
										</h3>
										<span className="text-sm italic font-thin">
											{item.description}
										</span>
									</div>
									<div>
										<span className="font-thin">
											{item.time}
										</span>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</ColoredBgWrapper>
		</Layout>
	);
}
