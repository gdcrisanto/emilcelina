import weddingHero from '../../public/assets/placeholder_wedding_hero.jpg';
import homePrenup from '../../public/assets/placeholder_prenup.jpg';
import homeImageBreaker from '../../public/assets/home_image_breaker.png';
import footerImage from '../../public/assets/placeholder_footer.jpg';

const WEDDING_HERO = {
	image: weddingHero,
	title: 'Wedding Details',
};

const OUR_SPECIAL_DAY = {
	title: `We're excited to celebrate our special day with you`,
	subtitle: '',
	button: 'View Details',
	href: '/',
};

const HOME_PORTRAITS: Array<any> = [
	{
		image: homePrenup,
	},
	{
		image: homePrenup,
	},
	{
		image: homePrenup,
	},
];

const FOOTER = {
	image: footerImage,
	title: 'Emil & Celina',
	subtitle: 'May 10, 2025 · Saturday · Tagaytay City',
	button: 'View Details',
	href: '/',
};

const ORDER_OF_EVENTS = {
	title: 'Order of Events',
	events: [
		{
			event: 'Arrival',
			description: 'Our Lady of Lourdes Parish',
			time: '3:00 PM',
		},
		{
			event: 'Ceremony',
			description: 'Our Lady of Lourdes Parish',
			time: '3:30 PM',
		},
		{
			event: 'Cocktails',
			description: 'The Lobby at Arocarrìa',
			time: '5:30 PM',
		},
		{
			event: 'Dinner',
			description: 'The Ballroom at Arocarrìa',
			time: '7:00 PM',
		},
		{
			event: 'After-Party',
			description: 'The Ballroom at Arocarrìa',
			time: '9:00 PM',
		},
	],
};

export default {
	WEDDING_HERO,
	OUR_SPECIAL_DAY,
	HOME_PORTRAITS,
	homeImageBreaker,
	FOOTER,
	ORDER_OF_EVENTS,
};
