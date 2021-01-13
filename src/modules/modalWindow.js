const modalWindow = () => {
  const modalCallback = document.querySelector('.modal-callback');
  const modalOvarlay = document.querySelector('.modal-overlay');

  document.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target;

    if (target.matches('.callback-btn') || target.matches('.mob-menu-btn')) {
      modalCallback.style.display = 'block';
      modalOvarlay.style.display = 'block';
    }
    if (target.matches('.modal-overlay') || target.matches('.modal-close>img')) {
      modalCallback.style.display = 'none';
      modalOvarlay.style.display = 'none';
    }
  });

  const addStyle = () => {
    modalCallback.style.opacity = '0';
    modalCallback.style.transition = 'all .8s';
    modalOvarlay.style.opacity = '0';
    modalOvarlay.style.transition = 'all .8s';
  };

  if (window.innerWidth > 768) {
    addStyle();
    const addAnimation = () => {
      requestAnimationFrame(addAnimation);
      if (modalCallback.style.display === 'block') {
        modalCallback.style.opacity = '1';
        modalOvarlay.style.opacity = '1';
      }
      if (modalCallback.style.display === 'none') {
        modalCallback.style.opacity = '0';
        modalOvarlay.style.opacity = '0';
      }
    };
    addAnimation();
  }

  addStyle();
};

export default modalWindow;
