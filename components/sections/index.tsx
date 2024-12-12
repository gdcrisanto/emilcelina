import ImageInformation from './imageInformation';
import SiteHeader from './siteHeader';
import SiteFooter from './siteFooter';
import CocktailCarousel from './cocktailCarousel';
import Slider from './slider';
import ContactForm from './contactForm';

export default {
	...ImageInformation,
	...SiteHeader,
	...SiteFooter,
	...CocktailCarousel,
	...Slider,
	...ContactForm,
};
