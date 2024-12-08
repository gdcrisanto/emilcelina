import homeHero from '../../public/assets/placeholder_hero.jpg';
import homePrenup from '../../public/assets/placeholder_prenup.jpg';
import craftingImage from '../../public/assets/home_crafting_excellence.png';
import homeImageBreaker from '../../public/assets/home_image_breaker.png';
import farmToBottleImage from '../../public/assets/farm_to_bottle.png';
import footerImage from '../../public/assets/placeholder_footer.jpg';
import article1 from '../../public/assets/article1.png';
import { Quote } from '../types/quotes';

const HOME_HERO = {
	image: homeHero,
	title: 'Loving is EC',
	subtitle: 'May 10, 2025 · Saturday · Tagaytay City',
	button: 'View Details',
	href: '/lambanog',
};

const OUR_SPECIAL_DAY = {
	title: `We're excited to celebrate our special day with you`,
	subtitle: '',
	button: 'View Details',
	href: '/lambanog',
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

const ICON_ROW = {
	tuba: 'Distilled from ‘tuba’ or coconut nectar',
	smooth: 'smooth and easy to drink',
	madeIn: 'proudly made in the philippines',
};

const CRAFTING = {
	image: craftingImage,
	title: 'Crafting excellence',
	subtitle:
		'Our Lambanog undergoes a proprietary multi-stage distillation process that produces three distinct but equally refined Lakan variants—Lakan Gold, Silver, and Bronze.',
	button: 'See our process',
	href: '/about',
};

const FARM_TO_BOTTLE = {
	image: farmToBottleImage,
	title: 'From farm to bottle',
	subtitle:
		'At the Lakan farm distillery, rows of coconut trees are meticulously cultivated to produce the finest lambanog. Visitors can experience this journey firsthand through an immersive farm tour, offering a unique glimpse into the art of making Lakan Lambanog.',
	button: 'Visit the farm',
	href: '/house-of-lakan',
};

const AWARDS_TITLE = 'Award-winning spirit';

const FOOTER = {
	image: footerImage,
	title: 'Emil & Celina',
	subtitle: 'May 10, 2025 · Saturday · Tagaytay City',
	button: 'View Details',
	href: '/find-us',
};

const AWARDS = [
	{
		award: 'Gold',
		title: 'Monde Selection',
		year: '2024',
	},
	{
		award: 'Gold',
		title: 'Monde Selection',
		year: '2023',
	},
	{
		award: 'Gold',
		title: 'Monde Selection',
		year: '2018',
	},
	{
		award: 'Gold',
		title: 'Monde Selection',
		year: '2017',
	},
	{
		award: 'Gold',
		title: 'Monde Selection',
		year: '2015',
	},
	{
		award: 'Gold',
		title: 'china wine & Spirits Awards',
		year: '2017',
	},
	{
		award: 'Silver',
		title: 'Monde Selection',
		year: '2022',
	},
	{
		award: 'Silver',
		title: 'Monde Selection',
		year: '2021',
	},
	{
		award: 'Silver',
		title: 'Monde Selection',
		year: '2018',
	},
	{
		award: 'Silver',
		title: 'San Francisco World Spirits Competition',
		year: '2017',
	},
	{
		award: 'Silver',
		title: 'New York World Wine & Spirits Competition',
		year: '2017',
	},
	{
		award: 'Silver',
		title: 'New York World Wine & Spirits Competition',
		year: '2016',
	},
	{
		award: 'Bronze',
		title: 'San Francisco World Spirits Competition',
		year: '2016',
	},
];

const QUOTES: Array<Quote> = [
	{
		quote: 'Literally translating into “warrior” or “nobility”, Lakan describes the spirit’s strength and character. With hints of fruit and vanilla, the extra premium lambanog is easy on the palate and has a unique kick.',
		author: 'Philippine Tatler',
	},
	{
		quote: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Adipiscing primis elit porta egestas quam posuere viverra elementum auctor. Sit vivamus habitant potenti porttitor netus natoque pretium.',
		author: 'Test',
	},
	{
		quote: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris quisque nunc parturient viverra mus volutpat massa phasellus imperdiet. Lacus parturient diam sit per gravida at facilisi cras lacus.',
		author: 'Test',
	},
];

const FEATURED_STORIES_TITLE = 'Featured stories';
const FEATURED_STORIES_PUBLISHERS = {
	publisherInquirer: '/assets/publisher_inquirer.png',
	publisherPrimer: '/assets/publisher_primer.png',
};
const FEATURED_STORIES = [
	{
		image: article1,
		publisher: FEATURED_STORIES_PUBLISHERS.publisherInquirer,
		title: 'Lakan ‘lambanog’: The drink of Filipino nobility',
	},
	{
		image: article1,
		publisher: FEATURED_STORIES_PUBLISHERS.publisherPrimer,
		title: 'A drink fit for royalty: Lakan Extra Premium Lambanog',
	},
	{
		image: article1,
		publisher: FEATURED_STORIES_PUBLISHERS.publisherInquirer,
		title: 'Filipino lambanog gets gold from international body',
	},
];

export default {
	HOME_HERO,
	OUR_SPECIAL_DAY,
	HOME_PORTRAITS,
	ICON_ROW,
	CRAFTING,
	homeImageBreaker,
	FARM_TO_BOTTLE,
	AWARDS_TITLE,
	FOOTER,
	AWARDS,
	QUOTES,
	FEATURED_STORIES_TITLE,
	FEATURED_STORIES,
};
