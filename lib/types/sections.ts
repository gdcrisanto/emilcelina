import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export type ImageInformationProps = {
	image: ReactNode;
	data: {
		title: string;
		subtitle: string;
		button?: string;
		href?: string;
	};
	hasDivider?: Boolean;
	textWhite?: Boolean;
	reverse?: Boolean;
	textCenter?: Boolean;
	size?: 'sm' | 'normal';
};

export type CocktailCarouselProps = {
	data: Array<any>;
	cardLimit?: number;
	cardSize?: 'sm' | 'normal' | 'catalog';
	secondaryHeader?: boolean;
};

export type HeaderMenuProps = {
	isOpen: boolean;
	navBg: boolean;
	setIsOpen: Function;
	textBlack?: boolean;
};

export type LayoutProps = {
	children: JSX.Element | JSX.Element[];
	noSiteHeader?: boolean;
	textBlack?: boolean;
};

export type HeroProps = {
	children?: ReactNode;
	image: StaticImageData;
	alt: string;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'custom';
	customSize?: string;
	bgGradient?: string;
	className?: string;
	flip?: boolean;
	priority?: boolean;
	width?: number | `${number}`;
	height?: number | `${number}`;
};

export type SiteHeaderProps = {
	textBlack?: boolean;
};

export type Quote = {
	quote: string;
	author: string;
};

export type SliderProps = {
	quotes?: Array<Quote>;
	images?: Array<string>;
	textWhite?: Boolean;
};

export type DividerProps = {
	type: 'top' | 'bottom' | 'left' | 'right';
	dark?: boolean;
};

export type CocktailCardProps = {
	image: StaticImageData;
	name: string;
	href: string;
	description: string;
	hidden?: boolean;
	size?: 'sm' | 'normal' | 'catalog';
};

export type BottleProps = {
	name: string;
	description?: string;
	button?: Boolean;
	href: string;
	imageIndex?: number;
	hoverColor?: 'neutral' | 'gold' | 'silver' | 'bronze';
	size?: 'normal' | 'lg';
};

export type ColoredBgWrapperType = {
	children: ReactNode;
	bgColor: 'black' | 'gold' | 'nata' | 'white';
	className?: string;
};

export type BreadcrumbsProps = {
	breadcrumbs: Array<string>;
	light?: boolean;
};

export type LinkProps = {
	href: string;
	image: StaticImageData;
	title: string;
};

export type FooterProductLinksProps = {
	links: Array<LinkProps>;
};
