document.addEventListener('DOMContentLoaded', () => {
    const hour = new Date().getHours();
    const nightStart = 19; // 7 PM
    const nightEnd = 7;    // 7 AM
    const officeImage = document.getElementById('office-image');
    const houseSketchImage = document.getElementById('house-sketch');
    const hamburgerBtn = document.querySelector('.hamburger');
    const nav = document.querySelector('#mySidenav'); // Select nav with ID

    // Remove previous mode to prevent class stacking
    document.body.classList.remove('dark-mode', 'light-mode');

    // Dark/Light mode logic
    if (
        (nightStart < nightEnd && hour >= nightStart && hour < nightEnd) ||
        (nightStart > nightEnd && (hour >= nightStart || hour < nightEnd))
    ) {
        // Apply dark mode
        document.body.classList.add('dark-mode');

        if (officeImage) {
            officeImage.src = 'Website Images/OfficeNight.jpg';
        } else {
            console.warn("Office image not found!");
        }

        if (houseSketchImage) {
            houseSketchImage.src = 'Website Images/HouseDark.png';
        } else {
            console.warn("House sketch image not found!");
        }
    } else {
        // Apply light mode
        document.body.classList.add('light-mode');

        if (officeImage) {
            officeImage.src = 'Website Images/OfficeDay.jpg';
        } else {
            console.warn("Office image not found!");
        }

        if (houseSketchImage) {
            houseSketchImage.src = 'Website Images/HouseLight.png';
        } else {
            console.warn("House sketch image not found!");
        }
    }

    // Ensure nav is hidden initially (No flicker if hidden in CSS)
    if (nav) {
        nav.style.visibility = 'visible'; // Make nav visible after load
    }

    // Hamburger Menu functionality
    if (hamburgerBtn && nav) {
        hamburgerBtn.addEventListener('click', toggleNav);

        // Add event listener to close button inside the nav
        const closeBtn = document.querySelector('.closebtn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                closeNav();
            });
        }

        // Close menu when clicking outside the nav
        document.addEventListener('click', (e) => {
            if (nav && !nav.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                closeNav();
            }
        });
    }

    function toggleNav() {
        const nav = document.getElementById("mySidenav");
        if (nav.style.transform === "translateX(0px)") {
            nav.style.transform = "translateX(-100%)";
        } else {
            nav.style.transform = "translateX(0)";
        }
    }

    // Close nav function
    function closeNav() {
        document.getElementById("mySidenav").style.transform = "translateX(-100%)";
    }
    
});