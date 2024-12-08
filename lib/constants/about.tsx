import Vectors from '../../components/vectors';
import about_hero from '../../public/assets/about_hero.png';
import home_crafting_excellence from '../../public/assets/home_crafting_excellence.png';
import about_image_breaker from '../../public/assets/about_image_breaker.png';
import about_image_breaker2 from '../../public/assets/about_image_breaker2.png';
import about_filipino_heritage from '../../public/assets/about_filipino_heritage.png';
import coconut_to_bottle from '../../public/assets/coconut_to_bottle.png';
import coconut_to_bottle2 from '../../public/assets/coconut_to_bottle2.png';

const ABOUT_HEADER = {
	image: about_hero,
	title: 'Setting new standards\nof excellence',
};

const TRADITION_IMAGE_INFO = {
	image: home_crafting_excellence,
	title: 'Blending tradition and innovation',
	subtitle:
		'After ten years of research and development, Philippine Craft Distillers, Inc. introduced Lakan – Extra Premium Lambanog in 2014, setting a new standard in the industry. This handcrafted spirit is made using a proprietary multi-stage distillation process, showcasing the company’s deep-rooted commitment to Filipino tradition.',
};

const IMAGE_BREAKERS = [about_image_breaker, about_image_breaker2];

const FILIPINO_HERITAGE_INFO = {
	image: about_filipino_heritage,
	title: 'A taste of Filipino heritage',
	subtitle:
		'Lambanog’s roots trace back to the pre-colonial era, a tradition passed down through generations of Filipino coconut farmers.  This iconic spirit embodies the essence of the Philippines’ rich coconut heritage. With coconut products ranking among the country’s top exports, Lambanog is a proud representation of the Philippines’ enduring agricultural legacy.',
};

const COCONUTS_TO_BOTTLE_INFO = {
	image1: coconut_to_bottle,
	image2: coconut_to_bottle2,
	title: 'It takes at least 30 coconut trees to make 1 bottle',
	subtitle:
		'Lambanog is a cherished Filipino spirit, often called "coconut vodka." Made from the sap of coconut flowers, this clear, potent liquor is crafted in the rural areas of the Philippines. The process involves collecting sweet sap, fermenting, and distilling it to create a drink that is both strong and rich in tradition. Enjoyed during celebrations and gatherings, Lambanog embodies Filipino culture and community spirit.',
};

const QUALITY_YOU_CAN_TRUST = {
	href: '/lambanog',
	button: 'Learn about our lambanog',
	title: 'Quality you can trust',
	subtitle:
		'Lakan is proudly FDA-approved, ensuring that this premium coconut spirit meets the highest standards of safety and quality. Crafted with care and precision, our Lambanog undergoes rigorous testing and adheres to strict regulations to guarantee a smooth and safe drinking experience.',
};

const SYMBOL_OF_STRENGTH = {
	title: 'A symbol of strength and nobility',
	subtitle:
		'Lakan, a warrior ruler from the pre-colonial Philippines, symbolizes the strength and nobility of our premium lambanog. Chosen as the emblem of our brand, Lakan represents the leadership, courage, and character that define our exceptional spirit.',
};

const CRAFTING_A_LEGACY = {
	title: `Crafting a Legacy: Philippine Craft Distillers, Inc.`,
	subtitle:
		'Founded by a group of passionate coconut farmers and entrepreneurs, Philippine Craft Distillers, Inc. (PCDI) was born on May 24, 2013, with a shared dream—to transform the coconut farming industry in the Philippines. Each founder brought a unique background in business, public service, or law, united by a commitment to craft quality spirits that honor their  roots. \n\nBy December 10, 2013, PCDI earned its license from the Philippine FDA, officially beginning its journey as a trusted liquor manufacturer (License No. CFRR-RIV-FM-3169). Today, PCDI continues to blend tradition and innovation, bringing the rich flavors of the Philippines to the world.',
};

const ABOUT_PROCESS_ITEMS = [
	{
		image: (
			<Vectors.Harvest className="lg:mx-auto max-w-[80px] lg:max-w-none" />
		),
		title: 'Harvest',
		subtitle:
			'Coconut nectar is harvested by tapping the sap from coconut blossoms.',
	},
	{
		image: <Vectors.Ferment className="mx-auto" />,
		title: 'Ferment',
		subtitle:
			'The nectar ferments in earthenware, becoming tuba, a mildly alcoholic coconut wine.',
	},
	{
		image: <Vectors.Distill className="mx-auto" />,
		title: 'Distill',
		subtitle:
			'Each Lakan variant is distilled multiple times, creating the distinct flavors of Lakan Gold, Silver, and Bronze.',
	},
	{
		image: <Vectors.Bottle className="mx-auto" />,
		title: 'Bottle',
		subtitle:
			"Each bottle of Lambanog is hand-bottled and labeled to uphold Lakan's exceptional quality.",
	},
];

const GOLD_STANDARD = {
	title: 'Gold-standard spirit',
	subtitle:
		'As a leader in the lambanog industry, Lakan has earned international acclaim, with Gold Awards at the prestigious Monde Selection in 2015, 2017, 2018, 2023, and 2024. It embodies the brand’s passion and vision, blending heritage with excellence to create a truly remarkable product.',
};

export default {
	ABOUT_HEADER,
	TRADITION_IMAGE_INFO,
	IMAGE_BREAKERS,
	FILIPINO_HERITAGE_INFO,
	COCONUTS_TO_BOTTLE_INFO,
	QUALITY_YOU_CAN_TRUST,
	SYMBOL_OF_STRENGTH,
	CRAFTING_A_LEGACY,
	ABOUT_PROCESS_ITEMS,
	GOLD_STANDARD,
};
