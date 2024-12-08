import { StaticImageData } from 'next/image';

export type Products = {
	name: string;
	href: string;
	description: string;
	color: 'gold' | 'silver' | 'bronze';
};

export type Notes = {
	note: string;
};

export type Description = {
	attributes: Array<string>;
	descriptionText: string;
	notes: Array<Notes>;
};

export type ImageInformation = {
	title: string;
	subtitle: string;
	image: StaticImageData;
};

export type Footerhref = {
	title: string;
	image: StaticImageData;
	href: string;
};

export type Product = {
	path: string;
	productImage: StaticImageData;
	name: string;
	description: Description;
	imageInformation: ImageInformation;
	carousel: Array<StaticImageData>;
	footerLinks: Array<Footerhref>;
};

export type ProductSlugs = {
	[key: string]: Product;
};
