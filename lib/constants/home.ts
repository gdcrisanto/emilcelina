import homeHero from '../../public/assets/home_hero.png';
import craftingImage from '../../public/assets/home_crafting_excellence.png';
import homeImageBreaker from '../../public/assets/home_image_breaker.png';
import farmToBottleImage from '../../public/assets/farm_to_bottle.png';
import footerImage from '../../public/assets/home_footer_hero.png';
import article1 from '../../public/assets/article1.png';
import article2 from '../../public/assets/article2.png';
import article3 from '../../public/assets/article3.png';
import { Quote } from '../types/quotes';

const HOME_HERO = {
	image: homeHero,
	title: 'The True Filipino Spirit',
	subtitle: 'The Philippines’ highest awarded Lambanog',
	button: 'Grab a bottle',
	href: '/lambanog',
};

const PRODUCTS_ROW = {
	title: 'Tradition in every sip',
	subtitle:
		'Lakan Lambanog is a distinguished Filipino spirit, distilled from premium coconut nectar. This multi-awarded spirit blends tradition with modern expertise, offering a smooth, vibrant flavor that has earned global recognition.',
	button: 'Discover Our spirits',
	href: '/lambanog',
};

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
	title: 'Get your own bottle of Lakan',
	button: 'Where to find us',
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
	PRODUCTS_ROW,
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
