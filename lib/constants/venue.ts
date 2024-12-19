import venueHero from '../../public/assets/venue_hero.jpeg';
import venueChurch from '../../public/assets/church.jpg';
import venueReception from '../../public/assets/reception.jpeg';
import venueWhereTo from '../../public/assets/placeholder_venue_where_to_stay.jpg';
import anya from '../../public/assets/anya.jpg';
import twinLakes from '../../public/assets/twin_lakes.jpg';
import escala from '../../public/assets/escala.jpg';

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
		href: 'https://www.google.com/maps?q=4X64+FXR+Our+Lady+of+Lourdes+Parish+Church+-+Silang+Junction+North,+Tagaytay+City,+Cavite+(Diocese+of+Imus),+Tagaytay+-+Nasugbu+Hwy,+Tagaytay,+Cavite&ftid=0x33bd7764459f8ce3:0xe729ecd446058e72&entry=gps&lucs=,94203325,47075489,94216425,94216401,94249913,94244543,94246480,94242616,47071704,94206167,47069508,94218641,94228354,94233079,94203019,47084304&g_ep=CAISEjI0LjUwLjAuNzA0NDI3ODkxMBgAIJ6dCiqQASw5NDIwMzMyNSw0NzA3NTQ4OSw5NDIxNjQyNSw5NDIxNjQwMSw5NDI0OTkxMyw5NDI0NDU0Myw5NDI0NjQ4MCw5NDI0MjYxNiw0NzA3MTcwNCw5NDIwNjE2Nyw0NzA2OTUwOCw5NDIxODY0MSw5NDIyODM1NCw5NDIzMzA3OSw5NDIwMzAxOSw0NzA4NDMwNEICUEg%3D&g_st=ifm',
	},
	{
		image: venueReception,
		title: 'Arocarría',
		subtitle: 'Alfonso, Cavite',
		button: 'View on Maps',
		href: 'https://www.google.com/maps?q=Arocarr%C3%ADa,+Luksuhin,+Sikat+Rd,+Alfonso,+Cavite&ftid=0x33bd9dcfd06599d3:0xccbe8442a6c3b478&entry=gps&lucs=,94203325,47075489,94216425,94216401,94249913,94244543,94246480,94242616,47071704,94206167,47069508,94218641,94228354,94233079,94203019,47084304&g_ep=CAISEjI0LjUwLjAuNzA0NDI3ODkxMBgAIJ6dCiqQASw5NDIwMzMyNSw0NzA3NTQ4OSw5NDIxNjQyNSw5NDIxNjQwMSw5NDI0OTkxMyw5NDI0NDU0Myw5NDI0NjQ4MCw5NDI0MjYxNiw0NzA3MTcwNCw5NDIwNjE2Nyw0NzA2OTUwOCw5NDIxODY0MSw5NDIyODM1NCw5NDIzMzA3OSw5NDIwMzAxOSw0NzA4NDMwNEICUEg%3D&g_st=ifm',
	},
];

const WHERE_TO_STAY = {
	image: venueWhereTo,
	title: 'Where to Stay',
	subtitle: 'Nearby Hotels',
	body: 'We have rooms blocked off for wedding guests at Anya Resorts Tagaytay. Mention the Crisanto–Cano wedding when you book to get the group discount.',
	hotels: [
		{
			name: 'Anya Resorts',
			info: 'Buenavista Hills Road,\nBarangay Mag-asawang Ilat,\nTagaytay',
			image: anya,
			href: 'https://www.anyaresorts.com/',
		},
		{
			name: 'Twin Lakes Hotel',
			info: 'Tagaytay-Nasugbu Highway,\nLaurel,\nBatangas',
			image: twinLakes,
			href: 'https://www.twinlakeshotel.com.ph/en',
		},
		{
			name: 'Escala Tagaytay',
			info: 'Poblete Street,\nBarangay Maharlika West,\nTagaytay',
			image: escala,
			href: 'https://www.escalatagaytay.com/',
		},
	],
};

export default {
	VENUE_HERO,
	VENUE_ANCHORS,
	VENUE_MAPS,
	WHERE_TO_STAY,
};
