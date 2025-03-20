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
    const nav = document.querySelector('#mySidenav'); // Select nav with ID
    const navMenu = document.querySelector('nav ul'); // Select ul for reference, but not toggling this

    // Ensure nav is hidden initially without visible flicker
    if (nav) {
        nav.style.visibility = 'hidden';
        setTimeout(() => {
            nav.style.visibility = 'visible'; // Make nav visible after page load
        }, 0);
    }

    if (hamburgerBtn && nav) {
        hamburgerBtn.addEventListener('click', () => {
            if (nav.style.transform === 'translateX(0px)') {
                closeNav(); // Close if already open
            } else {
                openNav(); // Open if closed
            }
        });

        // Add event listener to close button inside the nav
        const closeBtn = document.querySelector('.closebtn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                closeNav();
            });
        }

        // Close menu when clicking outside the nav
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                closeNav();
            }
        });
    }

    // Open nav function
    function openNav() {
        nav.style.transform = 'translateX(0)';
    }

    // Close nav function
    function closeNav() {
        nav.style.transform = 'translateX(-100%)';
    }
});