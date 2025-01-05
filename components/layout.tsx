import Sections from './sections';
import Meta from './meta';
import BackToTop from './back-to-top';
import { useEffect, useState } from 'react';
import { LayoutProps } from '../lib/types/sections';
import PageHero from './page-hero';
import constants from '../lib/constants';
import Link from 'next/link';

export default function Layout({
	children,
	noSiteHeader,
	textBlack,
}: LayoutProps) {

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('in-view');
				}
			});
		});

		const fadeUpElements = document.querySelectorAll('.fade-up');
		fadeUpElements.forEach((element) => observer.observe(element));
	}, []);

	return (
		<>
			<Meta />
			<div className="min-h-screen neutral-bg flex w-full relative ">
				{!noSiteHeader && <Sections.SiteHeader textBlack={textBlack} />}
				<main className="neutral-bg w-full flex flex-col relative ">
					{children}
					<PageHero
						image={constants.FOOTER.image}
						alt=""
						size="custom"
						customSize=" h-[470px] lg:h-[500px]"
					>
						<div className=" mx-auto flex-col md:flex-col flex items-center justify-center text-white text-center">
							<div className='flex flex-col fade-up'>
								<h2 className="text-[#FCF4EA] font-playfair text-4xl lg:text-[3rem] leading-[100%] font-medium z-20">
									{constants.FOOTER.title}
								</h2>
								<h3 className="mt-4 mb-4 text-xl text-[#FCF4EA] z-20 whitespace-pre-wrap">
									{constants.HOME_HERO.subtitle}
								</h3>
								<div className="flex flex-row gap-x-10 z-20 justify-center">
									<Link
										className="button text-white bg-[#46542f] hover:bg-[#FCF4EA] px-6 py-3 hover:text-[#46542f] lg:text-xl"
										href={constants.FOOTER.href2}
										target="_blank">
										{constants.FOOTER.button2}
									</Link>
									</div>
							</div>
							<div
								className="absolute w-full h-full z-10 opacity-20"
								style={{
									background:
										'linear-gradient(black,black)',
								}}
							/>
						</div>
					</PageHero>
					<BackToTop />
				</main>
			</div>
		</>
	);
}

