import Head from 'next/head';
import Layout from '../components/layout';
import Constants from '../lib/constants';
import PageHero from '../components/page-hero';
import { ColoredBgWrapper } from '../components/page-sections';
import Sections from '../components/sections';
import Link from 'next/link';
import Image from 'next/image';

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
				size="md"
				bgGradient="none"
				priority
				customPosition=" object-[right_-26rem_top_0rem] lg:object-center "
				className="justify-start bg-center bg-cover bg-no-repeat"
			/>

			<ColoredBgWrapper bgColor="nata">
				<div className="flex w-full max-w-[1920px] mx-auto">
					<div className="flex-col flex self-center w-full text-white mx-auto m-10 fade-up">
						<h1 className="text-[#573319] font-playfair font-semibold text-5xl lg:text-7xl leading-[100%] text-center">
							{VENUE_HERO.title}
						</h1>
					</div>
				</div>

				<div className="flex flex-row my-6 w-full fade-up">
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
										<div className="w-full lg:max-w-[550px] mx-auto fade-up">
											<PageHero
												image={venue.image}
												alt=""
												size="custom"
												customSize=" h-[180px] lg:h-[445px]"
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

			<ColoredBgWrapper bgColor="white">
				<div
					id="reception"
					className="flex flex-col w-full max-w-[1920px] mx-auto gap-x-20 px-4 lg:px-32 py-10 lg:py-20">
					<div className="flex w-full max-w-[1920px] mx-auto fade-up">
						<div className="flex-col flex self-center w-full text-white mx-auto lg:mb-20 fade-up">
							<h2 className="font-playfair text-[#46542f] text-4xl lg:text-6xl leading-[100%] text-center">
								{WHERE_TO_STAY.title}
							</h2>
						</div>
					</div>

					<h4 className="text-xl lg:text-2xl leading-[100%] text-center mx-auto max-w-[640px] mb-10 fade-up text-[#46542f]">
						{WHERE_TO_STAY.body}
					</h4>

					<div className="flex flex-col lg:flex-row w-full max-w-full lg:max-w-1/4 justify-around text-[#573319] fade-up gap-y-6">
						{WHERE_TO_STAY.hotels.map((hotel) => {
							return (
								<div className="flex flex-col  w-full lg:w-1/4 self-end">
									<div
										className={`flex-col items-center w-full relative fade-up flex-grow max-w-full mb-4`}>
										<div className=" flex relative w-full h-[200px] lg:h-[200px] max-w-full">
											<Link
												className="flex text-[#FCF4EA] capitalize z-20 absolute w-full h-full items-end p-2 text-2xl"
												href={hotel.href}
												target="_blank"
											/>
											<Image
												src={hotel.image}
												alt=""
												width={422}
												height={300}
												placeholder="blur"
												className="absolute object-cover object-bottom w-full h-[287px] lg:h-[200px] max-h-[200px] z-[1]"
											/>
										</div>
									</div>
									<h3 className="leading-[100%] text-center mb-4 text-2xl lg:text-[2.125rem] text-[#46542f]">
										{hotel.name}
									</h3>

									<span className="font-playfair text-xl lg:text-lg leading-[100%] text-center mx-auto max-w-[640px] whitespace-pre-wrap">
										{hotel.info}
									</span>
								</div>
							);
						})}
					</div>
				</div>
			</ColoredBgWrapper>
		</Layout>
	);
}
