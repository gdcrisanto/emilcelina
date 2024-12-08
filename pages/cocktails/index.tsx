import Head from 'next/head';
import Layout from '../../components/layout';
import Constants from '../../lib/constants';
import PageHero from '../../components/page-hero';
import Vectors from '../../components/vectors';
import { CocktailCard } from '../../components/page-sections';
import { FilterDropdownProps } from '../../lib/types/filters';

export default function Cocktails() {
	const {
		COCKTAIL_TYPE_FILTER,
		COCKTAILS_CATALOG,
		HERO_HEADER,
		LAKAN_VARIANT_FILTER,
		TASTE_PROFILE_FILTER,
	} = Constants;

	return (
		<Layout>
			<Head>
				<title>{`${Constants.CMS_NAME}`}</title>
			</Head>
			<PageHero
				bgGradient={HERO_HEADER.gradient}
				image={HERO_HEADER.image}
				alt=""
				priority
				className="justify-center flex-row pb-10 lg:pb-16">
				<div className="mt-auto font-garamond flex-col md:flex-col flex text-white text-6xl lg:text-[3rem] text-center mx-auto leading-[100%]">
					{HERO_HEADER.title}
				</div>
			</PageHero>

			<div className="flex flex-col w-full mx-auto px-6 lg:px-20 py-10 lg:py-[120px] max-w-[1920px]">
				<div className="flex flex-col lg:flex-row w-full gap-x-6">
					<FilterDropdown data={COCKTAIL_TYPE_FILTER} />
					<FilterDropdown data={LAKAN_VARIANT_FILTER} />
					<FilterDropdown data={TASTE_PROFILE_FILTER} />
				</div>
				<CocktailsCatalog data={COCKTAILS_CATALOG} />
			</div>
		</Layout>
	);
}

const FilterDropdown = ({ data }: FilterDropdownProps) => {
	const { label, field } = data;
	return (
		<div className="flex flex-col w-full lg:max-w-[273px] text-[#121212] gap-y-3 font-thin">
			<div className="text-sm uppercase tracking-[1.12px]">{label}</div>
			<div className="flex flex-row border border-[#E1E2E2] px-3 py-2 text-lg leading-[140%]">
				<div className="w-full mr-2">{field}</div>
				<Vectors.ChevronDown />
			</div>
		</div>
	);
};

const CocktailsCatalog = ({ data }: any) => {
	return (
		<div className="flex flex-row flex-wrap w-full gap-x-6 gap-y-10 lg:gap-y-20 mt-20">
			{data.map((item, i) => {
				return (
					<CocktailCard
						name={item.name}
						href={item.href}
						key={`${item.name} ${i}`}
						description={item.description}
						image={item.image}
						size="catalog"
					/>
				);
			})}
		</div>
	);
};
