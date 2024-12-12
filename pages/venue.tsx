import Head from 'next/head';
import Layout from '../components/layout';
import Constants from '../lib/constants';
import PageHero from '../components/page-hero';
import { ColoredBgWrapper } from '../components/page-sections';

export default function TheWedding() {
	const { VENUE_HERO, VENUE_ANCHORS } = Constants;

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
						<h1 className="font-garamond text-7xl lg:text-8xl leading-[100%] text-center">
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
								className="w-1/3 text-center text-2xl cursor-pointer"
								// href={`#${anchor.id}`}
								onClick={() => {
									scrolltoHash(anchor.id);
								}}>
								{anchor.title}
							</a>
						);
					})}
				</div>

				<div
					id="church"
					className="flex flex-col lg:flex-row w-full max-w-[1920px] mx-auto gap-x-20 px-10 lg:px-32 py-10">
					{/* <div className="flex flex-col w-full lg:w-[48%] mb-20 lg:mb-0 justify-center ">
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
					</div> */}
				</div>
			</ColoredBgWrapper>

			<ColoredBgWrapper bgColor="white">
				<div
					id="reception"
					className="flex flex-col lg:flex-row w-full max-w-[1920px] mx-auto gap-x-20 px-10 lg:px-32 py-10 lg:py-20">
					{/* <div className="flex flex-col w-full lg:w-1/2 mb-20 lg:mb-0 justify-center ">
						<div className="flex flex-row w-full">
							<div className="flex flex-col w-full lg:w-1/2 mb-20 lg:mb-0 justify-center ">
								<h1 className="font-garamond text-4xl lg:text-4xl leading-[100%] text-center mb-6">
									{ATTIRE_FOR_GUESTS.ladies.title}
								</h1>
								<span className="text-lg  font-thin text-center">
									{ATTIRE_FOR_GUESTS.ladies.description}
								</span>
							</div>
							<div className="flex flex-col w-full lg:w-1/2 mb-20 lg:mb-0 justify-center ">
								<h1 className="font-garamond text-4xl lg:text-4xl leading-[100%] text-center mb-6">
									{ATTIRE_FOR_GUESTS.gentlemen.title}
								</h1>
								<span className="text-lg  font-thin text-center">
									{ATTIRE_FOR_GUESTS.gentlemen.description}
								</span>
							</div>
						</div>
						<div className="flex flex-row w-full justify-around my-6">
							{ATTIRE_FOR_GUESTS.colors.map((color) => {
								const className = `bg-[${color}] w-1/4 h-[100px]`;
								return <div className={className} />;
							})}
						</div>
						<span className="text-sm italic font-thin text-center">
							{ATTIRE_FOR_GUESTS.note}
						</span>
					</div>
					<div className="flex flex-col w-full lg:w-1/2 mb-20 lg:mb-0 justify-center ">
						<h1 className="font-garamond text-7xl lg:text-7xl leading-[100%] text-center">
							{ATTIRE_FOR_GUESTS.title}
						</h1>
					</div> */}
				</div>
			</ColoredBgWrapper>

			<ColoredBgWrapper bgColor="nata">
				<div
					id="hotels"
					className="flex flex-col lg:flex-row w-full max-w-[1920px] mx-auto gap-x-20 px-10 lg:px-32 py-10 lg:py-10">
					<div className="flex flex-col w-full lg:w-[48%] mb-20 lg:mb-0 justify-center relative">
						{/* <h1 className="sticky top-0 font-garamond text-7xl lg:text-7xl leading-[100%] text-center">
							{ENTOURAGE.title}
						</h1> */}
					</div>
					{/* <div className="flex flex-col w-full">
						{ENTOURAGE?.sections.map((section) => {
							return (
								<div className="flex flex-row mb-6 justify-center text-center">
									<div className="flex flex-col w-full gap-y-4 mb-6">
										{typeof section.title === 'string' ? (
											<h3 className="text-3xl">
												{section.title}
											</h3>
										) : (
											<>
												<div className="flex flex-row gap-x-6">
													<h3 className="text-3xl w-1/2 text-right self-end">
														{section.title.left}
													</h3>
													<h3 className="text-3xl w-1/2 text-left self-end">
														{section.title.right}
													</h3>
												</div>
											</>
										)}

										{typeof section.names === 'string' ? (
											<span className="text-lg font-thin">
												{section.names}
											</span>
										) : (
											section.names.map((name) => {
												return (
													<div className="flex flex-row gap-x-6 justify-center ">
														{typeof name ===
														'string' ? (
															<span className="text-lg font-thin">
																{name}
															</span>
														) : (
															<>
																<span className="text-lg font-thin w-1/2 text-right">
																	{name.left}
																</span>
																<span className="text-lg font-thin w-1/2 text-left">
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
					</div> */}
				</div>
			</ColoredBgWrapper>
		</Layout>
	);
}
