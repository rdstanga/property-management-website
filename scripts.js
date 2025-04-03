document.addEventListener('DOMContentLoaded', () => {
    const hour = new Date().getHours();
    const nightStart = 19; // 7 PM
    const nightEnd = 7;    // 7 AM
    const officeImage = document.getElementById('office-image');
    const houseSketchImage = document.getElementById('house-sketch');
    const hamburgerBtn = document.querySelector('.hamburger');
    const nav = document.getElementById("mySidenav");

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

    // Ensure nav is visible after DOM loads
    if (nav) {
        nav.style.visibility = 'visible';
    }

    // Hamburger Menu functionality
    if (hamburgerBtn && nav) {
        hamburgerBtn.addEventListener('click', toggleNav);

        // Add event listener to close button inside the nav
        const closeBtn = document.querySelector('.closebtn');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeNav);
        }

        // Close menu when clicking outside the nav
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                closeNav();
            }
        });
    }

    function toggleNav() {
        // Toggle the nav open/closed based on the current transform value,
        // and toggle a class on the hamburger button for styling.
        if (nav.style.transform === "translateX(0%)") {
            nav.style.transform = "translateX(-100%)";
            hamburgerBtn.classList.remove("nav-open");
        } else {
            nav.style.transform = "translateX(0%)";
            hamburgerBtn.classList.add("nav-open");
        }
    }

    function closeNav() {
        nav.style.transform = "translateX(-100%)";
        hamburgerBtn.classList.remove("nav-open");
    }
});