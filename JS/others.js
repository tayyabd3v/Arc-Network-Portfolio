const menuToggle = document.querySelector('.menu-toggle');
const subNav = document.querySelector('.sub-nav');

if (menuToggle && subNav) {
    menuToggle.addEventListener('click', () => {
        const isOpen = subNav.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.textContent = isOpen ? 'Close' : 'Menu';
    });

    subNav.addEventListener('click', (event) => {
        if (event.target.matches('a')) {
            subNav.classList.remove('is-open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.textContent = 'Menu';
        }
    });
}

document.querySelectorAll('.reveal').forEach((element) => {
    requestAnimationFrame(() => element.classList.add('is-visible'));
});
