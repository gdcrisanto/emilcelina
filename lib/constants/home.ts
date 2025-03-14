import homeHero from '../../public/assets/home_hero2.jpg';
import homeSegment1 from '../../public/assets/segment1.jpeg';
import homeSegment2 from '../../public/assets/segment2.jpeg';
import homeSegment3 from '../../public/assets/segment3.jpeg';
import footerImage from '../../public/assets/footer_banner.jpeg';

const HOME_HERO = {
	image: homeHero,
	title: 'Loving is EC',
	subtitle: 'May 10, 2025\nSaturday · Tagaytay City',
	button: 'View Details',
	href: '/the-wedding',
};

const OUR_SPECIAL_DAY = {
	title: `We're excited to celebrate our special day with you`,
	subtitle: '',
	button: 'View Details',
	href: '/the-wedding',
};

const HOME_PORTRAITS: Array<any> = [
	{
		image: homeSegment1,
		text: 'venue',
		href: '/venue',
	},
	{
		image: homeSegment2,
		text: 'registry',
		href: '/registry',
	},
	{
		image: homeSegment3,
		text: 'FAQs',
		href: '/faqs',
	},
];

const FOOTER = {
	image: footerImage,
	title: 'Emil & Celina',
	subtitle: 'May 10, 2025 · Saturday · Tagaytay City',
	button: 'View Details',
	href: '/the-wedding',
	button2: 'Send RSVP',
	href2: 'https://withjoy.com/ourloveisEC/rsvp',
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
	HOME_HERO,
	OUR_SPECIAL_DAY,
	HOME_PORTRAITS,
	FOOTER,
	ORDER_OF_EVENTS,
};
