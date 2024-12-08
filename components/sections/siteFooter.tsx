import Constants from '../../lib/constants';
import Vectors from '../vectors';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className="site-footer flex flex-col pb-auto z-50">
			<div className="w-full flex flex-col mt-10 mx-auto py-10 items-center">
				<Vectors.LogoLong />
				<div className="font-garamond text-xl mt-6 font-thin tracking-wide">
					The True Filipino Spirit
				</div>
			</div>
			<div className="footer tracking-widest w-full h-full md:h-auto flex flex-col md:flex-row uppercase mx-auto items-center md:justify-center md:px-10 font-thin">
				{Constants.MENU_ITEMS.map((item) => {
					return (
						<Link
							className="px-6 py-3 md:mx-auto "
							key={item.href}
							href={item.href}>
							{item.title}
						</Link>
					);
				})}
			</div>
			<div className="footer w-full mx-auto dropdown-logos flex flex-col pb-10 mt-10 justify-center lg:justify-between lg:flex-row-reverse lg:align-center">
				<div className="flex flex-row w-full lg:w-auto lg:mx-0 mx-auto py-10 space-x-10 justify-center">
					<Vectors.FbLogo />
					<Vectors.IgLogo />
				</div>
				<div className="footer-content flex flex-col lg:flex-row items-center w-full justify-between font-thin">
					<span className="mx-auto pb-5 lg:py-5 lg:w-full lg:text-nowrap">
						Copyright © 2024. All rights reserved.
					</span>
					<span className="mx-auto py-5 lg:w-full lg:text-nowrap">
						Terms & Conditions
					</span>
					<span className="mx-auto py-5 lg:w-full lg:text-nowrap">
						Privacy & Cookies Notice
					</span>
				</div>
			</div>
		</div>
	);
};

export default { Footer };
