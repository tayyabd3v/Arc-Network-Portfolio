const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const creatorMetric = document.getElementById('creatorMetric');
const toolMetric = document.getElementById('toolMetric');
const startMetric = document.getElementById('startMetric');
const webCreatorNameDisplay1 = document.getElementById('webCreatorNameDisplay1');
const estYear = document.getElementById('estYear');
const footerYear = document.getElementById('footerYear');

creatorMetric.textContent = ARCDATABASE.Creator;
toolMetric.textContent = ARCDATABASE.LanguagesUsedForTools.JS;
startMetric.textContent = ARCDATABASE.StartedTime.split('/').slice(0, 2).join('.');
webCreatorNameDisplay1.textContent = ARCDATABASE.Creator;
estYear.textContent = ARCDATABASE.EST;
footerYear.textContent = ARCDATABASE.EST;

menuToggle.addEventListener('click', () => {
	const isOpen = siteNav.classList.toggle('is-open');
	menuToggle.setAttribute('aria-expanded', String(isOpen));
	menuToggle.textContent = isOpen ? 'Close' : 'Menu';
});

siteNav.addEventListener('click', (event) => {
	if (event.target.matches('a')) {
		siteNav.classList.remove('is-open');
		menuToggle.setAttribute('aria-expanded', 'false');
		menuToggle.textContent = 'Menu';
	}
});

const revealObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('is-visible');
			revealObserver.unobserve(entry.target);
		}
	});
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));