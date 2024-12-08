import Constants from './constants';

export const sendContactForm = async (data) =>
	fetch('/api/contact', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	}).then((response) => {
		if (!response.ok) throw new Error('Failed to send message');
		return response.json();
	});

export const getProductInformation = async (slug: string) => {
	try {
		const product = Constants.PRODUCT_SLUGS[slug];
		if (!product) {
			return {
				notFound: true,
			};
		} else {
			return product;
		}
	} catch (err) {
		return {
			notFound: true,
		};
	}
};

export const getProductPaths = async () => {
	return [
		{ slug: 'lakan-gold' },
		{ slug: 'lakan-silver' },
		{ slug: 'lakan-bronze' },
	];
};

export const getCocktailInformation = async (slug: string) => {
	try {
		const product = Constants.COCKTAIL_SLUGS[slug];
		if (!product) {
			return {
				notFound: true,
			};
		} else {
			return product;
		}
	} catch (err) {
		return {
			notFound: true,
		};
	}
};

export const getCocktailPaths = async () => {
	return [
		{ slug: 'tanaw-ng-paraw' },
		{ slug: 'aplaya-muni-munia' },
		{ slug: 'musik-ni-maestro' },
		{ slug: 'clara' },
		{ slug: 'dalampasigan' },
	];
};
