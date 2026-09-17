const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('arc-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

function updateTheme(theme) {
    const isDark = theme === 'dark';
    document.documentElement.dataset.theme = theme;

    if (themeToggle) {
        themeToggle.setAttribute('aria-pressed', String(isDark));
        themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
        themeToggle.querySelector('.theme-label').textContent = isDark ? 'Light' : 'Dark';
        themeToggle.querySelector('.theme-icon').textContent = isDark ? '☼' : '◐';
    }
}

updateTheme(initialTheme);

themeToggle?.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('arc-theme', nextTheme);
    updateTheme(nextTheme);
});
