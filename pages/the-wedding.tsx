import Head from 'next/head';
import Layout from '../components/layout';
import Constants from '../lib/constants';
import PageHero from '../components/page-hero';
import { ColoredBgWrapper } from '../components/page-sections';

export default function TheWedding() {
	const {
		WEDDING_HERO,
		WEDDING_ANCHORS,
		SCHEDULE_OF_EVENTS,
		ATTIRE_FOR_GUESTS,
		ENTOURAGE,
	} = Constants;

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
				image={WEDDING_HERO.image}
				alt=""
				size="sm"
				bgGradient="none"
				priority
				className="justify-start bg-center bg-cover bg-no-repeat">
				<div className="flex w-full max-w-[1920px] mx-auto">
					<div className="flex-col flex self-center w-full text-white mx-auto lg:m-20 fade-up">
						<h1 className="font-newsreader text-[#5F6F52] text-5xl lg:text-6xl leading-[100%] text-center">
							{WEDDING_HERO.title}
						</h1>
					</div>
				</div>
			</PageHero>

			<ColoredBgWrapper bgColor="nata">
				<div className="flex flex-row my-6 w-full text-[#5F6F52] fade-up px-4 justify-around">
					{WEDDING_ANCHORS.map((anchor) => {
						return (
							<a
								className="w-1/3 text-center text-2xl cursor-pointer"
								onClick={() => {
									scrolltoHash(anchor.id);
								}}>
								{anchor.title}
							</a>
						);
					})}
				</div>

				<div
					id="schedule"
					className="flex flex-col lg:flex-row w-full max-w-[1920px] mx-auto gap-x-20 px-10 lg:px-32 py-10">
					<div className="flex flex-col w-full lg:w-[48%] mb-20 lg:mb-0 justify-center ">
						<h1 className="font-newsreader text-5xl lg:text-6xl leading-[100%] text-center text-[#5F6F52] fade-up">
							{SCHEDULE_OF_EVENTS.title}
						</h1>
					</div>
					<div className="flex flex-col lg:max-w-[400px] w-full text-[#5F6F52] fade-up">
						{SCHEDULE_OF_EVENTS?.events.map((item) => {
							return (
								<div className="flex flex-row mb-6 justify-between">
									<div className="flex flex-col">
										<h3 className="text-3xl">
											{item.event}
										</h3>
										<span className="text-sm italic font-light text-[#BF8F67]">
											{item.description}
										</span>
									</div>
									<div>
										<span className="font-light">
											{item.time}
										</span>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</ColoredBgWrapper>

			<ColoredBgWrapper bgColor="white">
				<div
					id="attire"
					className="flex flex-col-reverse lg:flex-row w-full max-w-[1920px] mx-auto gap-x-20 px-10 lg:px-32 py-10 lg:py-20 fade-up">
					<div className="flex flex-col w-full lg:w-1/2 mb-20 lg:mb-0 justify-center ">
						<div className="flex flex-col-reverse lg:flex-row w-full">
							<div className="flex flex-col w-full lg:w-1/2 mb-10 lg:mb-0 justify-center ">
								<h1 className="font-newsreader text-4xl lg:text-4xl leading-[100%] text-center mb-6 text-[#5F6F52]">
									{ATTIRE_FOR_GUESTS.ladies.title}
								</h1>
								<span className="text-lg  font-light text-center text-[#5F6F52]">
									{ATTIRE_FOR_GUESTS.ladies.description}
								</span>
							</div>
							<div className="flex flex-col w-full lg:w-1/2 mb-10 lg:mb-0 justify-center ">
								<h1 className="font-newsreader text-4xl lg:text-4xl leading-[100%] text-center mb-6 text-[#5F6F52]">
									{ATTIRE_FOR_GUESTS.gentlemen.title}
								</h1>
								<span className="text-lg  font-light text-center text-[#5F6F52]">
									{ATTIRE_FOR_GUESTS.gentlemen.description}
								</span>
							</div>
						</div>
						<div className="flex flex-row w-full justify-around my-6">
							{ATTIRE_FOR_GUESTS.colors.map((color, i) => {
								const colors = [
									'bg-[#F0E8DB]',
									'bg-[#E2D4C5]',
									'bg-[#D8C9BA]',
								];
								const className = `${colors[i]} w-1/4 h-[100px]`;
								return <div className={className} />;
							})}
						</div>
						<span className="text-sm italic font-light text-center text-[#BF8F67]">
							{ATTIRE_FOR_GUESTS.note}
						</span>
					</div>
					<div className="flex flex-col w-full lg:w-1/2 mb-20 lg:mb-0 justify-center ">
						<h1 className="font-newsreader text-5xl lg:text-6xl leading-[100%] text-center text-[#5F6F52]">
							{ATTIRE_FOR_GUESTS.title}
						</h1>
					</div>
				</div>
			</ColoredBgWrapper>

			{/* <ColoredBgWrapper bgColor="nata">
				<div
					id="entourage"
					className="flex flex-col lg:flex-row w-full max-w-[1920px] mx-auto gap-x-20 px-4 lg:px-32 py-10 lg:py-10 fade-up">
					<div className="flex flex-col w-full lg:w-[48%] mb-20 justify-start lg:my-40 relative">
						<h1 className="sticky top-[40vh] font-newsreader text-5xl lg:text-6xl leading-[100%] text-center text-[#5F6F52]">
							{ENTOURAGE.title}
						</h1>
					</div>
					<div className="flex flex-col w-full text-[#5F6F52]">
						{ENTOURAGE?.sections.map((section) => {
							return (
								<div className="flex flex-row mb-6 justify-center text-center">
									<div className="flex flex-col w-full gap-y-4 mb-6 ">
										{typeof section.title === 'string' ? (
											<h3 className="text-2xl lg:text-3xl">
												{section.title}
											</h3>
										) : (
											<>
												<div className="flex flex-row gap-x-6">
													<h3 className="text-2xl lg:text-3xl w-1/2 text-right self-end">
														{section.title.left}
													</h3>
													<h3 className="text-2xl lg:text-3xl w-1/2 text-left self-end">
														{section.title.right}
													</h3>
												</div>
											</>
										)}

										{typeof section.names === 'string' ? (
											<span className="text-lg font-light">
												{section.names}
											</span>
										) : (
											section.names.map((name) => {
												return (
													<div className="flex flex-row gap-x-6 justify-center ">
														{typeof name ===
														'string' ? (
															<span className="text-lg font-light">
																{name}
															</span>
														) : (
															<>
																<span className="text-lg font-light w-1/2 text-right">
																	{name.left}
																</span>
																<span className="text-lg font-light w-1/2 text-left">
																	{name.right}
																</span>
															</>
														)}
													</div>
												);
											})
										)}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</ColoredBgWrapper> */}
		</Layout>
	);
}
