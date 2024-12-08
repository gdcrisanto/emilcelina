import lakan_gold_image_info from '../../public/assets/lakan_gold_image_info.png';
import lambanog_product_image from '../../public/assets/lambanog_product_image.png';
import gold_carousel1 from '../../public/assets/gold_carousel1.png';
import gold_product_link_bg from '../../public/assets/gold_product_link_bg.png';
import silver_product_link_bg from '../../public/assets/silver_product_link_bg.png';
import bronze_product_link_bg from '../../public/assets/bronze_product_link_bg.png';
import { ProductSlugs } from '../types/products';

const PRODUCT_SLUGS: ProductSlugs = {
	'lakan-gold': {
		path: 'lakan-gold',
		productImage: lambanog_product_image,
		name: 'Lakan Gold',
		description: {
			attributes: ['ABV 45%', 'Volume 750ml', '6x Distilled'],
			descriptionText:
				'Lakan Gold is craft distilled multiple times in small batches by our Master Artisan in order to preserve a classic jammy fruit flavor that truly characterizes this peerless and exquisite liquor.',
			notes: [
				{
					note: 'vanilla',
				},
				{
					note: 'honey',
				},
				{
					note: 'peppercorn',
				},
				{
					note: 'banana peel',
				},
			],
		},
		imageInformation: {
			title: 'Craftsmanship and elegance',
			subtitle:
				'Every bottle of Lakan Lambanog is a testament to meticulous craftsmanship, handmade and carefully bottled to ensure the highest quality. The design of each bottle and its accompanying box exudes elegance, with sleek lines and refined details that embody the brand’s core values of leadership and excellence.',
			image: lakan_gold_image_info,
		},
		carousel: [gold_carousel1, gold_carousel1, gold_carousel1],
		footerLinks: [
			{
				title: 'Lakan Bronze',
				image: bronze_product_link_bg,
				href: '/lambanog/lakan-bronze',
			},
			{
				title: 'Lakan Silver',
				image: silver_product_link_bg,
				href: '/lambanog/lakan-silver',
			},
		],
	},
	'lakan-silver': {
		path: 'lakan-silver',
		productImage: lambanog_product_image,
		name: 'Lakan silver',
		description: {
			attributes: ['ABV 45%', 'Volume 750ml', '6x Distilled'],
			descriptionText:
				'Lakan Gold is craft distilled multiple times in small batches by our Master Artisan in order to preserve a classic jammy fruit flavor that truly characterizes this peerless and exquisite liquor.',
			notes: [
				{
					note: 'honey',
				},
				{
					note: 'vanilla',
				},
				{
					note: 'peppercorn',
				},
			],
		},
		imageInformation: {
			title: 'Craftsmanship and elegance',
			subtitle:
				'Every bottle of Lakan Lambanog is a testament to meticulous craftsmanship, handmade and carefully bottled to ensure the highest quality. The design of each bottle and its accompanying box exudes elegance, with sleek lines and refined details that embody the brand’s core values of leadership and excellence.',
			image: lakan_gold_image_info,
		},
		carousel: [gold_carousel1, gold_carousel1, gold_carousel1],
		footerLinks: [
			{
				title: 'Lakan Gold',
				image: gold_product_link_bg,
				href: '/lambanog/lakan-gold',
			},
			{
				title: 'Lakan Bronze',
				image: bronze_product_link_bg,
				href: '/lambanog/lakan-bronze',
			},
		],
	},
	'lakan-bronze': {
		path: 'lakan-bronze',
		productImage: lambanog_product_image,
		name: 'Lakan Bronze',
		description: {
			attributes: ['ABV 45%', 'Volume 750ml', '6x Distilled'],
			descriptionText:
				'Lakan Gold is craft distilled multiple times in small batches by our Master Artisan in order to preserve a classic jammy fruit flavor that truly characterizes this peerless and exquisite liquor.',
			notes: [
				{
					note: 'peppercorn',
				},
				{
					note: 'honey',
				},
				{
					note: 'banana peel',
				},
			],
		},
		imageInformation: {
			title: 'Craftsmanship and elegance',
			subtitle:
				'Every bottle of Lakan Lambanog is a testament to meticulous craftsmanship, handmade and carefully bottled to ensure the highest quality. The design of each bottle and its accompanying box exudes elegance, with sleek lines and refined details that embody the brand’s core values of leadership and excellence.',
			image: lakan_gold_image_info,
		},
		carousel: [gold_carousel1, gold_carousel1, gold_carousel1],
		footerLinks: [
			{
				title: 'Lakan Gold',
				image: gold_product_link_bg,
				href: '/lambanog/lakan-gold',
			},
			{
				title: 'Lakan Silver',
				image: silver_product_link_bg,
				href: '/lambanog/lakan-silver',
			},
		],
	},
};

export default {
	PRODUCT_SLUGS,
};
