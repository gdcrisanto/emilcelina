import { Divider } from '../page-sections';
import Link from 'next/link';
import { ImageInformationProps } from '../../lib/types/sections';

const ImageInformation = ({
	image,
	data,
	hasDivider,
	textWhite,
	reverse,
	size = 'normal',
}: ImageInformationProps) => {
	return (
		<div
			className={`flex ${
				reverse
					? 'flex-col lg:flex-row-reverse'
					: 'flex-col lg:flex-row'
			} w-full justify-between max-w-[1920px] mx-auto text-center lg:text-left ${
				textWhite ? 'text-white' : 'text-[#121212] '
			}`}>
			{image}

			<div className="flex-col flex self-center lg:max-w-[799px] px-6 lg:px-0 py-10 text-center lg:text-left lg:mx-5 fade-up w-full">
				<div className="flex flex-col lg:max-w-[590px] mx-auto w-full space-y-10 justify-start">
					{hasDivider && <Divider type={'top'} />}
					<h1
						className={`font-garamond text-4xl ${
							size === 'normal' ? 'lg:text-[3rem]' : 'lg:text-6xl'
						} leading-9 lg:leading-[100%]`}>
						{data?.title}
					</h1>
					<h2 className="text-lg font-thin">{data?.subtitle}</h2>
					{data?.button && (
						<Link
							href={data?.href}
							className={`button py-4 px-6 uppercase text-base font-thin border w-fit tracking-wider rounded ${
								textWhite ? 'border-white' : 'border-[#121212]'
							} ${
								textWhite
									? 'hover:bg-white hover:text-[#121212]'
									: 'hover:bg-[#121212] hover:text-[#B99D37]'
							} mx-auto lg:mx-0`}>
							{data?.button}
						</Link>
					)}

					{hasDivider && <Divider type={'bottom'} />}
				</div>
			</div>
		</div>
	);
};

export default { ImageInformation };
