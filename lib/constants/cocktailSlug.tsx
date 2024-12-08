import tanaw_ng_paraw_cocktail from '../../public/assets/tanaw_ng_paraw_cocktail.png';
import tanaw_ng_paraw from '../../public/assets/tanaw_ng_paraw.png';
import aplaya_muni_munia from '../../public/assets/aplaya_muni_munia.png';
import musik_ni_maestro from '../../public/assets/musik_ni_maestro.png';
import clara from '../../public/assets/clara.png';
import dalampasigan from '../../public/assets/dalampasigan.png';
import { Cocktails } from '../types/cocktail';

const COCKTAIL_SLUGS: Cocktails = {
	'tanaw-ng-paraw': {
		path: 'tanaw-ng-paraw',
		productImage: tanaw_ng_paraw_cocktail,
		name: 'Tanaw ng Paraw',
		description: {
			variant: 'Lakan Gold',
			serving: 'Serves 1 glass',
			descriptionText:
				'This drink is complex, and despite being so, it does not hide the smooth flavor of Lakan. Layered with barako coffee, vanilla syrup and banana foam, it is a surprise with each sip.',
			ingredients: [
				'30ml Lakan',
				'20ml Vanilla syrup',
				'10ml Banana syrup',
				'10ml Lemon juice',
				'1 drop Saline',
				'Barako coffee float',
			],
			prep: 'This drink is complex, and despite being so, it does not hide the smooth flavor of Lakan. Layered with barako coffee, vanilla syrup and banana foam, it is a surprise with each sip.',
		},
		featured: [
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
		],
	},
	'aplaya-muni-munia': {
		path: 'aplaya-muni-munia',
		productImage: aplaya_muni_munia,
		name: 'Aplaya Muni Munia',
		description: {
			variant: 'Lakan Gold',
			serving: 'Serves 1 glass',
			descriptionText:
				'This drink is complex, and despite being so, it does not hide the smooth flavor of Lakan. Layered with barako coffee, vanilla syrup and banana foam, it is a surprise with each sip.',
			ingredients: [
				'30ml Lakan',
				'20ml Vanilla syrup',
				'10ml Banana syrup',
				'10ml Lemon juice',
				'1 drop Saline',
				'Barako coffee float',
			],
			prep: 'This drink is complex, and despite being so, it does not hide the smooth flavor of Lakan. Layered with barako coffee, vanilla syrup and banana foam, it is a surprise with each sip.',
		},
		featured: [
			{
				name: 'Tanaw ng Paraw',
				description: 'Boozy • sweet',
				image: tanaw_ng_paraw,
				href: '/cocktails/tanaw-ng-paraw',
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
		],
	},
	'musik-ni-maestro': {
		path: 'musik-ni-maestro',
		productImage: musik_ni_maestro,
		name: 'Musik ni Maestro',
		description: {
			variant: 'Lakan Gold',
			serving: 'Serves 1 glass',
			descriptionText:
				'This drink is complex, and despite being so, it does not hide the smooth flavor of Lakan. Layered with barako coffee, vanilla syrup and banana foam, it is a surprise with each sip.',
			ingredients: [
				'30ml Lakan',
				'20ml Vanilla syrup',
				'10ml Banana syrup',
				'10ml Lemon juice',
				'1 drop Saline',
				'Barako coffee float',
			],
			prep: 'This drink is complex, and despite being so, it does not hide the smooth flavor of Lakan. Layered with barako coffee, vanilla syrup and banana foam, it is a surprise with each sip.',
		},
		featured: [
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
		],
	},
	clara: {
		path: 'clara',
		productImage: clara,
		name: 'Clara',
		description: {
			variant: 'Lakan Gold',
			serving: 'Serves 1 glass',
			descriptionText:
				'This drink is complex, and despite being so, it does not hide the smooth flavor of Lakan. Layered with barako coffee, vanilla syrup and banana foam, it is a surprise with each sip.',
			ingredients: [
				'30ml Lakan',
				'20ml Vanilla syrup',
				'10ml Banana syrup',
				'10ml Lemon juice',
				'1 drop Saline',
				'Barako coffee float',
			],
			prep: 'This drink is complex, and despite being so, it does not hide the smooth flavor of Lakan. Layered with barako coffee, vanilla syrup and banana foam, it is a surprise with each sip.',
		},
		featured: [
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
				name: 'Dalampasigan',
				description: 'Bitter • Astringent',
				image: dalampasigan,
				href: '/cocktails/dalampasigan',
			},
		],
	},
	dalampasigan: {
		path: 'dalampasigan',
		productImage: dalampasigan,
		name: 'Dalampasigan',
		description: {
			variant: 'Lakan Gold',
			serving: 'Serves 1 glass',
			descriptionText:
				'This drink is complex, and despite being so, it does not hide the smooth flavor of Lakan. Layered with barako coffee, vanilla syrup and banana foam, it is a surprise with each sip.',
			ingredients: [
				'30ml Lakan',
				'20ml Vanilla syrup',
				'10ml Banana syrup',
				'10ml Lemon juice',
				'1 drop Saline',
				'Barako coffee float',
			],
			prep: 'This drink is complex, and despite being so, it does not hide the smooth flavor of Lakan. Layered with barako coffee, vanilla syrup and banana foam, it is a surprise with each sip.',
		},
		featured: [
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
		],
	},
};

export default {
	COCKTAIL_SLUGS,
};
