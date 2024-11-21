document.querySelectorAll('.scroll-btn').forEach(button => {
    button.addEventListener('click', function() {
        const targetSection = document.querySelector(this.getAttribute('data-target'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Toggle Menu for Hamburger and Overlay
const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    overlay.classList.toggle('active');
}
hamburger.addEventListener('click', toggleMenu);
