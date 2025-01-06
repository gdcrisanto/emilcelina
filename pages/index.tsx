import Head from 'next/head';
import Layout from '../components/layout';
import Constants from '../lib/constants';
import PageHero from '../components/page-hero';
import { ColoredBgWrapper } from '../components/page-sections';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Sections from '../components/sections';

export default function Home() {
	const {
		HOME_HERO,
		OUR_SPECIAL_DAY,
		HOME_PORTRAITS,
		ORDER_OF_EVENTS,
		FOOTER,

	} = Constants;

	return (
		<Layout>
			<Head>
				<title>{`${Constants.CMS_NAME}`}</title>
			</Head>
			<ColoredBgWrapper bgColor="nata">
				<div className="flex flex-col-reverse lg:flex-row w-full max-w-[1920px] mx-auto gap-x-10 px-4 lg:px-0 py-0 gap-y-10 lg:gap-y-12 pt-[72px] lg:pt-[127px] pb-8 lg:pb-0">
					<div className="flex flex-col w-full lg:w-1/2">
						<div className="flex-col flex lg:px-10 w-full my-auto fade-up text-center">
							<h1 className="font-pinyon leading-[100%] text-[#573319] font-normal text-8xl lg:text-[5.25rem] ">
								Loving is <span className='text-9xl'>EC </span>
							</h1>
							<h3 className=" my-10 text-xl text-[#46542f] whitespace-pre-wrap">
								{HOME_HERO.subtitle}
							</h3>
							<div className="flex flex-row gap-x-4 justify-center">
							<Link
								className="button text-white bg-[#46542f] hover:bg-[#FCF4EA] px-6 py-3 hover:text-[#46542f] lg:text-xl max-w-[190px] w-full text-nowrap"
								href={FOOTER.href2}
								target="_blank">
								{FOOTER.button2}
							</Link>
							<Link
								href={HOME_HERO.href}
								className="button mx-auto lg:mx-0 button py-3 px-6 text-base border tracking-wider rounded hover:text-white text-[#46542f]  hover:bg-[#46542f] border-[#46542f] lg:text-xl max-w-[190px] w-full text-nowrap">
								{HOME_HERO.button}
							</Link>
						</div>
						</div>
					</div>
					<PageHero
						image={HOME_HERO.image}
						alt=""
						size="custom"
						customSize=" h-[calc(70svh-127px)] lg:h-[calc(100svh-127px)]"
						customPosition=" object-[left_-2.5rem_top_0rem] lg:object-[left_-6rem_top_0rem]"
						bgGradient="none"
						priority
						className="justify-start bg-center bg-cover bg-no-repeat w-full"
					/>
				</div>
			</ColoredBgWrapper>

			<ColoredBgWrapper bgColor="nata">
				<div className="flex w-full max-w-[1920px] mx-auto justify-center">
					<div className="flex-col flex self-end lg:self-center w-full lg:p-20 lg:pb-2 fade-up z-20">
						<h2 className="text-[#573319] py-6 lg:py-0 font-playfair text-4xl lg:text-[3rem] leading-[100%] font-medium max-w-[1300px] text-center mx-auto">
							{OUR_SPECIAL_DAY.title}
						</h2>
						<CountDownTimer />
					</div>
				</div>
				<div className="flex flex-col lg:flex-row w-full py-14 px-1 lg:px-20 max-w-[1920px] justify-between mx-auto lg:gap-x-12">
					<div className="flex flex-col lg:max-w-[950px] lg:min-w-[450px] w-full mx-auto lg:mx-none ">
						<div className="hidden lg:flex flex-row sm:justify-center lg:justify-start gap-x-6 lg:gap-x-16 fade-up">
							{HOME_PORTRAITS.map((portrait) => {
								return (
									<div
										className={`flex-col items-center w-full relative fade-up flex-grow max-w-[156px] xl:max-w-[422px]`}>
										<div className="image-container flex relative w-full h-[287px] lg:h-[400px] max-w-[300px] overflow-clip">
											<Link
												className="self-end mb-10 bg-[#FCF4EA] mx-auto button capitalize button text-center py-3 px-6 text-base border tracking-wider rounded hover:text-white text-[#46542f]  hover:bg-[#46542f] border-[#46542f] lg:text-xl max-w-[190px] w-full text-nowrap z-20 h-fit"
												href={portrait.href}>
												{portrait.text}
											</Link>
											<Image
												src={portrait.image}
												alt=""
												width={422}
												height={492}
												placeholder="blur"
												className="absolute object-cover object-bottom w-full h-[287px] lg:h-[400px] max-w-[300px] max-h-[400px] segmentation z-[1]"
											/>
											<div
												className="absolute w-full h-full z-10 overlay"
												style={{
													background:
														'linear-gradient(black,black)',
												}}
											/>
										</div>
									</div>
								);
							})}
						</div>
						<div className="flex lg:hidden flex-row sm:justify-center lg:justify-start gap-x-6 lg:gap-x-16 fade-up">
							<Sections.Slider
								images={HOME_PORTRAITS}
								textWhite
							/>
						</div>
					</div>
				</div>
			</ColoredBgWrapper>
			<ColoredBgWrapper bgColor="white">
				<div className="flex flex-col lg:flex-row w-full max-w-[1920px] mx-auto gap-x-20 px-10 lg:px-32 py-10">
					<div className="flex flex-col text-center lg:text-left w-full lg:w-[48%] mb-20 lg:mb-0 lg:justify-center lg:pr-20 text-[#5F6F52]">
						<div className="flex flex-col fade-up">
							<h3 className="text-2xl lg:text-[2.125rem] text-[#46542f]">
								Our Lady of Lourdes Parish
							</h3>
							<h4 className="text-xl lg:text-2xl text-[#573319]">
								Tagaytay, Cavite
							</h4>
						</div>
						<hr className="w-full border-t self-center max-w-full border-[#5F6F52] my-10" />
						<div className="flex flex-col fade-up">
							<h3 className="text-2xl lg:text-[2.125rem] text-[#46542f]">
								Arocarrìa
							</h3>
							<h4 className="text-xl lg:text-2xl text-[#573319]">
								Alfonso, Cavite
							</h4>
						</div>
					</div>
					<div className="flex flex-col lg:max-w-[400px] w-full text-[#5F6F52] fade-up">
						<h2 className="text-[#573319] font-playfair text-4xl lg:text-[3rem] leading-[100%] mb-8 font-medium">
							{ORDER_OF_EVENTS.title}
						</h2>
						{ORDER_OF_EVENTS?.events.map((item) => {
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
		</Layout>
	);
}

const CountDownTimer = () => {
	const [countDownTimer, setCountDownTimer] = useState<any>({
		countdownDays: 0,
		countdownHours: 0,
		countdownMinutes: 0,
		countdownSeconds: 0,
	});

	const weddingDate = '05/10/2025 3:00 PM';

	useEffect(() => {
		const timeInterval = setInterval(() => {
			Timer({ weddingDate, setCountDownTimer });
			if (countDownTimer < 0) {
				clearInterval(timeInterval);
			}
		}, 1000);
	}, []);
	return (
		<div className="flex flex-row text-center mt-2 mb-0 lg:my-6 capitalize my-10 text-[#573319] gap-x-8 lg:gap-x-12 max-w-[700px] mx-auto">
			<h2 className="flex flex-col font-normal gap-y-2 ">
				<p className="font-semibold text-2xl lg:text-[2.125rem]">{countDownTimer.countdownDays}</p>
				days
			</h2>
			<h2 className="flex flex-col font-normal gap-y-2">
				<p className="font-semibold text-2xl lg:text-[2.125rem]">{countDownTimer.countdownHours}</p>
				hours{' '}
			</h2>
			<h2 className="flex flex-col font-normal gap-y-2">
				<p className="font-semibold text-2xl lg:text-[2.125rem]">
					{countDownTimer.countdownMinutes}
				</p>
				minutes{' '}
			</h2>
			<h2 className="flex flex-col font-normal gap-y-2">
				<p className="font-semibold text-2xl lg:text-[2.125rem]">
					{countDownTimer.countdownSeconds}
				</p>
				seconds{' '}
			</h2>
		</div>
	);
};

const Timer = ({ weddingDate, setCountDownTimer }) => {
	const countdownDateTime = new Date(weddingDate).getTime();
	const currentTime = new Date().getTime();
	const remainingDayTime = countdownDateTime - currentTime;
	const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
	const totalHours = Math.floor(
		(remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const totalMinutes = Math.floor(
		(remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
	);
	const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

	const runningCountdownTime = {
		countdownDays: totalDays,
		countdownHours: totalHours,
		countdownMinutes: totalMinutes,
		countdownSeconds: totalSeconds,
	};

	setCountDownTimer({
		countdownDays: totalDays,
		countdownHours: totalHours,
		countdownMinutes: totalMinutes,
		countdownSeconds: totalSeconds,
	});
	return runningCountdownTime;
};
