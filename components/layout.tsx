import Sections from './sections';
import Meta from './meta';
import BackToTop from './back-to-top';
import { useEffect, useState } from 'react';
import { LayoutProps } from '../lib/types/sections';
import PageHero from './page-hero';
import constants from '../lib/constants';
import Link from 'next/link';
import { InputFieldType } from '../lib/types/form';

export default function Layout({
	children,
	noSiteHeader,
	textBlack,
}: LayoutProps) {

	const [isError, setIsError] = useState<Boolean | undefined>(undefined);
	const [isOpen, setIsOpen] = useState<Boolean>(false);
	const [formState, setFormState] = useState<any>({
		password: '',
	});

	useEffect(() => {
		if (localStorage.getItem('ourloveisEC') === 'true') {
			setIsOpen(false);
		} else {
			setIsOpen(true);
		}
	}, []);

	const handleChange = ({ target }) => {
		setFormState({
			...formState,
			[target.name]: target.value,
		});
	};

	const handleFormSubmit = async (e) => {
		console.log(e)
		e.preventDefault();
		setFormState((prev) => ({
			...prev,
		}));
		if (validatePassword(formState.password)) {
			localStorage.setItem('ourloveisEC', 'true');
			setIsOpen(false);
			setIsError(false);
		} else {
			setIsOpen(true);
			setIsError(true);
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [isOpen]);


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
					>
						<div className=" mx-auto flex-col md:flex-col flex items-center justify-center text-white text-center">
							<div className='flex flex-col fade-up'>
								<h2 className="text-[#FCF4EA] font-playfair text-4xl lg:text-[3rem] leading-[100%] font-medium z-20">
									{constants.FOOTER.title}
								</h2>
								<h3 className="mt-4 mb-4 text-2xl text-[#FCF4EA] z-20 whitespace-pre-wrap">
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
				{isOpen && (
					<div className="flex fixed w-full z-[1000] h-screen justify-center items-center bg-[rgba(0,0,0,0.6)] p-6 py-32">
						<div className="flex flex-col py-10 w-full max-w-[1166px] z-[1001] bg-[#FCF4EA] justify-center text-center text-[#573319] h-full lg:h-fit p-6 rounded-2xl">
							{/* <Vectors.Logo
								fill={'#B99D37'}
								className="mx-auto mb-[120px]"
							/> */}
							<span className="leading-[100%] text-xl font-garamond mb-2 font-semibold mt-[100px]">
								This event is protected 
							</span>

							<span className="leading-[140%] text-base mb-8">
								Please enter the password
							</span>

							<div
								className="uppercase flex flex-col w-full max-w-[271px] mb-[100px] relative mx-auto text-left"
								onSubmit={(e) => handleFormSubmit(e)}>
								<InputField
									field={formState.birthYear}
									handleChange={(e) => handleChange(e)}
									label={''}
									placeholder={'Password'}
									name="password"
									isError={isError}
								/>
								<div
									onClick={(e) => handleFormSubmit(e)}
									className="button text-white bg-[#46542f] px-6 py-3 lg:text-xl max-w-[190px] w-full text-nowrap text-center mx-auto capitalize">
									Unlock
								</div>
							</div>

						</div>
					</div>
				)}
			</div>
		</>
	);
}

const InputField = ({
	field,
	handleChange,
	placeholder,
	label,
	name,
	isError,
}: InputFieldType) => {
	const inputClassName =
		'input-field-dark mt-3 rounded ' +
		(!isError || isError == undefined ? ' mb-9 ' : ' mb-4 ');

	const errorClassName =
		!isError || isError == undefined
			? 'hidden '
			: 'text-[#FF7171] normal-case text-[14px] text-center';

	return (
		<div className="flex flex-col w-full mb-4">
			<div className="tracking-widest">{label}</div>
			<input
				className={inputClassName}
				name={name}
				value={field}
				onChange={(e) => handleChange(e)}
				type="text"
				placeholder={placeholder}
			/>
			<div className={errorClassName}>
				Incorrect password.
			</div>
		</div>
	);
};

const validatePassword = (password: string) => {
	console.log(password)
	if (
		password === 'ourloveisEC'
	) {
		return true;
	} else {
		return false;
	}
};
