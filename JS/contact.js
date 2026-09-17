const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (event) => {
        const formData = new FormData(contactForm);
        const name = formData.get('name').trim();
        const endpoint = contactForm.action;

        if (endpoint.includes('YOUR_FORM_ID')) {
            event.preventDefault();
            const drafts = JSON.parse(localStorage.getItem('arc-message-drafts') || '[]');
            drafts.push({
                name,
                email: formData.get('email'),
                message: formData.get('message'),
                createdAt: new Date().toISOString()
            });
            localStorage.setItem('arc-message-drafts', JSON.stringify(drafts));
            formStatus.textContent = `Saved locally for now, ${name}. Add your Formspree ID to deliver it by email.`;
            contactForm.reset();
        } else {
            formStatus.textContent = 'Sending your message...';
        }
    });
}

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
