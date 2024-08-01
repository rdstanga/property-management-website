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

    const hamburgerBtn = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            if (navMenu.style.width === "250px") {
                navMenu.style.width = "0";
            } else {
                navMenu.style.width = "250px";
            }
        });

        // Add event listener to close button inside the nav
        const closeBtn = navMenu.querySelector('.closebtn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                navMenu.style.width = "0";
            });
        }
    }
});