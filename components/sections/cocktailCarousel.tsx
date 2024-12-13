import Link from 'next/link';
import { CocktailCard, OrnateHeader } from '../page-sections';
import { CocktailCarouselProps } from '../../lib/types/sections';

const CocktailCarousel = ({
	data,
	cardLimit = 5,
	cardSize = 'normal',
	secondaryHeader,
}: CocktailCarouselProps) => {
	return (
		<div className="flex flex-col w-full py-20 lg:py-[120px] px-6 lg:px-[80px] max-w-[1920px] justify-between mx-auto fade-up">
			{secondaryHeader ? (
				<div className="flex flex-col w-full text-left">
					<h1 className="font-newsreader text-[36px] lg:text-[3rem] color-[#121212] w-full text-nowrap ">
						{'Explore more cocktails'}
					</h1>
					<Link
						href="/cocktails"
						className="w-fit uppercase px-6 py-4 rounded border mt-6 border-solid border-[#121212] hover:bg-[#121212] hover:text-[#B99D37] mx-auto lg:mx-0">
						{'All cocktails'}
					</Link>
				</div>
			) : (
				<OrnateHeader
					title={'Lakan Gold Cocktails'}
					button={'All cocktails'}
				/>
			)}

			<div className="flex flex-wrap lg:flex-nowrap flex-row justify-center mt-10 lg:mt-20 gap-x-3 gap-y-10 lg:gap-y-0 lg:gap-x-6">
				{data.slice(0, cardLimit).map((item, index) => {
					return (
						<CocktailCard
							key={item.name}
							name={item.name}
							href={item.href}
							description={item.description}
							image={item.image}
							size={cardSize}
							hidden={index >= 4}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default { CocktailCarousel };
