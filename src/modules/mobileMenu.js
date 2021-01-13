const mobileMenu = () => {
  const menu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.overlay');

  document.addEventListener('click', e => {
    const target = e.target;
    if (target.matches('.mob-menu-btn') || target.matches('.mob-menu-btn>span')) {
      menu.style.right = '0';
      overlay.style.cssText = 'opacity: 1; z-index: 20';
    }
    if (target.matches('.mobile-menu-close') || target.matches('ul>li>a') || target.matches('.overlay')) {
      menu.style.right = '-400px';
      overlay.style.cssText = 'opacity: 0; z-index: -100';
    }
  });
};

export default mobileMenu;
