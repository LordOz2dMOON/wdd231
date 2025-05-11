//hamburger menu
document.getElementById('hamburgerBtn').addEventListener('click', function() {
    document.getElementById('primaryNav').classList.toggle('open');
    this.classList.toggle('open');
})

// Close the menu when a link is clicked
const navLinks = document.querySelectorAll('#primaryNav li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('primaryNav').classList.remove('open');
        document.getElementById('hamburgerBtn').classList.remove('open');
    });
})

//highlight current page
const path = window.location.pathname;
const page = path.split("/").pop();
const links = document.querySelectorAll('#primaryNav li a');

links.forEach(link => {
    if (link.getAttribute('href') === page || (link.getAttribute('href') === '#' && page === 'index.html' || page === ''))
        link.parentElement.classList.add('active');
});