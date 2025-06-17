// Shared functions across all pages
document.addEventListener('DOMContentLoaded', () => {
    // Set copyright year and last modified date
    document.getElementById('copyrightYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
    
    // Hamburger menu toggle
    document.querySelector('.hamburger')?.addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.toggle('active');
    });
});