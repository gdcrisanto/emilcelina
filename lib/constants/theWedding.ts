import weddingHero from '../../public/assets/placeholder_wedding_hero.jpg';

const WEDDING_HERO = {
	image: weddingHero,
	title: 'Wedding Details',
};

const WEDDING_ANCHORS = [
	{ title: 'Schedule' },
	{ title: 'Attire' },
	{ title: 'Entourage' },
];

const SCHEDULE_OF_EVENTS = {
	title: 'Schedule of Events',
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
	WEDDING_ANCHORS,
	SCHEDULE_OF_EVENTS,
};
