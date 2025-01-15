import Head from 'next/head';
import Constants from '../lib/constants';

export default function Meta() {
	return (
		<Head>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/assets/ec_logo_bg.jpg"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/assets/ec_logo_bg.jpg"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/assets/ec_logo_bg.jpg"
			/>
			<link
				rel="manifest"
				href="/favicon/site.webmanifest"
			/>
			<link
				rel="mask-icon"
				href="/assets/ec_logo_bg.jpg"
				color="#000000"
			/>
			<link
				rel="shortcut icon"
				href="/assets/ec_logo_bg.jpg"
			/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
			/>

			<meta
				name="msapplication-TileColor"
				content="#000000"
			/>
			<meta
				name="msapplication-config"
				content="/favicon/browserconfig.xml"
			/>
			<meta
				name="theme-color"
				content="#000"
			/>
			<link
				rel="alternate"
				type="application/rss+xml"
				href="/feed.xml"
			/>
			<meta
				name="description"
				content={`We’re excited to celebrate our special day with you`}
			/>
			{/* <meta
				property="og:image"
				content={Constants.HOME_OG_IMAGE_URL}
			/> */}
		</Head>
	);
}
