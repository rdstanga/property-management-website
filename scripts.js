document.addEventListener('DOMContentLoaded', () => {
    const officeImage = document.getElementById('office-image');
    const houseSketchImage = document.getElementById('house-sketch');
    const hamburgerBtn = document.querySelector('.hamburger');
    const nav = document.getElementById("mySidenav");
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        themeColorMeta.setAttribute('content', '#162030'); // Dark mode: navy
    } else {
        themeColorMeta.setAttribute('content', '#ffffff'); // Light mode: white
    }

    // Remove previous mode to prevent class stacking
    document.body.classList.remove('dark-mode', 'light-mode');

    // Rely solely on the user's device setting for dark mode.
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
        if (officeImage) {
            officeImage.src = 'Website Images/OfficeNight.jpg';
        }
        if (houseSketchImage) {
            houseSketchImage.src = 'Website Images/HouseDarkMode.png';
        }
    } else {
        document.body.classList.add('light-mode');
        if (officeImage) {
            officeImage.src = 'Website Images/OfficeDay.jpg';
        }
        if (houseSketchImage) {
            houseSketchImage.src = 'Website Images/HouseLightMode.png';
        }
    }

    // Ensure nav is visible after DOM loads
    if (nav) {
        nav.style.visibility = 'visible';
    }

    // Hamburger Menu functionality
    if (hamburgerBtn && nav) {
        hamburgerBtn.addEventListener('click', toggleNav);

        // Add event listener to the close button inside the nav
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