import Link from 'next/link';
import { useRouter } from 'next/router';
import Constants from '../lib/constants';
import Vectors from './vectors';
import { HeaderMenuProps } from '../lib/types/sections';
import { useEffect } from 'react';

export default function HeaderMenu({
	isOpen,
	navBg,
	setIsOpen,
	textBlack,
}: HeaderMenuProps) {
	const { pathname } = useRouter();

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [isOpen]);
	return (
		<>
			{/* DESKTOP HEADER */}
			<div className="tracking-wide hidden lg:flex header-menu gap-x-8 flex-row text-left mt-auto h-full capitalize items-center text-xl">
				{Constants.MENU_ITEMS.map((item) => {
					return (
						<Link
							className={`${
								item.title === 'RSVP'
									? `button text-white bg-[#46542f] hover:bg-[#FCF4EA] hover:text-[#46542f] px-6 py-3`
									: 'py-1 hover:border-b-2 hover:border-[#46542f] hover:border-solid'
							} ${
								pathname === item.href ||
								(pathname === '/registry' &&
									item.href === '/registry')
									? 'text-[#573319]'
									: ''
							}`}
							key={item.href}
							href={item.href}
							target={item.title === 'RSVP' ? '_blank' : '_self'}>
							{item.title}
						</Link>
					);
				})}
			</div>

			{/* MOBILE HEADER */}
			<div
				className="tracking-wide flex lg:hidden justify-between flex-row text-left mt-auto h-full capitalize items-center "
				onClick={() => {
					setIsOpen(!isOpen);
				}}>
				{isOpen ? (
					<Vectors.Exit />
				) : (
					<Vectors.Burger stroke={'#573319'} />
				)}
			</div>
			{isOpen && (
				<div className="site-header-dropdown w-full flex flex-col just py-20 lg:hidden text-xl">
					<div className="flex flex-col items-center h-full w-full mb-20 justify-between font-medium">
						{Constants.MENU_ITEMS.map((item) => {
							return (
								<Link
									onClick={() => {
										setIsOpen(false);
									}}
									className={
										item.title === 'RSVP'
									? `button text-white bg-[#46542f] hover:bg-[#FCF4EA] hover:text-[#46542f] px-6 py-3`
									: 'py-1 hover:border-b-2 hover:border-[#46542f] hover:border-solid'
									}
									key={item.href}
									href={item.href}
									target={item.title === 'RSVP' ? '_blank' : '_self'}>
									{item.title}
								</Link>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
}
