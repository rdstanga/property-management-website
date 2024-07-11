document.addEventListener('DOMContentLoaded', () => {
    const hour = new Date().getHours();
    const nightStart = 19;
    const nightEnd = 7;

    if (hour >= nightStart || hour < nightEnd) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }

    const hamburgerBtn = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }
});