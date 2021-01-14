const slider = () => {
  const slide = document.querySelectorAll('.item');
  const sliderText = document.querySelectorAll('.table');

  let currentSlide = 0;
  let interval;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, 'item-active');
    prevSlide(sliderText, currentSlide, 'table-active');
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'item-active');
    nextSlide(sliderText, currentSlide, 'table-active');
  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  startSlide();
};

export default slider;
