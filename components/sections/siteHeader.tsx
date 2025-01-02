import Link from 'next/link';
import HeaderMenu from '../header-menu';
import Vectors from '../vectors';
import { useEffect, useState } from 'react';
import { SiteHeaderProps } from '../../lib/types/sections';

const SiteHeader = ({ textBlack }: SiteHeaderProps) => {
	const [navBg, setNavBg] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const changeNavBg = () => {
		window.scrollY >= 1 ? setNavBg(true) : setNavBg(false);
	};
	useEffect(() => {
		window.addEventListener('scroll', changeNavBg);
		return () => {
			window.removeEventListener('scroll', changeNavBg);
		};
	}, []);


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
		<div
			onScroll={changeNavBg}
			className={
				`z-50 h-[72px] lg:h-[127px] w-full mx-auto fixed bg-[#FCF4EA] transition-all ease-in-out duration-300 lg:duration-200 ${(isScrollUp || isOpen) ? 'top-0' : 'top-[-72px] lg:top-[-172px]'} ${isOpen ? 'site-header-scroll' : ''}`
			}
		>
			<div className="flex z-50 flex-row container mx-auto h-full px-6 justify-between capitalize font-normal items-center">
				
				<HeaderMenu
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					textBlack={textBlack}
					navBg={navBg}
				/>
			</div>
		</div>
	);
};

export default { SiteHeader };
