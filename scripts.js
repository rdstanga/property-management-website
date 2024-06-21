document.addEventListener('DOMContentLoaded', () => {
    // Time-based dark mode
    const hour = new Date().getHours();
    const nightStart = 19; // 7 PM
    const nightEnd = 7;    // 7 AM

    if (hour >= nightStart || hour < nightEnd) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }
});