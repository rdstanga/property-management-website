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
    
    // Hamburger Menu functionality
    const nav = document.getElementById("mySidenav");
    if (nav) {
        nav.classList.remove('hidden'); // Remove initial hide class
    }
    const hamburgerBtns = document.querySelectorAll('.hamburger');
    
    function toggleNav(e) {
        e.stopPropagation();
        nav.classList.toggle('open');
        hamburgerBtn.classList.toggle('nav-open');
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