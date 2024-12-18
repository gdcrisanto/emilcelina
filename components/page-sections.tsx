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

export const DividerHeader = ({ children }) => {
	return (
		<div className="hidden lg:flex flex-row w-full">
			<Divider type="left" />
			<h1 className="font-playfair lg:text-[3rem] color-[#121212] w-full text-nowrap text-center px-10">
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
				className={`text-4xl lg:text-[3rem] leading-[100%] font-playfair ${
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
