import Constants from '../lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import Vectors from './vectors';
import {
	BottleProps,
	BreadcrumbsProps,
	CocktailCardProps,
	ColoredBgWrapperType,
	DividerProps,
	FooterProductLinksProps,
} from '../lib/types/sections';

export const Divider = ({ type, dark }: DividerProps) => {
	return (
		<>
			<div className="flex flex-row w-full justify-between">
				{(type === 'top' || type === 'bottom') && (
					<>
						<hr
							className={`w-full border-t self-center max-w-[calc(50%-11px)]  ${
								dark ? 'border-[#121212]' : 'border-[#B99D37]'
							}`}
						/>
						{type === 'bottom' && (
							<Vectors.DividerBottomIcon
								fill={dark ? '#121212' : '#B99D37'}
							/>
						)}
						{type === 'top' && (
							<Vectors.DividerTopIcon
								fill={dark ? '#121212' : '#B99D37'}
							/>
						)}
						<hr
							className={`w-full border-t self-center max-w-[calc(50%-11px)] ${
								dark ? 'border-[#121212]' : 'border-[#B99D37]'
							}`}
						/>
					</>
				)}
				{(type === 'left' || type === 'right') && (
					<>
						{type === 'left' && (
							<Vectors.DividerLeftIcon className="self-center" />
						)}
						<hr className="w-full border-t self-center max-w-[calc(100%-20px)] border-[#B99D37]" />
						{type === 'right' && (
							<Vectors.DividerRightIcon className="self-center" />
						)}
					</>
				)}
			</div>
		</>
	);
};

export const Award = ({ award, title, year }) => {
	return (
		<div className="flex flex-row w-full max-w-[163px] md:max-w-[313px] fade-up">
			<Vectors.LaurelLeft
				className="self-center max-w-[33px] md:max-w-[75px]"
				width="auto"
				height="auto"
			/>
			<div className="flex flex-col uppercase max-w-[96px] md:max-w-[181px] w-full text-white text-center self-center">
				<span className="text-base lg:text-[1.375rem] tracking-[2.24px] leading-4 lg:leading-7">
					{award}
				</span>
				<span className="text-[0.625rem] lg:text-sm tracking-[0.8px] lg:tracking-[1.12px] leading-[100%] font-light">
					{title}
				</span>
				<span className="font-light text-[0.625rem] lg:text-sm tracking-[0.8px] leading-[100%]">
					{year}
				</span>
			</div>
			<Vectors.LaurelRight
				className="self-center max-w-[33px] md:max-w-[75px]"
				width="auto"
				height="auto"
			/>
		</div>
	);
};

export const DividerHeader = ({ children }) => {
	return (
		<div className="hidden lg:flex flex-row w-full">
			<Divider type="left" />
			<h1 className="font-newsreader lg:text-[3rem] color-[#121212] w-full text-nowrap text-center px-10">
				{children}
			</h1>
			<Divider type="right" />
		</div>
	);
};

export const ColoredBgWrapper = ({
	children,
	bgColor = 'black',
	className,
}: ColoredBgWrapperType) => {
	const color = {
		black: `bg-[#121212] text-white`,
		gold: `bg-[#CAB569] `,
		nata: `bg-[#FCF4EA] `,
		white: `bg-white `,
	};
	return (
		<div className={`flex flex-col w-full ${color[bgColor]} ${className} `}>
			{children}
		</div>
	);
};

export const HeaderDescription = ({
	data,
	hasDivider = false,
	className = '',
}) => {
	return (
		<div className={`flex flex-col gap-y-4 ${className}`}>
			{hasDivider && <Divider type={'top'} />}
			<span
				className={`text-4xl lg:text-[3rem] leading-[100%] font-newsreader ${
					hasDivider && 'mt-10'
				}`}>
				{data.title}
			</span>
			<span
				className={`text-[18px] leading-[140%] font-light ${
					hasDivider && 'mb-10'
				}`}>
				{data.subtitle}
			</span>
			{hasDivider && <Divider type={'bottom'} />}
		</div>
	);
};

export const Breadcrumbs = ({ breadcrumbs, light }: BreadcrumbsProps) => {
	return (
		<div className="flex flex-row px-6 lg:px-20 pt-[96px] lg:pt-[167px] pb-10 lg:pb-[22px] uppercase leading-[140%] tracking-[1.28px] max-w-[1920px] mx-auto w-full">
			{breadcrumbs.map((path, index) => {
				return (
					<BreadcrumbsComponent
						key={index}
						path={path}
						light={light}
						isEndPath={index < breadcrumbs.length - 1}
					/>
				);
			})}
			<Link
				href="/lambanog"
				className="flex flex-row whitespace-pre-wrap lg:hidden text-nowrap">
				<Vectors.ChevronLeft stroke={light ? 'black' : 'white'} /> Back
				to
				{` ${breadcrumbs[1]}`}
			</Link>
		</div>
	);
};

const BreadcrumbsComponent = ({ path, isEndPath, light }) => {
	return (
		<>
			{isEndPath ? (
				<Link
					href={`/${path === 'home' ? '' : path}`}
					className={`${
						light ? 'text-[#93867A]' : ''
					} whitespace-pre-wrap hidden lg:block text-nowrap`}>
					{`${path.replaceAll('-', ' ')} > `}
				</Link>
			) : (
				<span
					className={`${
						light ? 'text-[#2D2D2D]' : 'text-[#B99D37]'
					} whitespace-pre-wrap hidden lg:block text-nowrap`}>
					{`${path.replaceAll('-', ' ')}`}
				</span>
			)}
		</>
	);
};

export const FooterProductLinks = ({ links = [] }: FooterProductLinksProps) => {
	return (
		<div className="flex flex-col lg:flex-row w-full">
			<Link
				href={links[0]?.href ?? ''}
				className="flex flex-row w-full lg:w-1/2 h-[174px] lg:h-[445px] relative mx-auto lg:mx-0">
				<Image
					placeholder="blur"
					src={links[0]?.image}
					alt=""
					width={600}
					height={1069}
					className="absolute object-center object-cover w-full h-[174px] lg:h-[445px]"
				/>
				<div
					className="absolute w-full h-full z-[1]"
					style={{
						background:
							'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 62.2%, rgba(0, 0, 0, 0.40) 100%)',
					}}
				/>
				<div className="flex flex-row z-[2] text-white justify-start w-full mb-10 items-end ml-6 lg:ml-20 font-newsreader">
					<div className="flex flex-row gap-x-4 text-[24px] lg:text-[32px] leading-[100%] items-center">
						<Vectors.ArrowLeft
							className="max-h-[12px] lg:max-h-[28px] max-w-[24px] lg:max-w-[55px] self-center"
							color="white"
						/>
						Discover {links[0]?.title}
					</div>
				</div>
			</Link>
			<Link
				href={links[1]?.href ?? ''}
				className="flex flex-row w-full lg:w-1/2 h-[174px] lg:h-[445px] relative mx-auto lg:mx-0">
				<Image
					placeholder="blur"
					src={links[1]?.image}
					alt=""
					width={600}
					height={1069}
					className="absolute object-center object-cover w-full h-[174px] lg:h-[445px]"
				/>
				<div
					className="absolute w-full h-full z-[1]"
					style={{
						background:
							'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 62.2%, rgba(0, 0, 0, 0.40) 100%)',
					}}
				/>
				<div className="flex flex-row z-[2] text-white justify-end w-full mb-10 items-end mr-6 lg:mr-20  font-newsreader">
					<div className="flex flex-row gap-x-4 text-[24px] lg:text-[32px] leading-[100%] items-center">
						Discover {links[1]?.title}
						<Vectors.ArrowRight
							className="max-h-[12px] lg:max-h-[28px] max-w-[24px] lg:max-w-[55px] self-center"
							color="white"
						/>
					</div>
				</div>
			</Link>
		</div>
	);
};
