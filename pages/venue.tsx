import Head from 'next/head';
import Layout from '../components/layout';
import Constants from '../lib/constants';
import PageHero from '../components/page-hero';
import { ColoredBgWrapper } from '../components/page-sections';
import Sections from '../components/sections';

export default function Venue() {
	const { VENUE_HERO, VENUE_ANCHORS, VENUE_MAPS, WHERE_TO_STAY } = Constants;

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
			<PageHero
				image={VENUE_HERO.image}
				alt=""
				size="sm"
				bgGradient="none"
				priority
				className="justify-start bg-center bg-cover bg-no-repeat">
				<div className="flex w-full max-w-[1920px] mx-auto">
					<div className="flex-col flex self-center w-full text-white mx-auto lg:m-20 fade-up">
						<h1 className="font-newsreader text-[#5F6F52] text-5xl lg:text-6xl leading-[100%] text-center">
							{VENUE_HERO.title}
						</h1>
					</div>
				</div>
			</PageHero>

			<ColoredBgWrapper bgColor="nata">
				<div className="flex flex-row my-6 w-full">
					{VENUE_ANCHORS.map((anchor) => {
						return (
							<a
								className="w-1/3 text-center text-2xl cursor-pointer text-[#5F6F52]"
								onClick={() => {
									scrolltoHash(anchor.id);
								}}>
								{anchor.title}
							</a>
						);
					})}
				</div>

				<div className="flex flex-col w-full max-w-[1920px] mx-auto gap-x-20 px-4 lg:px-32 py-10 gap-y-10 lg:gap-y-12">
					{VENUE_MAPS.map((venue, i) => {
						return (
							<Sections.ImageInformation
								image={
									<div
										className="w-full lg:w-1/2"
										id={i % 2 ? 'reception' : 'church'}>
										<div className="w-full lg:max-w-[300px] mx-auto fade-up">
											<PageHero
												image={venue.image}
												alt=""
												size="custom"
												customSize=" h-[180px] lg:h-[180px]"
												width={869}
												height={518}
											/>
										</div>
									</div>
								}
								data={venue}
								textCenter
								textWhite
								reverse={i % 2 ? false : true}
							/>
						);
					})}
				</div>
			</ColoredBgWrapper>

			<PageHero
				image={WHERE_TO_STAY.image}
				alt=""
				size="xs"
				bgGradient="none"
				priority
				className="justify-start bg-center bg-cover bg-no-repeat">
				<div className="flex w-full max-w-[1920px] mx-auto">
					<div className="flex-col flex self-center w-full text-white mx-auto lg:m-20 fade-up">
						<h1 className="font-newsreader text-[#5F6F52] text-5xl lg:text-6xl leading-[100%] text-center mb-6">
							{WHERE_TO_STAY.title}
						</h1>
						<h5 className="font-newsreader text-[#BF8F67] text-2xl lg:text-2xl leading-[100%] text-center">
							{WHERE_TO_STAY.subtitle}
						</h5>
					</div>
				</div>
			</PageHero>

			<ColoredBgWrapper bgColor="white">
				<div
					id="reception"
					className="flex flex-col w-full max-w-[1920px] mx-auto gap-x-20 px-4 lg:px-32 py-10 lg:py-20">
					<h5 className="font-newsreader text-[#BF8F67] text-2xl lg:text-2xl leading-[100%] text-center mx-auto max-w-[640px] mb-10">
						{WHERE_TO_STAY.body}
					</h5>

					<div className="flex flex-row w-full max-w-1/4 justify-around text-[#BF8F67]">
						{WHERE_TO_STAY.hotels.map((hotel) => {
							return (
								<div className="flex flex-col w-1/4">
									<h4 className="font-newsreader text-2xl lg:text-2xl leading-[100%] text-center mb-4">
										{hotel.name}
									</h4>

									<h5 className="font-newsreader text-lg lg:text-lg leading-[100%] text-center mx-auto max-w-[640px] whitespace-pre-wrap">
										{hotel.info}
									</h5>
								</div>
							);
						})}
					</div>
				</div>
			</ColoredBgWrapper>
		</Layout>
	);
}
