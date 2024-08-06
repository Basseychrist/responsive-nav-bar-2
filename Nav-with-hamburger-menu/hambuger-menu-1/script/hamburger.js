// Function to toggle the display of the navigation menu on mobile view
function toggleMenu() {
    const mainMargin = document.querySelector('main');
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    mainMargin.classList.toggle('active');
    
}
