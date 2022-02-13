(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    Menu: document.querySelector('[data-menu]'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', () => {toggleMenu(); toggleBodyOverflow('hidden')});
  refs.closeMenuBtn.addEventListener('click', () => {toggleMenu(); toggleBodyOverflow('visible')});

  function toggleMenu() {
    refs.Menu.classList.toggle('is-hidden');
  }

  function toggleBodyOverflow(value) {
    refs.body.style.overflow = value;
  }
})();