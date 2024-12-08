import Head from 'next/head';
import Layout from '../../components/layout';
import Constants from '../../lib/constants';
import {
	Breadcrumbs,
	ColoredBgWrapper,
	Divider,
	FooterProductLinks,
} from '../../components/page-sections';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Sections from '../../components/sections';
import { notFound } from 'next/navigation';
import PageHero from '../../components/page-hero';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getProductInformation, getProductPaths } from '../../lib/api';
import { TasteIcon } from '../../components/taste-icon';
import lambanog_product_image from '../../public/assets/lambanog_product_image.png';

export default function Lambanog({ product }) {
	const router = useRouter();
	const breadcrumbs = ['home', 'lambanog', router.query.slug as string];
	const data = product;

	if (router.isFallback) {
		notFound();
	}
	return (
		<Layout key={router.query.slug as string}>
			<Head>
				<title>{`${Constants.CMS_NAME}`}</title>
			</Head>
			<ColoredBgWrapper bgColor="black">
				<Breadcrumbs breadcrumbs={breadcrumbs} />
				<div className="flex flex-col lg:flex-row max-w-[1920px] w-full gap-y-10 mx-auto justify-center xl:gap-x-[149px] lg:gap-x-[40px]">
					<div className="flex max-w-[600px] w-full h-[440px] lg:h-[1069px] relative mx-auto lg:mx-0">
						<Image
							placeholder="blur"
							src={lambanog_product_image}
							alt=""
							width={600}
							height={1069}
							className="absolute lg:mx-0 object-center object-cover mx-auto fade-up max-w-[600px] w-full px-6 h-[440px] lg:h-[1069px]"
							priority
						/>
						<div
							className="hidden lg:block absolute left-0 w-[30%] h-full z-[1]"
							style={{
								background:
									'linear-gradient(90deg, #121212 0%, rgba(0, 0, 0, 0.00) 100%)',
							}}
						/>
						<div
							className="hidden lg:block absolute right-0 w-[30%] h-full z-[1]"
							style={{
								background:
									'linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, #121212 100%)',
							}}
						/>
					</div>

					<div className="flex flex-col max-w-[719px] w-full self-center px-6">
						<span className="font-garamond text-[36px] lg:text-[3rem] text-center lg:text-left leading-[100%] pb-6">
							{data?.name}
						</span>

						<div className="flex flex-row w-full border-t border-[#B99D37] font-thin">
							{data?.description?.attributes.map(
								(attr, index) => {
									return (
										<div
											key={index}
											className={`hidden lg:block py-[14px] w-full text-center leading-[140%] border-[#B99D37] ${
												index + 1 <
													data?.description
														?.attributes.length &&
												index !== 0
													? 'border-r border-l'
													: ''
											}`}>
											{attr}
										</div>
									);
								}
							)}
							<div
								className={` lg:hidden py-[14px] w-full text-center leading-[140%] border-[#B99D37] border-r`}>
								{data?.description?.attributes[0]}
							</div>
							<div
								className={` lg:hidden py-[14px] w-full text-center leading-[140%] border-[#B99D37]`}>
								{data?.description?.attributes[1]}
							</div>
						</div>

						<div className="lg:hidden flex flex-row w-full border-t border-[#B99D37] font-thin">
							<div
								className={` py-[14px] w-full text-center leading-[140%] border-[#B99D37]`}>
								{data?.description?.attributes[2]}
							</div>
						</div>

						<div className="py-6 lg:p-10 border-[#B99D37] border-t font-thin">
							{data?.description?.descriptionText}
						</div>

						<div className="flex py-6 flex-col lg:p-10 border-[#B99D37] border-t">
							<div className="uppercase leading-[140%] tracking-[1.28px]">
								Tasting Notes
							</div>
							<div className="flex flex-row flex-wrap lg:flex-nowrap max-w-[328px] lg:max-w-none w-full gap-x-4 lg:gap-x-0 mt-4 uppercase leading-[140%] tracking-[1.28px] justify-between gap-y-6 mx-auto lg:mx-0">
								{data?.description?.notes.map((note, i) => {
									return (
										<div
											key={i}
											className="flex flex-col justify-center items-center max-w-[156px] w-full lg:w-fit text-center">
											<TasteIcon note={note.note} />
											<div className="mt-4 uppercase leading-[140%] tracking-[1.28px] w-full lg:w-fit text-nowrap">
												{note.note}
											</div>
										</div>
									);
								})}
							</div>
						</div>
						<Divider type={'top'} />
					</div>
				</div>

				<div className="flex w-full py-10 px-6 lg:py-[120px] lg:px-20">
					<Sections.ImageInformation
						image={
							<div className="w-full lg:max-w-[869px] fade-up">
								<PageHero
									image={data?.imageInformation?.image}
									alt=""
									bgGradient=""
									size="custom"
									customSize=" h-[250px] lg:h-[518px]"
									width={869}
									height={518}
								/>
							</div>
						}
						data={data?.imageInformation}
						textWhite
						reverse
						size="sm"
					/>
				</div>

				<div className="flex flex-col w-full px-6 lg:px-0 lg:pb-[144px] max-w-[1920px] justify-between mx-auto fade-up">
					<Sections.Slider
						images={data?.carousel}
						textWhite
					/>
				</div>
			</ColoredBgWrapper>

			<Sections.CocktailCarousel
				data={Constants?.FEATURED_COCKTAILS}
				cardLimit={4}
			/>

			<FooterProductLinks links={data?.footerLinks} />
		</Layout>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getProductPaths();
	const paths = posts.map((post: any) => ({
		params: { slug: String(post.slug) },
	}));

	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const product = await getProductInformation(params.slug as string);

	return {
		props: { product },
	};
};
