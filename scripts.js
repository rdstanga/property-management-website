document.addEventListener('DOMContentLoaded', () => {
    const hour = new Date().getHours();
    const nightStart = 19;
    const nightEnd = 7;
    const officeImage = document.getElementById('office-image');
    const houseSketchImage = document.getElementById('house-sketch');

    if (hour >= nightStart || hour < nightEnd) {
        document.body.classList.add('dark-mode');
        if (officeImage) {
            officeImage.src = 'Website Images/OfficeNight.jpg';
        }
        if (houseSketchImage) {
            houseSketchImage.src = 'Website Images/HouseDark.png';
        }
    } else {
        document.body.classList.add('light-mode');
        if (officeImage) {
            officeImage.src = 'Website Images/OfficeDay.jpg';
        }
        if (houseSketchImage) {
            houseSketchImage.src = 'Website Images/HouseLight.png';
        }
    }

    // Hamburger Menu functionality
    const hamburgerBtn = document.querySelector('.hamburger');
    const nav = document.querySelector('nav'); // Select the nav, not the ul
    const navMenu = document.querySelector('nav ul'); // Select ul for reference, but not toggling this

    if (hamburgerBtn && nav) {
        hamburgerBtn.addEventListener('click', () => {
            nav.classList.toggle('show'); // Toggle 'show' class on nav
        });

        // Add event listener to close button inside the nav
        const closeBtn = document.querySelector('.closebtn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                nav.classList.remove('show');
            });
        }

        // Close menu when clicking outside the nav
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                nav.classList.remove('show');
            }
        });
    }
});