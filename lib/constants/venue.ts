import venueHero from '../../public/assets/placeholder_venue_hero.jpg';
import venueChurch from '../../public/assets/placeholder_church.jpg';
import venueReception from '../../public/assets/placeholder_reception.jpg';
import venueWhereTo from '../../public/assets/placeholder_venue_where_to_stay.jpg';

const VENUE_HERO = {
	image: venueHero,
	title: 'Getting & Staying There',
};

const VENUE_ANCHORS = [
	{
		title: 'Church',
		id: 'church',
	},
	{
		title: 'Reception',
		id: 'reception',
	},
	{
		title: 'Hotels',
		id: 'hotels',
	},
];

const VENUE_MAPS = [
	{
		image: venueChurch,
		title: 'Our Lady of Lourdes Parish',
		subtitle: 'Tagaytay, Cavite',
		button: 'View on Maps',
		href: '/',
	},
	{
		image: venueReception,
		title: 'Arocarría',
		subtitle: 'Alfonso, Cavite',
		button: 'View on Maps',
		href: '/',
	},
];

const WHERE_TO_STAY = {
	image: venueWhereTo,
	title: 'Where to Stay',
	subtitle: 'Nearby Hotels',
	body: 'We have rooms blocked off for wedding guests at a hotel and a guesthouse in the Yvoire-Excenevex area. Mention the Pillai–Chopra wedding when you book to get the group discount.',
	hotels: [
		{
			name: 'HÔTEL FROMAGE',
			info: '123 Rue de Démo\n12345 La ville de New York\n+33 06 06 06 06 06',
		},
		{
			name: 'VILLA LAIT',
			info: '123 Rue de Démo\n12345 La ville de New York\n+33 06 06 06 06 06',
		},
		{
			name: 'VILLA LAIT',
			info: '123 Rue de Démo\n12345 La ville de New York\n+33 06 06 06 06 06',
		},
	],
};

export default {
	VENUE_HERO,
	VENUE_ANCHORS,
	VENUE_MAPS,
	WHERE_TO_STAY,
};
