import headerImage from '../../public/assets/find_us.png';
import footerImage from '../../public/assets/find_us_footer_hero.png';

const FIND_US_ADDRESSES = [
	{
		name: 'Duty Free Philippines - Airport Terminal 1',
		address: 'Ninoy Aquino International Airport Terminal 1, Pasay City',
		contact: 'Tel. No. + 63(2) 832-2725',
	},
	{
		name: 'Duty Free Philippines - Airport Terminal 2',
		address: 'Ninoy Aquino International Airport Terminal 1, Pasay City',
		contact: 'Tel. No. + 63(2) 832-2725',
	},
	{
		name: 'Duty Free Philippines - Airport Terminal 3',
		address: 'Ninoy Aquino International Airport Terminal 1, Pasay City',
		contact: 'Tel. No. + 63(2) 832-2725',
	},
	{
		name: 'Duty Free Philippines - Airport Terminal 4',
		address: 'Ninoy Aquino International Airport Terminal 1, Pasay City',
		contact: 'Tel. No. + 63(2) 832-2725',
	},
	{
		name: 'Duty Free Philippines - Airport Terminal 5',
		address: 'Ninoy Aquino International Airport Terminal 1, Pasay City',
		contact: 'Tel. No. + 63(2) 832-2725',
	},
	{
		name: 'Duty Free Philippines - Airport Terminal 6',
		address: 'Ninoy Aquino International Airport Terminal 1, Pasay City',
		contact: 'Tel. No. + 63(2) 832-2725',
	},
	{
		name: 'Duty Free Philippines - Airport Terminal 7',
		address: 'Ninoy Aquino International Airport Terminal 1, Pasay City',
		contact: 'Tel. No. + 63(2) 832-2725',
	},
	{
		name: 'Duty Free Philippines - Airport Terminal 8',
		address: 'Ninoy Aquino International Airport Terminal 1, Pasay City',
		contact: 'Tel. No. + 63(2) 832-2725',
	},
	{
		name: 'Duty Free Philippines - Airport Terminal 9',
		address: 'Ninoy Aquino International Airport Terminal 1, Pasay City',
		contact: 'Tel. No. + 63(2) 832-2725',
	},
	{
		name: 'Duty Free Philippines - Airport Terminal 10',
		address: 'Ninoy Aquino International Airport Terminal 1, Pasay City',
		contact: 'Tel. No. + 63(2) 832-2725',
	},
	{
		name: 'Duty Free Philippines - Airport Terminal 11',
		address: 'Ninoy Aquino International Airport Terminal 1, Pasay City',
		contact: 'Tel. No. + 63(2) 832-2725',
	},
	{
		name: 'Duty Free Philippines - Airport Terminal 12',
		address: 'Ninoy Aquino International Airport Terminal 1, Pasay City',
		contact: 'Tel. No. + 63(2) 832-2725',
	},
];
const FIND_US_ADDRESSES2 = [
	{
		name: 'Duty Free Philippines - Airport Terminal 1',
		address: 'Ninoy Aquino International Airport Terminal 1, Pasay City',
		contact: 'Tel. No. + 63(2) 832-2725',
	},
	{
		name: 'Duty Free Philippines - Airport Terminal 2',
		address: 'Ninoy Aquino International Airport Terminal 1, Pasay City',
		contact: 'Tel. No. + 63(2) 832-2725',
	},
	{
		name: 'Duty Free Philippines - Airport Terminal 3',
		address: 'Ninoy Aquino International Airport Terminal 1, Pasay City',
		contact: 'Tel. No. + 63(2) 832-2725',
	},
];

const FIND_US_ADDRESSES3 = [
	{
		name: 'Duty Free Philippines - Airport Terminal 1',
		address: 'Ninoy Aquino International Airport Terminal 1, Pasay City',
		contact: 'Tel. No. + 63(2) 832-2725',
	},
];

const FIND_US_LOCATIONS = [
	{
		location: 'Luzon',
		addresses: FIND_US_ADDRESSES,
	},
	{
		location: 'Visayas',
		addresses: FIND_US_ADDRESSES2,
	},
	{
		location: 'Mindanao',
		addresses: FIND_US_ADDRESSES3,
	},
];
const FIND_US_LOCATIONS2 = [
	{
		location: 'Visayas',
		addresses: FIND_US_ADDRESSES2,
	},
	{
		location: 'Luzon',
		addresses: FIND_US_ADDRESSES,
	},
	{
		location: 'Mindanao',
		addresses: FIND_US_ADDRESSES3,
	},
];
const FIND_US_LOCATIONS3 = [
	{
		location: 'Mindanao',
		addresses: FIND_US_ADDRESSES3,
	},
	{
		location: 'Visayas',
		addresses: FIND_US_ADDRESSES2,
	},
	{
		location: 'Luzon',
		addresses: FIND_US_ADDRESSES,
	},
];

const FIND_US_GROUPS = {
	'Duty Free Philippines': FIND_US_LOCATIONS,
	Supermarkets: FIND_US_LOCATIONS2,
	Hotels: FIND_US_LOCATIONS3,
	'Bars & Restaurants': FIND_US_LOCATIONS,
	Stores: FIND_US_LOCATIONS2,
	'Provincial Outlets': FIND_US_LOCATIONS3,
};

const FIND_US_GROUPS_NAMES = [
	{
		addressGroup: 'Duty Free Philippines',
	},
	{
		addressGroup: 'Supermarkets',
	},
	{
		addressGroup: 'Hotels',
	},
	{
		addressGroup: 'Bars & Restaurants',
	},
	{
		addressGroup: 'Stores',
	},
	{
		addressGroup: 'Provincial Outlets',
	},
];

const FIND_US_HERO = {
	header: headerImage,
	footer: footerImage,
};

const HEADER_HERO_TEXT = {
	title: `Where to Find 
	Lakan Lambanog`,
};

const FOOTER_HERO_TEXT = {
	title: 'Order Online',
	subtitle: 'Lakan Lambanog can be found online exclusively at Boozy PH',
	button: 'SHOP ON BOOZY PH',
};

export default {
	FIND_US_GROUPS,
	FIND_US_GROUPS_NAMES,
	FIND_US_HERO,
	FOOTER_HERO_TEXT,
	HEADER_HERO_TEXT,
};
