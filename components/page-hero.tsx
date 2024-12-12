import Image from 'next/image';
import { HeroProps } from '../lib/types/sections';

export default function PageHero({
	children,
	className,
	image,
	bgGradient,
	customSize,
	alt,
	size = 'lg',
	width = 1920,
	height = 840,
	flip,
	priority,
}: HeroProps) {
	const heroBreakpoints = {
		xs: ' h-[350px] lg:h-[400px]',
		sm: ' h-[590px] lg:h-[600px]',
		md: ' h-[590px] lg:h-[680px]',
		lg: ' h-[667px] lg:h-[840px]',
		xl: ' h-[375px] lg:h-[1080px]',
		custom: customSize,
	};
	return (
		<div className={`flex relative ${className} ${heroBreakpoints[size]}`}>
			<div
				className="absolute w-full h-full z-[1]"
				style={{
					background: bgGradient
						? bgGradient
						: 'linear-gradient(0deg, rgba(0, 0, 0, 0.00) 74.51%, rgba(0, 0, 0, 0.40) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 62.2%, rgba(0, 0, 0, 0.40) 100%)',
				}}
			/>
			<Image
				src={image}
				placeholder="blur"
				alt={alt}
				width={width}
				height={height}
				priority={priority}
				className={
					'absolute z-[0] object-cover object-center w-full bg-[#121212] ' +
					heroBreakpoints[size] +
					(flip ? ' scale-x-[-1]' : '')
				}
			/>
			<div className="flex w-full h-full z-[1]">{children}</div>
		</div>
	);
}
