import lambanog_header_hero from '../../public/assets/lambanog_header_hero.png';
import modern_lambanog1 from '../../public/assets/modern_lambanog1.png';
import modern_lambanog2 from '../../public/assets/modern_lambanog2.png';
import modern_lambanog3 from '../../public/assets/modern_lambanog3.png';
import modern_lambanog4 from '../../public/assets/modern_lambanog4.png';

const LAMBANOG_HEADER_TITLE =
	'Handcrafted Lambanog \nin the islands of the Philippines';
const LAMBANOG_HEADER_HERO = lambanog_header_hero;

const FARM_TO_BOTTLE_LAMBANOG = {
	title: `From farm to bottle`,
	subtitle:
		'Experience the essence of the Philippines with Lambanog, a traditional coconut vodka distilled from fermented coconut flower sap. This potent spirit, deeply rooted in Filipino culture, is a staple at celebrations and gatherings, symbolizing community and tradition.',
};

const MODERN_LAMBANOG = {
	title: `Authentic and modern lambanog`,
	subtitle:
		'Discover the journey of our lambanog, from the careful harvest of coconut sap to its transformation through fermentation and distillation. Each step reflects the rich tradition and craftsmanship that define our spirit.',
};

const LAMBANOG_PROCESS_ITEMS = [
	{
		image: modern_lambanog1,
		title: 'Harvest',
		subtitle:
			'Coconut nectar is meticulously harvested from the spadix of the coconut tree, the flowering stalk that produces the coconut blossoms. Our skilled farmers carefully select and cut the spadix, allowing the sap to gently flow into collection containers.',
	},
	{
		image: modern_lambanog2,
		title: 'Fermentation',
		subtitle:
			'This nectar is then placed in earthenware, where it naturally ferments over several days. As it ferments, it transforms into tuba, a mildly alcoholic coconut wine.',
	},
	{
		image: modern_lambanog3,
		title: 'Distillation',
		subtitle:
			'Each Lakan variant undergoes multiple distillations, drawing inspiration from the meticulous processes used in whiskey and vodka production. This refined approach allows us to craft the distinct flavor profiles of Lakan Gold, Silver, and Bronze.',
	},
	{
		image: modern_lambanog4,
		title: 'Bottling',
		subtitle:
			'The Lambanog is then hand-bottled and labeled, ensuring that every bottle upholds the exceptional quality synonymous with the Lakan brand.',
	},
];

export default {
	LAMBANOG_HEADER_TITLE,
	LAMBANOG_HEADER_HERO,
	FARM_TO_BOTTLE_LAMBANOG,
	MODERN_LAMBANOG,
	LAMBANOG_PROCESS_ITEMS,
};
