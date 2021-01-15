
import modalWindow from './modules/modalWindow';
import scrollToBlock from './modules/scrollToBlock';
import mobileMenu from './modules/mobileMenu';
import slider from './modules/slider';
import SliderCarousel from './modules/sliderCarousel';

modalWindow();
scrollToBlock();
mobileMenu();
slider();
const carousel = new SliderCarousel({
  servicesElements: '.services-elements',
  servicesCarousel: '.services-carousel',
  element: '.element',
  prev: '.arrow-left',
  next: '.arrow-right',
  slidesToShow: 3,
  infinity: true
});
carousel.init();
