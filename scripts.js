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
    const navMenu = document.querySelector('nav ul');
    const nav = document.querySelector('nav'); // Select nav for outside click

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('show'); // Toggle 'show' class
        });

        // Add event listener to close button inside the nav
        const closeBtn = navMenu.querySelector('.closebtn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                navMenu.classList.remove('show');
            });
        }

        // Close menu when clicking outside the nav
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                navMenu.classList.remove('show');
            }
        });
    }
});