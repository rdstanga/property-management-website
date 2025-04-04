document.addEventListener('DOMContentLoaded', () => {
    const officeImage = document.getElementById('office-image');
    const houseSketchImage = document.getElementById('house-sketch');
    const hamburgerBtn = document.querySelector('.hamburger');
    const nav = document.getElementById("mySidenav");
    const headerEl = document.querySelector('header');
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');

    // Remove previous mode classes
    document.body.classList.remove('dark-mode', 'light-mode');

    // Function to update theme based on device setting (ignoring time-of-day)
    function updateTheme() {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        if (darkModeQuery.matches) {
            document.body.classList.add('dark-mode');
            if (officeImage) {
                officeImage.src = 'Website Images/OfficeNight.jpg';
            }
            if (houseSketchImage) {
                houseSketchImage.src = 'Website Images/HouseDarkMode.png';
            }
            themeColorMeta.setAttribute('content', '#162030'); // Safe area: navy in dark mode
            if (headerEl) {
                headerEl.style.setProperty('background-color', '#162030', 'important');
            }
        } else {
            document.body.classList.add('light-mode');
            if (officeImage) {
                officeImage.src = 'Website Images/OfficeDay.jpg';
            }
            if (houseSketchImage) {
                houseSketchImage.src = 'Website Images/HouseLightMode.png';
            }
            themeColorMeta.setAttribute('content', '#ffffff'); // Safe area: white in light mode
            if (headerEl) {
                headerEl.style.setProperty('background-color', '#ffffff', 'important');
            }
        }
    }

    // Run theme update on page load
    updateTheme();

    // Listen for changes in the device's color scheme
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMediaQuery.addEventListener('change', updateTheme);

    // Ensure nav is visible after DOM loads (remove inline transform from HTML)
    if (nav) {
        nav.style.visibility = 'visible';
    }

    // Hamburger Menu functionality
    if (hamburgerBtn && nav) {
        hamburgerBtn.addEventListener('click', toggleNav);

        // Add event listener to the close button inside nav
        const closeBtn = document.querySelector('.closebtn');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeNav);
        }

        // Close menu when clicking outside of nav and hamburger button
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                closeNav();
            }
        });
    }

    // Updated toggleNav() function
    function toggleNav() {
        let currentTransform = nav.style.transform;
        if (!currentTransform || currentTransform === "") {
            // If inline style is not set, fall back to computed style.
            const computed = window.getComputedStyle(nav).transform;
            // If no transform is applied, assume it is hidden.
            currentTransform = computed === 'none' ? 'translateX(-100%)' : computed;
        }
        // Check if the nav is currently open. We'll treat the nav as open if its transform is the identity matrix.
        if (currentTransform === "translateX(0%)" || currentTransform === "matrix(1, 0, 0, 1, 0, 0)") {
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