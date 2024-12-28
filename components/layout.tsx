import Sections from './sections';
import Meta from './meta';
import BackToTop from './back-to-top';
import { useEffect, useState } from 'react';
import Vectors from './vectors';
import moment from 'moment';
import { LayoutProps } from '../lib/types/sections';
import { InputFieldType, AgeForm } from '../lib/types/form';
import PageHero from './page-hero';
import constants from '../lib/constants';
import Link from 'next/link';

export default function Layout({
	children,
	noSiteHeader,
	textBlack,
}: LayoutProps) {
	// const [isError, setIsError] = useState<Boolean | undefined>(undefined);
	// const [isOpen, setIsOpen] = useState<Boolean>(false);
	// const [formState, setFormState] = useState<AgeForm>({
	// 	birthYear: '',
	// });

	// useEffect(() => {
	// 	if (localStorage.getItem('over18') === 'true') {
	// 		setIsOpen(false);
	// 	} else {
	// 		setIsOpen(true);
	// 	}
	// }, []);

	// const handleChange = ({ target }) => {
	// 	setFormState({
	// 		...formState,
	// 		[target.name]: target.value.trim().replace(/[^0-9]/gi, ''),
	// 	});
	// };

	// const handleFormSubmit = async (e) => {
	// 	e.preventDefault();
	// 	setFormState((prev) => ({
	// 		...prev,
	// 	}));
	// 	if (validateBirthYear(formState.birthYear)) {
	// 		localStorage.setItem('over18', 'true');
	// 		setIsOpen(false);
	// 		setIsError(false);
	// 	} else {
	// 		setIsOpen(true);
	// 		setIsError(true);
	// 	}
	// };

	// useEffect(() => {
	// 	if (isOpen) {
	// 		document.body.classList.add('overflow-y-hidden');
	// 	} else {
	// 		document.body.classList.remove('overflow-y-hidden');
	// 	}
	// }, [isOpen]);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('in-view');
				}
			});
		});

		const fadeUpElements = document.querySelectorAll('.fade-up');
		fadeUpElements.forEach((element) => observer.observe(element));
	}, []);

	return (
		<>
			<Meta />
			<div className="min-h-screen neutral-bg flex w-full relative ">
				{!noSiteHeader && <Sections.SiteHeader textBlack={textBlack} />}
				<main className="neutral-bg w-full flex flex-col relative ">
					{children}
					<PageHero
						image={constants.FOOTER.image}
						alt=""
						size="custom"
						customSize=" h-[470px] lg:h-[500px]"
						// customPosition=" object-[bottom_10rem] lg:object-[center_-20rem]"
						// bgGradient="linear-gradient(180deg, rgba(0, 0, 0, 0.00) 53.92%, rgba(0, 0, 0, 0.80) 100%)"
					>
						<div className=" mx-auto flex-col md:flex-col flex items-center justify-center text-white text-center fade-up">
							<div className='flex flex-col'>
								<h2 className="text-[#FCF4EA] font-playfair text-4xl lg:text-[3rem] leading-[100%] font-medium z-20">
									{constants.FOOTER.title}
								</h2>
								<h3 className="mt-4 mb-4 text-2xl lg:text-[2.125rem] text-[#FCF4EA] z-20 whitespace-pre-wrap">
									{constants.HOME_HERO.subtitle}
								</h3>
								<div className="flex flex-row gap-x-10 z-20 justify-center">
									<Link
										className="button text-white bg-[#46542f] hover:bg-[#FCF4EA] px-6 py-3 hover:text-[#46542f] lg:text-xl"
										href={constants.FOOTER.href2}
										target="_blank">
										{constants.FOOTER.button2}
									</Link>
									</div>
							</div>
							<div
								className="absolute w-full h-full z-10 opacity-20"
								style={{
									background:
										'linear-gradient(black,black)',
								}}
							/>
						</div>
					</PageHero>
					<BackToTop />
				</main>
				{/* {isOpen && (
					<div className="flex fixed w-full z-[1000] h-screen justify-center items-center bg-[rgba(0,0,0,0.5)] p-6">
						<div className="flex flex-col py-10 w-full max-w-[1166px] z-[1001] bg-[#121212] justify-center text-center text-white h-full lg:h-fit p-6">
							<Vectors.Logo
								fill={'#B99D37'}
								className="mx-auto mb-[120px]"
							/>
							<span className="leading-[100%] text-3xl font-playfair mb-2">
								Welcome
							</span>

							<span className="leading-[140%] text-lg mb-8">
								You must be over 18 years old to access this
								website.
							</span>

							<div
								className="uppercase flex flex-col w-full max-w-[271px] mb-[100px] relative mx-auto text-left"
								onSubmit={(e) => handleFormSubmit(e)}>
								<InputField
									field={formState.birthYear}
									handleChange={handleChange}
									label={'YEAR OF BIRTH'}
									placeholder={'YYYY'}
									name="birthYear"
									isError={isError}
								/>
								<div
									onClick={(e) => handleFormSubmit(e)}
									className=" px-6 py-4 mt-10 select-none uppercase tracking-widest w-fit mx-auto cursor-pointer border border-white rounded hover:bg-[#121212] hover:text-[#B99D37]">
									Enter Site
								</div>
							</div>

							<div className="flex flex-wrap text-nowrap whitespace-pre-wrap mx-auto justify-center text-sm leading-[140%]">
								{'By entering this site you agree to our '}
								<span className="text-[#B99D37] underline">
									Terms & Conditions
								</span>
								{' and '}
								<span className="text-[#B99D37] underline">
									Privacy & Cookies Notice.
								</span>
							</div>
						</div>
					</div>
				)} */}
			</div>
		</>
	);
}

// const InputField = ({
// 	field,
// 	handleChange,
// 	placeholder,
// 	label,
// 	name,
// 	isError,
// }: InputFieldType) => {
// 	const inputClassName =
// 		'input-field-dark mt-3 ' +
// 		(!isError || isError == undefined ? ' mb-7 ' : ' mb-2 ');

// 	const errorClassName =
// 		!isError || isError == undefined
// 			? 'hidden '
// 			: 'text-[#FF7171] normal-case text-[14px] font-light';

// 	return (
// 		<div className="flex flex-col w-full">
// 			<div className="tracking-widest">{label}</div>
// 			<input
// 				className={inputClassName}
// 				name={name}
// 				value={field}
// 				onChange={(e) => handleChange(e)}
// 				type="text"
// 				placeholder={placeholder}
// 				maxLength={4}
// 			/>
// 			<div className={errorClassName}>
// 				You are too young to access this website.
// 			</div>
// 		</div>
// 	);
// };

// const validateBirthYear = (year: string) => {
// 	const currentDate = moment();
// 	if (
// 		year.length === 4 &&
// 		Number(currentDate.format('YYYY')) > Number(year)
// 	) {
// 		const birthDate = moment().set('year', Number(year));
// 		const dateDiff = currentDate.diff(birthDate, 'years');
// 		if (dateDiff > 18) {
// 			return true;
// 		}
// 		return false;
// 	} else {
// 		return false;
// 	}
// };
