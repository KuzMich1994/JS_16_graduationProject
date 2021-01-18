
import modalWindow from './modules/modalWindow';
import scrollToBlock from './modules/scrollToBlock';
import mobileMenu from './modules/mobileMenu';
import slider from './modules/slider';
import SliderCarousel from './modules/sliderCarousel';
import upButton from './modules/upButton';
import isAccordeon from './modules/accordeon';
import sendForm from './modules/sendForm';

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
  infinity: true,
  responsive: [{
    breakpoint: 992,
    slideToShow: 2
  },
  {
    breakpoint: 768,
    slideToShow: 1
  }
  ]
});
carousel.init();
upButton();
isAccordeon();
sendForm();
