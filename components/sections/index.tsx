import ImageInformation from './imageInformation';
import SiteHeader from './siteHeader';
import SiteFooter from './siteFooter';
import CocktailCarousel from './cocktailCarousel';
import Slider from './slider';
import ContactForm from './contactForm';
import FindUsAddresses from './findUsAddresses';

export default {
	...ImageInformation,
	...SiteHeader,
	...SiteFooter,
	...CocktailCarousel,
	...Slider,
	...ContactForm,
	...FindUsAddresses,
};
