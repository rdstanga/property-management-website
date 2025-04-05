document.addEventListener('DOMContentLoaded', () => {
    // Theme update code
    const officeImage = document.getElementById('office-image');
    const houseSketchImage = document.getElementById('house-sketch');
    const headerEl = document.querySelector('header');
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    
    document.body.classList.remove('dark-mode', 'light-mode');
    
    function updateTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
            if (officeImage) {
                officeImage.src = 'Website Images/OfficeNight.jpg';
            }
            if (houseSketchImage) {
                houseSketchImage.src = 'Website Images/HouseDarkMode.png';
            }
            themeColorMeta.setAttribute('content', '#162030'); // Dark safe area
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
            themeColorMeta.setAttribute('content', '#ffffff'); // Light safe area
            if (headerEl) {
                headerEl.style.backgroundColor = '#ffffff';
            }
        }
    }
    
    // Run theme update on page load
    updateTheme();
    
    // Listen for changes in the device's color scheme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);
    
    // Hamburger Menu functionality
    // Set initial state immediately
const nav = document.getElementById("mySidenav");
if (nav) {
    nav.style.transform = "translateX(-100%)";
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtns = document.querySelectorAll('.hamburger');

    function toggleNav(e) {
        e.stopPropagation();
        nav.classList.toggle('open');
    }
    function closeNav() {
        nav.classList.remove('open');
    }

    hamburgerBtns.forEach(btn => {
        btn.addEventListener('click', toggleNav);
    });

    const closeBtn = document.querySelector('.closebtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeNav();
        });
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('#mySidenav') && !e.target.closest('.hamburger')) {
            closeNav();
        }
    });
});
    // Use querySelectorAll to attach event listeners to all hamburger elements
    const hamburgerBtns = document.querySelectorAll('.hamburger');
    
    // Ensure nav is visible after DOM loads (no inline transform needed)
    if (nav) {
        nav.style.visibility = 'visible';
    }
    
    function toggleNav(e) {
        // Stop the event from propagating so that document click doesn't immediately close nav
        e.stopPropagation();
        nav.classList.toggle('open');
    }
    function closeNav() {
        nav.classList.remove('open');
    }
    
    // Attach click listener to every hamburger element
    hamburgerBtns.forEach(btn => {
        btn.addEventListener('click', toggleNav);
    });
    
    // Attach click listener to the close button (assumes one exists)
    const closeBtn = document.querySelector('.closebtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeNav();
        });
    }
    
    // Close nav if clicking outside the nav and any hamburger
    document.addEventListener('click', (e) => {
        if (!e.target.closest('#mySidenav') && !e.target.closest('.hamburger')) {
            closeNav();
        }
    });
});