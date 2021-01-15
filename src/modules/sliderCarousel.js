
class SliderCarousel {
  constructor({
    servicesElements,
    servicesCarousel,
    position = 0,
    prev,
    next,
    slidesToShow = 3,
    infinity = false
  }) {
    this.servicesElements = document.querySelector(servicesElements);
    this.servicesCarousel = document.querySelector(servicesCarousel);
    this.slides = document.querySelector(servicesCarousel).children;
    this.slidesToShow = slidesToShow;
    this.options = {
      position,
      widthSlide: Math.floor(100 / this.slidesToShow),
      infinity,
      maxPosition: this.slides.length - this.slidesToShow
    },
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
  }

  addMyClass() {
    this.servicesElements.classList.add('my-services-elements');
    this.servicesCarousel.classList.add('my-services-carousel');
    for (const item of this.slides) {
      item.classList.add('my-slide');
    }
  }

  addStyle() {
    const style = document.createElement('style');
    style.id = 'sliderCarousel-style';
    style.textContent = `
      .my-services-elements {
        overflow: hidden;
      }
      .my-services-carousel {
        display: flex;
        transition: transform .5s;
        will-change: transform;
      }
      .my-slide {
        flex: 0 0 ${this.options.widthSlide}%;
        margin: 0 0 20px 0;
      }
    `;
    document.head.append(style);
  }

  prevSlide() {
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position;
      if (this.options.position < 0) {
        this.options.position = this.options.maxPosition;
      }
      this.servicesCarousel.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
    }
  }

  nextSlide() {
    if (this.options.infinity || this.options.position < this.options.maxPosition) {
      ++this.options.position;
      if (this.options.position > this.options.maxPosition) {
        this.options.position = 0;
      }
      this.servicesCarousel.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
    }
  }

  sliderControl() {
    this.prev.addEventListener('click', this.prevSlide.bind(this));
    this.next.addEventListener('click', this.nextSlide.bind(this));
  }

  init() {
    this.addMyClass();
    this.addStyle();
    console.log(this.options.widthSlide);

    if (this.prev && this.next) {
      this.sliderControl();
    } else {
      this.addArrows();
      this.sliderControl();
    }
  }
}

export default SliderCarousel;
