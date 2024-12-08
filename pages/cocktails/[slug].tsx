import Head from 'next/head';
import Layout from '../../components/layout';
import Constants from '../../lib/constants';
import {
	Breadcrumbs,
	ColoredBgWrapper,
	Divider,
} from '../../components/page-sections';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Sections from '../../components/sections';
import { notFound } from 'next/navigation';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getCocktailInformation, getCocktailPaths } from '../../lib/api';
import Vectors from '../../components/vectors';
import { CocktailProps } from '../../lib/types/cocktail';

export default function Cocktail({ cocktail }: CocktailProps) {
	const router = useRouter();
	const breadcrumbs = ['home', 'cocktails', router.query.slug as string];
	const data = cocktail;

	if (router.isFallback) {
		notFound();
	}
	return (
		<Layout
			key={router.query.slug as string}
			textBlack>
			<Head>
				<title>{`${Constants.CMS_NAME}`}</title>
			</Head>
			<ColoredBgWrapper bgColor="nata">
				<Breadcrumbs
					breadcrumbs={breadcrumbs}
					light
				/>
				<div className="flex flex-col lg:flex-row max-w-[1920px] lg:pt-20 pb-[96px] lg:pb-[120px] w-full gap-y-10 mx-auto justify-center xl:gap-x-[149px] lg:gap-x-[40px]">
					<div className="flex max-w-[761px] w-full h-[440px] lg:h-[869px] relative mx-auto lg:mx-0">
						<div className="flex max-w-[518px] w-full h-[440px] lg:h-[869px] relative mx-auto ">
							<Image
								placeholder="blur"
								src={data.productImage}
								alt=""
								width={518}
								height={869}
								className="absolute z-[1] lg:mx-0 object-bottom object-cover mx-auto fade-up max-w-[518px] w-full px-6 h-[440px] lg:h-[869px] "
								priority
							/>
						</div>
						<Vectors.LeavesLg
							side="cocktail"
							fill="#FFF8F1"
							className="absolute z-[0] max-w-[761px] w-full bottom-[-90px] lg:bottom-[-220px] h-auto max-h-[575px] lg:max-h-none"
						/>
					</div>

					<div className="z-[1] flex flex-col max-w-[719px] w-full self-center px-6 font-thin">
						<span className="font-garamond text-[36px] lg:text-[3rem] text-center lg:text-left leading-[100%] pb-14">
							{data?.name}
						</span>

						<div className="flex flex-row w-full border-t border-[#121212]">
							<div className="py-[14px] w-full text-center leading-[140%] border-[#121212] border-r">
								{data?.description.variant}
							</div>
							<div className="py-[14px] w-full text-center leading-[140%] border-[#121212]">
								{data?.description?.serving}
							</div>
						</div>

						<div className="py-6 lg:p-10 border-[#121212] border-t">
							{data?.description?.descriptionText}
						</div>

						<div className="py-6 lg:p-10 border-[#121212] border-t">
							<div className="uppercase leading-[140%] tracking-[1.28px] mb-3">
								INGREDIENTS
							</div>
							<ul className="list-disc list-inside pl-2">
								{data?.description?.ingredients.map(
									(item, i) => {
										return <li key={i}>{item}</li>;
									}
								)}
							</ul>
						</div>

						<div className="py-6 lg:p-10 border-[#121212] border-t">
							<div className="uppercase leading-[140%] tracking-[1.28px] mb-3">
								PREP
							</div>
							{data?.description?.prep}
						</div>

						<Divider
							type={'top'}
							dark
						/>
					</div>
				</div>
			</ColoredBgWrapper>

			<Sections.CocktailCarousel
				data={data.featured}
				secondaryHeader
				cardLimit={4}
			/>
		</Layout>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getCocktailPaths();
	const paths = posts.map((post: any) => ({
		params: { slug: String(post.slug) },
	}));

	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const cocktail = await getCocktailInformation(params.slug as string);

	return {
		props: { cocktail },
	};
};
