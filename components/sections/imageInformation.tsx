import { Divider } from '../page-sections';
import Link from 'next/link';
import { ImageInformationProps } from '../../lib/types/sections';

const ImageInformation = ({
	image,
	data,
	hasDivider,
	textWhite,
	reverse,
	textCenter,
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

			<div className="flex-col flex self-center w-full lg:w-1/2 px-6 lg:px-0 py-10 text-center lg:text-left fade-up">
				<div
					className={`flex flex-col lg:max-w-[590px] w-full space-y-4 ${
						textCenter ? 'justify-center' : 'justify-start'
					}`}>
					{hasDivider && <Divider type={'top'} />}
					<h1
						className={`text-[#5F6F52] font-newsreader text-4xl ${
							size === 'normal' ? 'lg:text-4xl' : 'lg:text-6xl'
						} leading-9 lg:leading-[100%] ${
							textCenter ? 'text-center' : ''
						}`}>
						{data?.title}
					</h1>
					<h2
						className={`text-[#BF8F67] text-lg font-light ${
							textCenter ? 'text-center' : ''
						}`}>
						{data?.subtitle}
					</h2>
					{data?.button && (
						<Link
							href={data?.href}
							className={`button py-2 px-10 text-xs font-light border w-fit tracking-wider rounded ${
								textWhite
									? 'border-[#BF8F67]'
									: 'border-[#121212]'
							} ${
								textWhite
									? 'hover:text-white text-[#BF8F67]  hover:bg-[#BF8F67]'
									: 'text-white bg-[#BF8F67] hover:bg-[#5F6F52]'
							} mx-auto`}>
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
