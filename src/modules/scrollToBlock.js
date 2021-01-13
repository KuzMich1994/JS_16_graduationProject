const scrollToBlock = () => {
  const navbarLinks = document.querySelectorAll('ul>li>a');

  navbarLinks.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const blockID = item.getAttribute('href').substr(1);
      console.log(blockID);
      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
};

export default scrollToBlock;
