const showUpButton = () => {
  const upButton = document.querySelector('.up');
  upButton.style.display = 'none';
  window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 600) {
      upButton.style.display = 'block';
    } else {
      upButton.style.display = 'none';
    }
  });
  upButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

export default showUpButton;
