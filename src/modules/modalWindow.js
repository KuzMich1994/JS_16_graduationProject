const modalWindow = () => {
  const modalCallback = document.querySelector('.modal-callback');
  const modalOvarlay = document.querySelector('.modal-overlay');

  const toggleModal = () => {
    document.addEventListener('click', e => {
      e.preventDefault();
      const target = e.target;

      if (target.matches('.callback-btn') || target.matches('.mob-menu-btn')) {
        modalCallback.style.display = 'block';
        modalOvarlay.style.display = 'block';
      }
    });
  };
  toggleModal();
};

export default modalWindow;
