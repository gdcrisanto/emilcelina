import Link from 'next/link';
import { ColoredBgWrapper } from '../components/page-sections';
import Vectors from '../components/vectors';
import Layout from '../components/layout';

export default function notFound() {
	return (
		<Layout>
			<ColoredBgWrapper
				bgColor="black"
				className="h-screen">
				<div className="flex flex-row mx-auto w-full h-screen px-6">
					<div className="flex flex-col mx-auto w-full my-auto relative max-w-[1920px] z-[1]">
						<div className="flex flex-col mx-auto">
							<span className="text-center text-[36px] lg:text-[48px] font-newsreader leading-[100%]">
								Sorry, we can’t find that page
							</span>
							<Link
								href="/"
								className="button border-white rounded text-center tracking-[1.28px] uppercase px-6 py-4 w-fit mx-auto mt-10 hover:bg-white hover:text-[#121212]">
								Back to homepage
							</Link>
						</div>
					</div>
					<Vectors.LeavesLg className="absolute z-0 left-0 self-center hidden lg:block" />
					<Vectors.LeavesLg
						side="right"
						className="absolute z-0 right-0 self-center  hidden lg:block"
					/>
					<Vectors.LeavesLg
						side="bottom"
						className="absolute z-[0] bottom-0 left-[calc(50%-calc(327px*0.5))] lg:hidden"
					/>
				</div>
			</ColoredBgWrapper>
		</Layout>
	);
}
