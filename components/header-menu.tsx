import Link from 'next/link';
import { useRouter } from 'next/router';
import Constants from '../lib/constants';
import Vectors from './vectors';
import { HeaderMenuProps } from '../lib/types/sections';

export default function HeaderMenu({
	isOpen,
	navBg,
	setIsOpen,
	textBlack,
}: HeaderMenuProps) {
	const { pathname } = useRouter();
	return (
		<>
			{/* DESKTOP HEADER */}
			<div className="tracking-wide hidden lg:flex header-menu gap-x-8 flex-row text-left mt-auto h-full capitalize items-center font-normal">
				{Constants.MENU_ITEMS.map((item) => {
					return (
						<Link
							className={`${
								item.title === 'RSVP'
									? `button text-white bg-[#BF8F67] hover:bg-[#5F6F52] px-6 py-3`
									: 'py-1 hover:border-b hover:border-[#5F6F52] hover:border-solid'
							} ${
								pathname === item.href ||
								(pathname === '/registry' &&
									item.href === '/registry')
									? 'text-[#BF8F67]'
									: ''
							}`}
							key={item.href}
							href={item.href}>
							{item.title}
						</Link>
					);
				})}
			</div>

			{/* MOBILE HEADER */}
			<div
				className="tracking-wide flex lg:hidden justify-between flex-row text-left mt-auto h-full uppercase items-center"
				onClick={() => {
					setIsOpen(!isOpen);
				}}>
				{isOpen ? (
					<Vectors.Exit />
				) : (
					<Vectors.Burger stroke={textBlack ? 'white' : 'black'} />
				)}
			</div>
			{isOpen && (
				<div className="site-header-dropdown w-full flex flex-col tracking-widest just pt-10 lg:hidden">
					<div className="flex flex-col items-center justify-between h-full w-full">
						{Constants.MENU_ITEMS.map((item) => {
							return (
								<Link
									onClick={() => {
										setIsOpen(false);
									}}
									className={
										item.title === 'Find Us'
											? 'button border-white hover:bg-white hover:text-[#121212] px-6 py-3 '
											: 'px-6 py-3'
									}
									key={item.href}
									href={item.href}>
									{item.title}
								</Link>
							);
						})}
					</div>
					<div className="w-full">
						<div className="dropdown-logos flex flex-row w-full mt-10 mx-auto py-10 space-x-10 justify-center">
							<Vectors.FbLogo />
							<Vectors.IgLogo />
						</div>
					</div>
				</div>
			)}
		</>
	);
}
