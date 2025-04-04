document.addEventListener('DOMContentLoaded', () => {
    const officeImage = document.getElementById('office-image');
    const houseSketchImage = document.getElementById('house-sketch');
    const hamburgerBtn = document.querySelector('.hamburger');
    const nav = document.getElementById("mySidenav");
    const headerEl = document.querySelector('header');
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');

    // Remove previous mode classes
    document.body.classList.remove('dark-mode', 'light-mode');

    // Update theme based on device setting
    function updateTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
            if (officeImage) {
                officeImage.src = 'Website Images/OfficeNight.jpg';
            }
            if (houseSketchImage) {
                houseSketchImage.src = 'Website Images/HouseDarkMode.png';
            }
            themeColorMeta.setAttribute('content', '#162030');
            if (headerEl) {
                headerEl.style.backgroundColor = '#162030';
            }
        } else {
            document.body.classList.add('light-mode');
            if (officeImage) {
                officeImage.src = 'Website Images/OfficeDay.jpg';
            }
            if (houseSketchImage) {
                houseSketchImage.src = 'Website Images/HouseLightMode.png';
            }
            themeColorMeta.setAttribute('content', '#ffffff');
            if (headerEl) {
                headerEl.style.backgroundColor = '#ffffff';
            }
        }
    }

    // Run theme update on page load
    updateTheme();

    // Listen for changes in the device's color scheme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);

    // Ensure nav is visible after DOM loads
    if (nav) {
        nav.style.visibility = 'visible';
    }

    // Hamburger Menu functionality using class toggling
    function toggleNav() {
        nav.classList.toggle('open');
        hamburgerBtn.classList.toggle('nav-open');
    }
    function closeNav() {
        nav.classList.remove('open');
        hamburgerBtn.classList.remove('nav-open');
    }

    if (hamburgerBtn && nav) {
        hamburgerBtn.addEventListener('click', toggleNav);
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
});