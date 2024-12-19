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
			<PageHero
				image={HOME_HERO.image}
				alt=""
				size="md"
				bgGradient="none"
				customPosition=" object-[left_-5rem_top_0rem] lg:object-center"
				priority
				className="justify-start bg-left bg-cover bg-no-repeat">
				<div className="flex w-full max-w-[1920px] mx-auto justify-end">
					<div className="flex-col flex self-end lg:self-center w-full text-white max-w-[700px] m-10 lg:mr-20 fade-up lg:text-right">
						<h1 className="text-[#573319] font-playfair font-semibold text-5xl lg:text-7xl leading-[100%]">
							{HOME_HERO.title}
						</h1>
						<h3 className="text-2xl lg:text-[2.125rem] my-10 text-[#46542f]">
							{HOME_HERO.subtitle}
						</h3>
						<div className="flex flex-row gap-x-10 justify-end">
							<Link
								className="button text-white bg-[#46542f] hover:bg-[#FCF4EA] px-6 py-3 hover:text-[#46542f] lg:text-xl"
								href={FOOTER.href2}
								target="_blank">
								{FOOTER.button2}
							</Link>
							<Link
								href={HOME_HERO.href}
								className="button mx-auto lg:mx-0 button py-3 px-6 text-base border w-fit tracking-wider rounded hover:text-white text-[#46542f]  hover:bg-[#46542f] border-[#46542f] lg:text-xl">
								{HOME_HERO.button}
							</Link>
						</div>
					</div>
				</div>
			</PageHero>

			<ColoredBgWrapper bgColor="nata">
				<div className="flex flex-col lg:flex-row w-full py-14 px-6 lg:px-20 max-w-[1920px] justify-between mx-auto lg:gap-x-12">
					<div className="flex-col text-center lg:text-left flex self-center max-w-[450px] mb-10 lg:mb-0 fade-up">
						<h2 className="text-[#573319] font-playfair text-4xl lg:text-[3rem] leading-[100%] font-medium">
							{OUR_SPECIAL_DAY.title}
						</h2>
						<CountDownTimer />
					</div>

					<div className="flex flex-col lg:max-w-[950px] lg:min-w-[450px] w-full mx-auto lg:mx-none ">
						<div className="hidden lg:flex flex-row sm:justify-center lg:justify-start gap-x-6 lg:gap-x-16 fade-up">
							{HOME_PORTRAITS.map((portrait) => {
								return (
									<div
										className={`flex-col items-center w-full relative fade-up flex-grow max-w-[156px] xl:max-w-[422px]`}>
										<div className="relative w-full h-[287px] lg:h-[400px] ">
											<Image
												src={portrait.image}
												alt=""
												width={422}
												height={492}
												placeholder="blur"
												className="absolute object-cover object-bottom w-full h-[287px] lg:h-[400px]"
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

				<div className="flex flex-col lg:flex-row w-full max-w-[1920px] mx-auto gap-x-20 px-10 lg:px-32 py-10">
					<div className="flex flex-col w-full lg:w-[48%] mb-20 lg:mb-0 lg:justify-center lg:pr-20 text-[#5F6F52]">
						<div className="flex flex-col fade-up">
							<h3 className="text-2xl lg:text-[2.125rem] text-[#46542f]">
								Our Lady of Lourdes Parish
							</h3>
							<h4 className="text-xl lg:text-2xl text-[#46542f]">
								Tagaytay, Cavite
							</h4>
						</div>
						<hr className="w-full border-t self-center max-w-full border-[#5F6F52] my-10" />
						<div className="flex flex-col fade-up">
							<h3 className="text-2xl lg:text-[2.125rem] text-[#46542f]">
								Arocarrìa
							</h3>
							<h4 className="text-xl lg:text-2xl text-[#46542f]">
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
								<div className="flex flex-row mb-6 justify-between">
									<div className="flex flex-col">
										<h3 className="text-2xl lg:text-[2.125rem] text-[#46542f]">
											{item.event}
										</h3>
										<span className="text-xl italic text-[#573319]">
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
		<div className="flex flex-row gap-x-4 mt-4 mb-6 lg:my-10 capitalize text-3xl lg:text-[2.125rem] my-10 text-[#46542f] flex-wrap justify-evenly">
			<h2 className="flex flex-row font-normal gap-x-2">
				<p className="font-semibold ">{countDownTimer.countdownDays}</p>
				days
			</h2>
			<h2 className="flex flex-row font-normal gap-x-2">
				<p className="font-semibold">{countDownTimer.countdownHours}</p>
				hours{' '}
			</h2>
			<h2 className="flex flex-row font-normal gap-x-2">
				<p className="font-semibold">
					{countDownTimer.countdownMinutes}
				</p>
				minutes{' '}
			</h2>
			<h2 className="flex flex-row font-normal gap-x-2">
				<p className="font-semibold">
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
