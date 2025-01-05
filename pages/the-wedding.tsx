import Head from 'next/head';
import Layout from '../components/layout';
import Constants from '../lib/constants';
import PageHero from '../components/page-hero';
import { ColoredBgWrapper } from '../components/page-sections';
import { useEffect, useState } from 'react';

export default function TheWedding() {
	const [isAnchor, setIsAnchor] = useState<any>('schedule')
	const handleAnchorClick = (anchor: any) => {
		setIsAnchor(anchor)
	}
	const {
		WEDDING_HERO,
		WEDDING_ANCHORS,
		SCHEDULE_OF_EVENTS,
		ATTIRE_FOR_GUESTS,
		ENTOURAGE,
	} = Constants;

	const scrolltoHash = function (element_id: string) {
		const element = document.getElementById(element_id);
		const yOffset = element_id === 'schedule' ? -190 : -150;
		const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
		window.scrollTo({top: y, behavior: 'smooth'});
	};

	const [isScrollUp, setIsScrollUp] = useState(true);
	
		useEffect(() => {
		const threshold = 0;
		let lastScrollY = window.scrollY;
		let ticking = false;
	
		const updateScrollDir = () => {
			const scrollY = window.scrollY;
	
			if (Math.abs(scrollY - lastScrollY) < threshold) {
			ticking = false;
			return;
			}
			setIsScrollUp(scrollY > lastScrollY ? false : true);
			lastScrollY = scrollY > 0 ? scrollY : 0;
			ticking = false;
		};
	
		const onScroll = () => {
			if (!ticking) {
			window.requestAnimationFrame(updateScrollDir);
			ticking = true;
			}
		};
	
		window.addEventListener("scroll", onScroll);
	
		return () => window.removeEventListener("scroll", onScroll);
		}, [isScrollUp]);


	return (
		<Layout>
			<Head>
				<title>{`${Constants.CMS_NAME}`}</title>
			</Head>
			<PageHero
				image={WEDDING_HERO.image}
				alt=""
				size="custom"
				bgGradient="none"
				priority
				className="justify-start bg-center bg-cover bg-no-repeat mt-[72px] lg:mt-[127px]"
				customSize=" h-[calc(80svh-72px)] lg:h-[calc(78svh-127px)]"
			/>

			<ColoredBgWrapper bgColor="nata"> 
				
				<div className="flex w-full max-w-[1920px] mx-auto">
					<div className="flex-col flex self-center w-full text-white mx-auto m-10 fade-up">
						<h1 className="text-[#573319] font-playfair font-semibold text-5xl lg:text-7xl leading-[100%] text-center">
							{WEDDING_HERO.title}
						</h1>
					</div>
				</div>
				</ColoredBgWrapper>


				<div className={`flex flex-row py-4 w-full text-base lg:text-2xl z-30 text-[#46542f] px-4 justify-around sticky transition-all ease-in-out duration-300 ${!isScrollUp ? 'top-0' : 'top-[72px] lg:top-[127px]' } bg-[#FCF4EA]`}>
					{WEDDING_ANCHORS.map((anchor) => {
						return (
							<a
								className={`w-1/4 text-center cursor-pointer ${isAnchor === anchor.id ? 'border-b border-[#46542f]' : ''}`}
								onClick={() => {
									scrolltoHash(anchor.id);
									handleAnchorClick(anchor.id)
								}}>
								{anchor.title}
							</a>
						);
					})}
			</div>
				<ColoredBgWrapper bgColor="nata"> 
				<div id="schedule"/>
				<div
					className="flex flex-col lg:flex-row w-full max-w-[1920px] mx-auto gap-x-20 px-10 lg:px-32 py-14">
					<div className="flex flex-col w-full lg:w-[48%] mb-20 lg:mb-0 justify-center ">
						<h2 className="font-playfair text-4xl text-center fade-up text-[#573319] font-playfair lg:text-[3rem] leading-[100%] font-medium">
							{SCHEDULE_OF_EVENTS.title}
						</h2>
						
					</div>
					<div className="flex flex-col lg:max-w-[400px] w-full text-[#5F6F52] fade-up">
						{SCHEDULE_OF_EVENTS?.events.map((item) => {
							return (
								<div className="flex flex-row mb-16 justify-between">
									<div className="flex flex-col">
										<h3 className="text-2xl lg:text-[2.125rem] text-[#46542f]">
											{item.event}
										</h3>
										<span className="text-base italic text-[#573319]">
											{item.description}
										</span>
									</div>
									<div>
										<h4 className="text-xl lg:text-2xl text-[#46542f]">
											{item.time}
										</h4>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</ColoredBgWrapper>

			<ColoredBgWrapper bgColor="white">
				<div id="attire"/>
				<div
					className="flex flex-col-reverse lg:flex-row w-full max-w-[1920px] mx-auto gap-x-20 px-10 lg:px-32 py-10 pt-20 lg:py-20 fade-up">
					<div className="flex flex-col w-full lg:w-[55%] mb-20 lg:mb-0 justify-center ">
						<div className="flex flex-col-reverse w-full">
							<div className="flex flex-col w-full  mb-10 lg:mb-10 justify-center ">
								<h3 className="leading-[100%] text-center mb-6 text-2xl lg:text-[2.125rem] text-[#46542f]">
									{ATTIRE_FOR_GUESTS.ladies.title}
								</h3>
								<h4 className="text-center text-xl text-[#573319] mb-1">
									{ATTIRE_FOR_GUESTS.ladies.description}
								</h4>
								<span className="text-base italic text-center text-[#573319]">
									{ATTIRE_FOR_GUESTS.ladies.subDescription}
								</span>
							</div>
							<div className="flex flex-col w-full mb-10 lg:mb-20 justify-center ">
								<h3 className="leading-[100%] text-center mb-6 text-2xl lg:text-[2.125rem] text-[#46542f]">
									{ATTIRE_FOR_GUESTS.gentlemen.title}
								</h3>
								<h4 className="text-center text-xl text-[#573319] mb-1">
									{ATTIRE_FOR_GUESTS.gentlemen.description}
								</h4>
								<span className="text-base italic text-center text-[#573319]">
									{ATTIRE_FOR_GUESTS.gentlemen.subDescription}
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
								const className = `${colors[i]} w-1/4 pt-[25%]`;
								return <div className={className} />;
							})}
						</div>
						<span className="text-base italic text-center text-[#573319]">
							{ATTIRE_FOR_GUESTS.note}
						</span>
					</div>
					<div className="flex flex-col w-full lg:w-[45%] mb-20 lg:mb-0 justify-center ">
						<h2 className="font-playfair text-center fade-up text-[#573319] font-playfair text-4xl lg:text-[3rem] leading-[100%]">
							{ATTIRE_FOR_GUESTS.title}
						</h2>
					</div>
				</div>
			</ColoredBgWrapper>

			{/* <ColoredBgWrapper bgColor="nata">
				<div
					id="entourage"
					className="flex flex-col lg:flex-row w-full max-w-[1920px] mx-auto gap-x-20 px-4 lg:px-32 py-10 lg:py-10 fade-up">
					<div className="flex flex-col w-full lg:w-[48%] mb-20 justify-start lg:my-40 relative">
						<h1 className="sticky top-[40vh] font-playfair text-5xl lg:text-6xl leading-[100%] text-center text-[#5F6F52]">
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
