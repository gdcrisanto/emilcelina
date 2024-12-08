import cocktails_hero from '../../public/assets/cocktails_hero.png';
import tanaw_ng_paraw from '../../public/assets/tanaw_ng_paraw.png';
import aplaya_muni_munia from '../../public/assets/aplaya_muni_munia.png';
import musik_ni_maestro from '../../public/assets/musik_ni_maestro.png';
import clara from '../../public/assets/clara.png';
import dalampasigan from '../../public/assets/dalampasigan.png';

const HERO_HEADER = {
	title: 'Lakan Lambanog cocktails for every occasion',
	image: cocktails_hero,
	gradient:
		'linear-gradient(0deg, rgba(0, 0, 0, 0.00) 80.36%, rgba(0, 0, 0, 0.40) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 62.2%, rgba(0, 0, 0, 0.40) 100%)',
};

const COCKTAIL_TYPE_FILTER = {
	label: 'Cocktail type',
	field: 'All cocktails',
};

const LAKAN_VARIANT_FILTER = {
	label: 'Lakan Variant',
	field: 'All variants',
};

const TASTE_PROFILE_FILTER = {
	label: 'Taste profile',
	field: 'All taste profiles',
};

const COCKTAILS_CATALOG = [
	{
		name: 'Tanaw ng Paraw',
		description: 'Boozy • sweet',
		image: tanaw_ng_paraw,
		href: '/cocktails/tanaw-ng-paraw',
	},
	{
		name: 'Aplaya Muni Munia',
		description: 'Fruity • Fresh',
		image: aplaya_muni_munia,
		href: '/cocktails/aplaya-muni-munia',
	},
	{
		name: 'Musik ni Maestro',
		description: 'Bitter',
		image: musik_ni_maestro,
		href: '/cocktails/musik-ni-maestro',
	},
	{
		name: 'Clara',
		description: 'Fruity • Sweet',
		image: clara,
		href: '/cocktails/clara',
	},
	{
		name: 'Dalampasigan',
		description: 'Bitter • Astringent',
		image: dalampasigan,
		href: '/cocktails/dalampasigan',
	},
	{
		name: 'Tanaw ng Paraw',
		description: 'Boozy • sweet',
		image: tanaw_ng_paraw,
		href: '/cocktails/tanaw-ng-paraw',
	},
	{
		name: 'Aplaya Muni Munia',
		description: 'Fruity • Fresh',
		image: aplaya_muni_munia,
		href: '/cocktails/aplaya-muni-munia',
	},
	{
		name: 'Musik ni Maestro',
		description: 'Bitter',
		image: musik_ni_maestro,
		href: '/cocktails/musik-ni-maestro',
	},
	{
		name: 'Clara',
		description: 'Fruity • Sweet',
		image: clara,
		href: '/cocktails/clara',
	},
	{
		name: 'Dalampasigan',
		description: 'Bitter • Astringent',
		image: dalampasigan,
		href: '/cocktails/dalampasigan',
	},
	{
		name: 'Tanaw ng Paraw',
		description: 'Boozy • sweet',
		image: tanaw_ng_paraw,
		href: '/cocktails/tanaw-ng-paraw',
	},
	{
		name: 'Aplaya Muni Munia',
		description: 'Fruity • Fresh',
		image: aplaya_muni_munia,
		href: '/cocktails/aplaya-muni-munia',
	},
	{
		name: 'Musik ni Maestro',
		description: 'Bitter',
		image: musik_ni_maestro,
		href: '/cocktails/musik-ni-maestro',
	},
	{
		name: 'Clara',
		description: 'Fruity • Sweet',
		image: clara,
		href: '/cocktails/clara',
	},
	{
		name: 'Dalampasigan',
		description: 'Bitter • Astringent',
		image: dalampasigan,
		href: '/cocktails/dalampasigan',
	},
];

export default {
	HERO_HEADER,
	COCKTAIL_TYPE_FILTER,
	LAKAN_VARIANT_FILTER,
	TASTE_PROFILE_FILTER,
	COCKTAILS_CATALOG,
};
