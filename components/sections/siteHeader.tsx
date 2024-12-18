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
	return (
		<div
			onScroll={changeNavBg}
			className={
				'site-header mx-auto w-full ' +
				(navBg || isOpen
					? ` site-header-scroll-mobile md:site-header-scroll fixed top-[-72px] lg:top-[-172px] `
					: ` site-header-top absolute ${
							textBlack ? ' text-black ' : ' text-[#46542f] '
					  } `) +
				(!isOpen ? (navBg ? '' : ' fade-out ') : '') +
				(isOpen ? ' top-[0] bg-[#FCF4EA] ' : '')
			}>
			<div className="flex z-50 flex-row container mx-auto h-full px-6 justify-between capitalize font-normal items-center">
				<Link
					href="/"
					className="w-80 text-2xl md:text-4xl font-bold ">
					<Vectors.Logo
						className={
							navBg || isOpen
								? 'fill-white'
								: textBlack
								? 'fill-black'
								: 'fill-white'
						}
					/>
				</Link>
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
