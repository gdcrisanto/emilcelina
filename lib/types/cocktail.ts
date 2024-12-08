import { StaticImageData } from 'next/image';

export type CocktailProps = {
	cocktail: CocktailDataProps;
};

export type Description = {
	variant: string;
	serving: string;
	ingredients: Array<string>;
	descriptionText: string;
	prep: string;
};

export type CocktailDataProps = {
	path: string;
	productImage: StaticImageData;
	name: string;
	description: Description;
	featured: Array<any>;
};

export type Cocktails = {
	[key: string]: CocktailDataProps;
};
