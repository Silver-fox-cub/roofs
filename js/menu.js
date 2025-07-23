const menuBtn = document.querySelector('.header__menu');
const menuIcon = document.querySelector('.header__menu-img');
const fullscreenMenu = document.getElementById('fullscreenMenu');
const header = document.querySelector('header');

menuBtn.addEventListener('click', () => {
    const isOpen = fullscreenMenu.classList.toggle('open');
    menuIcon.classList.toggle('rotated');
    header.classList.toggle('menu-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
});
