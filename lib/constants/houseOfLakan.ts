import house_of_lakan_hero1 from '../../public/assets/house_of_lakan_hero1.png';
import house_of_lakan_hero2 from '../../public/assets/house_of_lakan_hero2.png';
import house_of_lakan_hero3 from '../../public/assets/house_of_lakan_hero3.png';
import house_of_lakan_hero4 from '../../public/assets/house_of_lakan_hero4.png';

const HOL_HEROES = {
	1: {
		title: 'Visit the Lakan Farm\nand Distillery',
	},
	2: {
		title: `The Farm Experience`,
		subtitle:
			'A visit to our farm-distillery begins with harvesting ripe coconuts from our dwarf trees, where guests can enjoy fresh, chilled buko juice and take home complimentary fruits. Our farmers will guide you through the cultivation process, from blossoming flowers to fruit. We’ll then demonstrate how tuba (coconut wine) and lambanog (coconut liquor) are made, starting with the traditional harvesting of coconut nectar, leading to its natural fermentation into tuba.',
		image: house_of_lakan_hero2,
	},
	3: {
		title: `Distillery Tour`,
		subtitle:
			'Guests will then embark on a comprehensive tour of our distillation facility, where the magic of transforming fermented tuba into our renowned Lakan Lambanog takes place. In this part of the tour, you’ll witness the meticulous process of distillation, as our skilled artisans carefully refine the fermented tuba to extract the pure, high-quality spirit.',
		image: house_of_lakan_hero3,
	},
	4: {
		title: `Tasting and Cocktails`,
		subtitle:
			'After exploring the farm and distillery, guests are invited to unwind and savor their experience at our Farmhouse Tasting Room. Here, you’ll be served a selection of our coconut wine, lambanog, and expertly crafted cocktails that showcase the unique flavors of our spirits. The tasting session is designed to complement the educational journey, allowing you to enjoy the fruits of our labor while soaking in the relaxed, rustic ambiance of the farmhouse.',
		image: house_of_lakan_hero4,
	},
};

const OUR_FARM = {
	title: `Our Farm`,
	subtitle:
		'Situated at the foothills of Makolod mountain and near the Taal volcano, the Lakan farm and distillery is a family-owned sanctuary of tradition. Our farm, rich in volcanic soil, is home to hundreds of Tacunan dwarf coconuts and is surrounded by mahogany and narra trees. We practice organic and sustainable harvesting, carefully extracting nectar from our coconut trees to create premium lambanog. Registered with the Philippine Coconut Authority (PCA) and licensed by the FDA of the Philippines, our farm embodies quality and integrity in every bottle.',
	image: house_of_lakan_hero1,
};

const SCHEDULE = {
	title: `Schedule your visit`,
	subtitle:
		'Farm tours are available by appointment only. The Lakan Farm is open Tuesdays to Saturdays from 10AM - 3PM. To schedule your visit, please email: krc@philippinedistillers.com',
};

export default {
	HOL_HEROES,
	OUR_FARM,
	SCHEDULE,
};
