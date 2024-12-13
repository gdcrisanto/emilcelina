import Head from 'next/head';
import Container from '../components/container';
import Layout from '../components/layout';
import Constants from '../lib/constants';
import PageHero from '../components/page-hero';
import Sections from '../components/sections';
import Vectors from '../components/vectors';
import { useState } from 'react';
import { sendContactForm } from '../lib/api';
// import contactHero from '../public/assets/contact.png';
import { Form } from '../lib/types/form';

export default function Contact() {
	const [formState, setFormState] = useState<Form>({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [validForm, setValidForm] = useState<Boolean>(false);

	const handleChange = ({ target }) => {
		setFormState({
			...formState,
			[target.name]: target.value,
		});
	};

	const handleFormSubmit = async () => {
		if (validForm) {
			setFormState((prev) => ({
				name: prev.name.trim(),
				email: prev.email.trim(),
				subject: prev.subject.trim(),
				message: prev.message.trim(),
				isLoading: true,
			}));

			try {
				await sendContactForm(formState);
				setFormState(() => ({
					name: '',
					email: '',
					subject: '',
					message: '',
					isLoading: false,
					isSent: true,
				}));
				setTimeout(() => {
					setFormState((prev) => ({
						...prev,
						isSent: false,
					}));
				}, 7000);
			} catch (err) {
				setFormState((prev) => ({
					...prev,
					error: err.message,
					isLoading: false,
				}));
			}
		}
	};

	const HERO_BG =
		'linear-gradient(0deg, rgba(0, 0, 0, 0.00) 80.36%, rgba(0, 0, 0, 0.40) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 62.2%, rgba(0, 0, 0, 0.40) 100%)';

	return (
		<Layout>
			<Head>
				<title>{`${Constants.CMS_NAME}`}</title>
			</Head>
			{/* 
			<PageHero
				bgGradient={HERO_BG}
				// image={contactHero}
				alt=""
				priority
				className="justify-center flex-row pb-10 lg:pb-16">
				<div className="mt-auto font-newsreader flex-col md:flex-col flex text-white text-6xl lg:text-[3rem] text-center mx-auto leading-[100%]">
					Leave us a message
				</div>
			</PageHero> */}

			<Container>
				<section className="flex-col 2xl:px-40 lg:flex-row flex items-center lg:justify-between pt-16 pb-24 relative w-full h-full">
					<div className="flex flex-col lg:mr-10 w-full mb-10 lg:mb-auto z-10">
						<span className="font-newsreader text-4xl lg:text-6xl font-semi tracking-tighter leading-tight mb-6">
							Philippine Craft Distillers, Inc.
						</span>
						<ListItem children={'(043) 774-5422'} />
						<ListItem children={'krc@philippinedistillers.com'} />
						<ListItem
							children={
								'A.C. Manguiat, Bo. Bulaklakan, Lipa City, Batangas, Philippines 4217'
							}
						/>
					</div>
					<Sections.ContactForm
						formState={formState}
						validForm={validForm}
						setValidForm={setValidForm}
						handleChange={handleChange}
						handleFormSubmit={handleFormSubmit}
					/>
					<Vectors.LeavesLg
						side="contact"
						className="leaf-vector hidden lg:block"
					/>
				</section>
			</Container>

			{formState?.isSent && (
				<div className="notification tracking-wider absolute lg:mr-10 self-center lg:right-0 w-full">
					<div className="flex flex-row mr-auto">
						<NotifCheck className="mr-2" />
						MESSAGE SENT
					</div>
					<Vectors.Exit
						className="cursor-pointer"
						onClick={() => {
							setFormState({
								...formState,
								isSent: false,
							});
						}}
					/>
				</div>
			)}
		</Layout>
	);
}

const ListItem = ({ children }) => {
	return (
		<span className="flex flex-row w-full mb-4 font-thin">
			<Vectors.ListIcon className="list-icon" />
			<div className="w-full ml-3">{children}</div>
		</span>
	);
};

const NotifCheck = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			{...props}>
			<circle
				cx="12"
				cy="12"
				r="9"
				stroke="#FFF8F1"
			/>
			<path
				d="M8 12L11 15L16 9"
				stroke="#FFF8F1"
			/>
		</svg>
	);
};
