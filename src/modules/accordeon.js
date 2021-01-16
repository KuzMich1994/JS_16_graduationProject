const isAccordeon = () => {
  const accordeon = document.querySelector('.accordeon');
  const accordeonElem = accordeon.querySelectorAll('.element');
  const elemContent = accordeon.querySelectorAll('.element-content');

  const toggleAccordeon = index => {
    for (let i = 0; i < elemContent.length; i++) {
      if (index === i) {
        accordeonElem[i].classList.add('active');
        elemContent[i].style.display = 'block';
      } else {
        accordeonElem[i].classList.remove('active');
        elemContent[i].style.display = 'none';
      }
    }
  };

  accordeon.addEventListener('click', e => {
    let target = e.target;
    target = target.closest('.element');

    if (target) {
      accordeonElem.forEach((item, i) => {
        if (item === target) {
          toggleAccordeon(i);
        }
      });
    }
  });

};

export default isAccordeon;
